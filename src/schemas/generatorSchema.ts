import { z } from 'zod';

export const LicenseKeyGeneratorSchema = z.object({
    secretKey: z.string().min(6,"secret Key is required."),
    productId: z.string().min(1,"Product ID is required."),
    prefix: z.string().length(4,"prefix is required."),
    keyCount: z.number().int().positive().finite().lt(2000),
});

export type LicenseKeyGeneratorRequest = z.infer<typeof LicenseKeyGeneratorSchema>;