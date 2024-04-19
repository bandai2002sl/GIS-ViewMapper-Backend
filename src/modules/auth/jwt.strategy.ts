import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import {
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { Reflector } from '@nestjs/core';
import axios from 'axios';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}

@Injectable()
export class AdminAuthGuard extends AuthGuard('jwt') {
  constructor(
    private httpService: HttpService,
    private readonly reflector: Reflector,
  ) {
    super();
  }

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization'];

    const pageKey = this.reflector.get<string>('pageKey', context.getHandler());
    const permissionKey = this.reflector.get<number>(
      'permissionKey',
      context.getHandler(),
    );

    {
      console.log(pageKey, permissionKey, token);
    }

    if (pageKey && permissionKey && token) {
      return this.callApiAndCheckPermission(pageKey, permissionKey, token).then(
        (canActivate) => {
          if (!canActivate) {
            throw new UnauthorizedException();
          }
          return canActivate;
        },
      );
    }

    return super.canActivate(context);
  }

  async callApiAndCheckPermission(
    pageKey: string,
    permissionKey: number,
    token: string,
  ): Promise<boolean> {
    try {
      const response = await axios.get(
        `${process.env.SERVER_PERMISSION}/permission/check/${pageKey}?permissionKey=${permissionKey}`,
        {
          headers: {
            Authorization: token,
          },
        },
      );

      return response.status == 200;
    } catch (error) {
      return false;
    }
  }

  handleRequest(err: any, user: any, info: any) {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}
