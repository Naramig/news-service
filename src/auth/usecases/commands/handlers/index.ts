import { Provider } from '@nestjs/common';

import { LoginHandler } from './login.handler';
import { RegisterHandler } from './register.handler';

export const Commands: Provider[] = [RegisterHandler, LoginHandler];
