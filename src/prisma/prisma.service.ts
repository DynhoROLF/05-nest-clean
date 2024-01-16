import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      // Construtor da classe PrismaClient
      log: ['warn', 'error'],
    })
  }

  // Ao inciar a aplicação
  onModuleInit() {
    return this.$connect()
  }

  // Erro na aplicação
  onModuleDestroy() {
    return this.$disconnect()
  }
}
