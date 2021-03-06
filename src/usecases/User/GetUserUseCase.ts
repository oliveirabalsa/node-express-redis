import {
  REDIS_GET_USER_KEY,
  REDIS_TIME_EXPIRATION,
} from "./../../web/config/constants";
import { inject, injectable } from "tsyringe";
import IUserRepository from "../../usecases/repositories/User/IUserRepository";
import User from "../../entities/User/User.model";
import Cache from "../../infra/redis/Cache";

@injectable()
export default class GetUserUseCase {
  constructor(@inject("UserRepository") private repository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.find();
  }
}
