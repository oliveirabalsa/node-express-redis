import { container } from "tsyringe";
import { Request, Response } from "express";
import CreateUserUseCase from "../../usecases/User/CreateUserUseCase";
import GetUserUseCase from "../../usecases/User/GetUserUseCase";
import GetOneUserUseCase from "../../usecases/User/GetOneUserUseCase";

class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute(request.body);

    return response.status(201).json(user);
  }

  async findAll(_: Request, response: Response): Promise<Response> {
    const getUserUseCase = container.resolve(GetUserUseCase);

    const users = await getUserUseCase.execute();

    return response.status(200).json(users);
  }

  async findOne(request: Request, response: Response): Promise<Response> {
    const getOneUserUseCase = container.resolve(GetOneUserUseCase);
    const { id } = request.params;
    const user = await getOneUserUseCase.execute(id);

    return response.status(200).json(user);
  }
}

export default new UserController();
