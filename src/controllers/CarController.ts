import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {  
    const result = await this._service.create(req.body);
    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.readOne(id);
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;
    const result = await this._service.update(id, data);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    const result = await this._service.delete(id);
    if (result) return res.status(204).end();
  }
}

export default CarController;