import * as z from 'zod';
import { ZodSchema } from 'zod';

export const profileSchema: ZodSchema = z.object({
    firstName: z.string().min(2, {message: 'first name must be at least 2 characters'}),
    lastName: z.string().min(2, {message: 'last name must be at least 2 characters'}),
    username: z.string().min(2, {message: 'username must be at least 2 characters'}),
});

export function validateWithZodSchema<T>(schema: ZodSchema<T>,data:unknown):T{
    const result = schema.safeParse(data);

    if (!result.success) {
        const errorMessages = result.error.issues.map((issue) => issue.message);
        throw new Error(errorMessages.join(', '));
    }
    return result.data;
}

export const imageSchema = z.object({
    image:validateFile()
})

function validateFile(){
    const maxUploadSize = 1024 * 1024;
    const acceptedFileTypes = ['image/'];
    return z.instanceof(File).refine((file)=>{
        return !file || file.size <= maxUploadSize
    },'File size must be less than 1MB').refine((file)=>{
        return !file || acceptedFileTypes.some((type) => file.type.startsWith(type))
    },'File must be an image')
}