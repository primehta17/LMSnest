import { Controller,Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth') // /auth/register route
export class AuthController {
  constructor(private readonly authService: AuthService){}
  @Post('register')
  register(){
    const result=this.authService.registerUser();
     return result;
  }
}
