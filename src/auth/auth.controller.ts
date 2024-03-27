import { Body, Controller, Post, UnauthorizedException } from "@nestjs/common";
import { IAuthService } from "./interfaces/i.auth.service";
import { AuthUserDto } from "./dtos/auth-user.dto";
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AuthController {
      constructor(
            private readonly authService: IAuthService,
            private jwtService: JwtService
      ) {}

      @Post('signup')
      async signUp (@Body() body: AuthUserDto): Promise<string> {
            return 'Sign up';
      }

      @Post('signin')
      async signIn (@Body() body: AuthUserDto): Promise<{ access_token: string }> {
            // const user = await this.usersService.findOne(username);
            // if (user?.password !== pass) {
            //       throw new UnauthorizedException();
            // }
            // const payload = { sub: user.userId, username: user.username };
            // return {
            //       access_token: await this.jwtService.signAsync(payload),
            // };

            return { access_token: '' };
      }

      @Post('signout')
      signOut () {
            return 'Sign out';
      }
}