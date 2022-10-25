import { Router } from 'express';
import CarController from '../controllers/CarController';
import CarModel from '../models/CarModel';
import CarService from '../services/CarService';

const carsRoute = Router();

const car = new CarModel();
const carService = new CarService(car);
const carController = new CarController(carService);

carsRoute.post('/cars', (req, res) => carController.create(req, res));

carsRoute.get('/cars', (req, res) => carController.read(req, res));

carsRoute.get('/cars/:id', (req, res) => carController.readOne(req, res));

carsRoute.put('/cars/:id', (req, res) => carController.update(req, res));

carsRoute.post('/cars/:id', (req, res) => carController.delete(req, res));

export default carsRoute;