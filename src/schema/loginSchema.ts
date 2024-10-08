import { z } from 'zod';

// Define login schema
export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(1, { message: 'Password is required' }),
});


type LoginData = z.infer<typeof loginSchema>;
