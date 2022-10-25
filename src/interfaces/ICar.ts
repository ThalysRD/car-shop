import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

export const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number().gte(2),
  seatsQty: z.number().gte(2),
});

export type ICar = z.infer<typeof CarZodSchema>;
