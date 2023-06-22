import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('E-mail inválido').min(1, 'Campo obrigatório'),
});

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
