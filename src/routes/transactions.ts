import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .where('id', '7708d8bb-61e3-4102-846d-7f257860d973')
      .select('*')

    return transaction
  })
}
