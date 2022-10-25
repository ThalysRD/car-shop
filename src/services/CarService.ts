import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';

class CarService implements IService<ICar> {
  private _car: IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise<ICar> {
    const parsedCar = CarZodSchema.safeParse(obj);
    if (!parsedCar.success) throw parsedCar.error;
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    return this._car.read();
  }

  public async readOne(_id: string): Promise<ICar | null> {
    const result = await this._car.readOne(_id);
    if (!result) throw new Error('invalidID');
    return result;
  }

  public async update(_id: string, obj: Partial<ICar>): Promise<ICar | null> {
    return this._car.update(_id, obj);
  }

  public async delete(_id: string): Promise<ICar | null> {
    return this._car.delete(_id);
  }
}

export default CarService;