import { Request, Response } from 'express'

import { UserDto } from '../domain/dtos/user'
import { ListUsersUseCase } from '../useCases/user/listUser'
import { GetUsersUseCase } from '../useCases/user/getUser'
import { CreateUsersUseCase } from '../useCases/user/createUser'
import { UpdateUsersUseCase } from '../useCases/user/updateUser'
import { DeleteUsersUseCase } from '../useCases/user/deleteUser'

// listar usuários

export async function listUser(req: Request, res: Response ) {
  const useCase = new ListUsersUseCase()
  const users = await useCase.handle()
  return res.json(users)
}

// Busca usuário pelo ID
export async function getUser(req: Request<{ id: string}>, res: Response) {
  const { id } = req.params
  const useCase = new GetUsersUseCase()
  const user = await useCase.handle(id)
  return res.json(user)
}

// Criar Usuário
export async function createUser (req: Request<{},{}>, res: Response) {
  const user = req.body
  const useCase = new CreateUsersUseCase()
  const createUser = await useCase.handle(user)
  return res.json (createUser)
}

// Update usuário 
export async function updateUser (req: Request<{id: string}, {}, Omit<UserDto, 'id'>>, res: Response) {
  const { id } = req.params
  const userData = req.body
  
  const userCase = new UpdateUsersUseCase()
  const updateUser = await userCase.handle({
    id, ...userData
  })
  return res.json (updateUser)
}

// Deletar Usuário

export async function deleteUser(req: Request<{ id: string}>, res: Response) {
  const { id } = req.params
  const useCase = new DeleteUsersUseCase()
  await useCase.handle(id)
  return res.json({
    message: 'Usuário deletado com sucesso!!!'
  })
}