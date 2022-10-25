import { z } from 'zod';
import { IVehicle } from './IVehicle';

export const CarZodSchema = z.object({
  doorsQty: z.number().gte(2),
  seatsQty: z.number().gte(2),
});

export interface ICar extends IVehicle {
  doorsQty: number
  seatsQty: number
}
