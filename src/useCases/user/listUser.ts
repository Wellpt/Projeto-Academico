import { PrismaClient, User } from '.prisma/client'

const prisma = new PrismaClient()

// Para lista todos os Usuários cadastrados

export class ListUsersUseCase {
  constructor () {}

  async handle(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
}