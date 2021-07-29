import { container } from "tsyringe";
import { Request, Response } from "express";
import CreateUserUseCase from "../../usecases/User/CreateUserUseCase";
import GetUserUseCase from "../../usecases/User/GetUserUseCase";

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const createUser = container.resolve(CreateUserUseCase);

    const user = await createUser.execute(request.body);

    return response.status(201).json(user);
  }

  async findAll(_: Request, response: Response): Promise<Response> {
    const getUser = container.resolve(GetUserUseCase);

    const users = await getUser.execute();

    return response.status(200).json(users);
  }
}

export default new UserController();
