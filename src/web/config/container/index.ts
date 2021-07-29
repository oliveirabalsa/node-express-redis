import UserRepository from '../../../infra/typeorm/repositories/User/UserRepository';
import { container } from 'tsyringe';
import IUserRepository from '../../../usecases/repositories/User/IUserRepository';



container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);

