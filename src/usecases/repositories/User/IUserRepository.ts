import UserModel from "entities/User/User.model";
import { User } from "../../../infra/typeorm/entities/User/User.entity";

export default interface IUserRepository {
  create(user: UserModel): Promise<User>;
  find(): Promise<User[]>;
  findById(id: string): Promise<User>;
  generateInstance(user: UserModel): Promise<User>;
}
