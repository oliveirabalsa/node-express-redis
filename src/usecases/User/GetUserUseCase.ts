import { inject, injectable } from "tsyringe";
import IUserRepository from "../../usecases/repositories/User/IUserRepository";
import User from "../../entities/User/User.model";

@injectable()
export default class GetUserUseCase {
  constructor(@inject("UserRepository") private repository: IUserRepository) {}

  async execute(): Promise<User[]> {
    return await this.repository.find();
  }
}
