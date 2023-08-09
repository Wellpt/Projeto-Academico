import { PrismaClient, User } from '.prisma/client'
import { NotFoundException } from '../../domain/exceptions/naoLocalizado'
import { UserViewDto, UserView } from '../../domain/dtos/user'

const prisma = new PrismaClient()

// lista apenas 1 usuário específico
export class GetUsersUseCase {
  constructor () {} 

  async handle(id: string): Promise<UserViewDto | null> {
    const user = await prisma.user.findFirst({
      where: {
        id: {
          equals: id
        }
      },
      select: {
        name: true,
        email: true
      }
    })
    if (!user) {
      throw new NotFoundException('Usuário não encontrado')      
    }
    return user
  }
}