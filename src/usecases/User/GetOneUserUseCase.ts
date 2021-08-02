import {
  REDIS_GET_ONE_USER_KEY,
  REDIS_TIME_EXPIRATION,
} from "../../web/config/constants";
import { inject, injectable } from "tsyringe";
import IUserRepository from "../repositories/User/IUserRepository";
import User from "../../entities/User/User.model";
import Cache from "../../infra/redis/Cache";
import AppError from "../../web/errors/AppError";

@injectable()
export default class GetOneUserUseCase {
  constructor(@inject("UserRepository") private repository: IUserRepository) {}

  async execute(id: string): Promise<User> {
    const cached: User = await Cache.get(REDIS_GET_ONE_USER_KEY);

    const user: User = cached
      ? JSON.parse(cached.toString())
      : await this.repository.findById(id);

    if (!user) {
      throw new AppError("User not found");
    }

    await Cache.set(
      REDIS_GET_ONE_USER_KEY,
      JSON.stringify(user),
      REDIS_TIME_EXPIRATION
    );

    return user;
  }
}
