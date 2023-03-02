import { app } from '../app'
import request from 'supertest'
import { transactionData } from './mock'
import { afterAll, beforeAll, it, expect, describe } from 'vitest'

beforeAll(async () => {
  await app.ready()
})

afterAll(async () => {
  await app.close()
})

describe('Transactions routes', () => {
  it('should user create a new transaction', async () => {
    const response = await request(app.server)
      .post('/transactions')
      .send(transactionData)

    expect(response.statusCode).toBe(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send(transactionData)

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: transactionData.title,
        amount: transactionData.amount,
      }),
    ])
  })
})
