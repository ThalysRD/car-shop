import { isValidObjectId, Model } from 'mongoose';
import { IModel } from '../interfaces/IModel';

abstract class VehicleModel<T> implements IModel <T> {
  protected _model: Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
   
  public async read() : Promise <T[]> {
    return this._model.find();
  }

  public async readOne(_id: string) : Promise<T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
    return this._model.findOne({ _id });
  }

  public async update(_id: string, obj: Partial<T>) : Promise <T | null> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
    return this._model.findByIdAndUpdate(_id, obj, { new: true });
  }

  public async delete(_id: string) : Promise<T> {
    if (!isValidObjectId(_id)) throw new Error('InvalidMongoId');
    const objDeleted = await this._model.findById(_id);
    if (!objDeleted) throw new Error('Id does not exist in the DB');
    await this._model.findByIdAndDelete(_id);
    return objDeleted;
  }
}

export default VehicleModel;