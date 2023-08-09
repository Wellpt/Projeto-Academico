import { PrismaClient, User } from '.prisma/client'
import { NotFoundException } from '../../domain/exceptions/naoLocalizado'

import { UserDto } from '../../domain/dtos/user'

const prisma = new PrismaClient()

// Para atualizar informações de 1 usuário
export class UpdateUsersUseCase {
  constructor () {}

  async handle({ id, name, email, password}: UserDto): Promise<User>{
    // Verificar se usuário existe
    const userExist = await this.verificaUserExiste(id)

    if (!userExist) {
      throw new NotFoundException('Usuário não encontrado')
    }
    const updateUser = await prisma.user.update({
      data: {
        name,
        email,
        password,
      },
      where: {
        id,
      }
    })
    return updateUser
  }

  // verificar se usuário existe
  async verificaUserExiste(id: string): Promise<boolean> {
    const user = await prisma.user.findFirst({
      where: {
        id: {
          equals: id
        }
      }
    })
    return !!user // mas uma forma de verificar se o resultado é diferente de null
  }
}