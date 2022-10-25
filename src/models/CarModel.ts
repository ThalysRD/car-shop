import { model as createModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import VehicleModel from './VehicleModel';

const carsMongooseSchema = new Schema<ICar>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  doorsQty: Number,
  seatsQty: Number,
}, { versionKey: false });

class Car extends VehicleModel<ICar> {
  constructor(model = createModel('cars', carsMongooseSchema)) {
    super(model);
  }
}

export default Car;