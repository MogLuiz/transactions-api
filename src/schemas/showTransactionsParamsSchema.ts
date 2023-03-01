import { z } from 'zod'

export const showTransactionsParamsSchema = z.object({
  id: z.string().uuid(),
})
