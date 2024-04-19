import { Module } from '@nestjs/common';
import { AuthController } from './authentication.controller';
import { AuthService } from './authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PermissionManager } from './entities/permission-manager.entity';
import {JwtModule} from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports:[
    TypeOrmModule.forFeature([User, PermissionManager]),
    JwtModule.register({
      global:true,
      secret:'123456',
      signOptions:{expiresIn:"1d"}
    }),
    ConfigModule
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
