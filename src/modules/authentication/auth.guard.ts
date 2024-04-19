import { CanActivate, ExecutionContext, HttpException, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private configService: ConfigService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);

        if (!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.configService.get<string>('SECRET_KEY'),
            });

            request['user_data'] = payload;

            // Kiểm tra vai trò ở đây
            const requiredRoles = this.getRequiredRolesFromDecorator(context);
            console.log(payload.role)
            console.log(payload.role)
            if (requiredRoles.length > 0 && !this.checkRoles(payload.role.toString(), requiredRoles)) {
                throw new HttpException({
                    status: 403,
                    message: "You don't have the required role",
                }, 403);
            }
        } catch (error) {
            throw new HttpException({
                status: 419,
                message: "Token expired or invalid"
            }, 419);
        }

        return true;
    }

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization ? request.headers.authorization.split(' ') : [];

        return type === 'Bearer' ? token : undefined;
    }

    private getRequiredRolesFromDecorator(context: ExecutionContext): string[] {
    const handler = context.getHandler();
    const roles = Reflect.getMetadata('roles', handler);

    return roles || [];
}


    private checkRoles(userRole: string, requiredRoles: string[]): boolean {
        // return requiredRoles.every(role => userRoles.includes(role));
        return requiredRoles.includes(userRole);
    }
}
