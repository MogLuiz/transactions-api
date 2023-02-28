import fastify from 'fastify'
import crypto from 'node:crypto'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions')
    .where('id', '7708d8bb-61e3-4102-846d-7f257860d973')
    .select('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => console.log('HTTP Server Running!'))
