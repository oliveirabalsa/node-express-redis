import { validate } from "class-validator";
import { inject, injectable } from "tsyringe";
import IUserRepository from "../../usecases/repositories/User/IUserRepository";
import User from "../../entities/User/User.model";
import AppError from "../../web/errors/AppError";

@injectable()
export default class CreateUserUseCase {
  constructor(@inject("UserRepository") private repository: IUserRepository) {}

  async execute(user: User): Promise<User> {
    return this.repository.create(user);
  }
}
