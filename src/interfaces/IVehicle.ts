import { z } from 'zod';

export const VehicleZodSchema = z.object({
  model: z.string().min(3),
  year: z.number(),
  color: z.string(),
  buyValue: z.number(),
});
export interface IVehicle {
  model: string;
  year: number;
  color: string;
  status?: boolean
  buyValue: number
}