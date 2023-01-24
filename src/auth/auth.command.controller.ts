import { Body, Controller, Post } from '@nestjs/common';

import { AuthInteractor } from './auth.interactor';
import { RegistrationDto } from './usecases/dto';
import { LoginDto } from './usecases/dto/login.dto';

@Controller('auth')
export class AuthCommandController {
  constructor(private readonly interactor: AuthInteractor) {}

  @Post('register')
  register(@Body() { login, password, name }: RegistrationDto): Promise<void> {
    return this.interactor.register({ login, password, name });
  }

  @Post('login')
  login(@Body() { login, password }: LoginDto): Promise<string> {
    return this.interactor.login({ login, password });
  }
}
