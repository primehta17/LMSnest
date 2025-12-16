import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  //Logic for user register
  //1. check if email a;ready exists
  //2. hash the password
  //3. store the user into db
  //4. genarate jwt token
  //5. send token in response
   registerUser(){
     return {message: 'User registerd successfully!'};
  }
}
