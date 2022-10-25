import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';
import { carMockWithId } from '../../mocks/CarMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId)
			.onCall(1).resolves(null);

	});

	after(() => {
		sinon.restore()
	});
  
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMockWithId);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

	});

	describe('ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne('abobrinha');

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

	});

	describe('Update Car', () => {
		it('Success', async () => {
			sinon.stub(carModel, 'update').resolves(carMockWithId);

			const updated = await carService.update('any-id', carMockWithId);

			expect(updated).to.be.deep.eq(carMockWithId);

			sinon.restore();
		})
		
	})

});