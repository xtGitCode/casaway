import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema: ZodSchema = z.object({
    firstName: z.string().min(2, 'min length is 2'),
    lastName: z.string().min(2, 'min length is 2'),
    username: z.string().min(2, 'min length is 2'),
});