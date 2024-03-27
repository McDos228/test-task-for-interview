import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
const secret = process.env.JWT_SECRET;

@Module({
      controllers: [AuthController],
      providers: [{
            provide: 'IAuthService',
            useClass: AuthService
      }],
      imports: [
            JwtModule.register({
                  global: true,
                  secret,
                  signOptions: { expiresIn: '60s' },
            }),
      ]
})
export class AuthModule {}