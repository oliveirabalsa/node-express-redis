import UserModel from "entities/User/User.model";
import { User } from "../../entities/User/User.entity";
import { getRepository, Repository } from "typeorm";
import IUserRepository from "usecases/repositories/User/IUserRepository";

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  async findById(id: string): Promise<User> {
    return await this.ormRepository.findOneOrFail({ id });
  }
  async generateInstance(user: UserModel): Promise<User> {
    return await this.ormRepository.create(user);
  }
  async find(): Promise<User[]> {
    return await this.ormRepository.find();
  }

  async create(user: Omit<UserModel, "id">): Promise<User> {
    return await this.ormRepository.save(user);
  }
}

export default UserRepository;
