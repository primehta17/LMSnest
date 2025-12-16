import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterDto } from './dto/registerUser.dto';

@Injectable()
export class AuthService {

  //Logic for user register
  //1. check if email a;ready exists
  //2. hash the password
  //3. store the user into db
  //4. genarate jwt token
  //5. send token in response
  constructor(private readonly userService: UserService){}
   registerUser(registerUserDto:RegisterDto){
    console.log("registerDto",registerUserDto);
     return {message: 'User registerd successfully!'};
  }
}
