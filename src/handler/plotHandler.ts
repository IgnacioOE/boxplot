import { Request, Response, NextFunction } from 'express';
import { PlotController } from '../controller/plotController';
import { datos } from '../db/fake/fakeService';
import { Data } from '../db/types/types';

export class PlotHandler {
    controller=new PlotController();
    async handleData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await this.controller.getData();
            const orderedData = await this.controller.ordenar(data.numeros);
            const dataCalc = this.controller.calculo(orderedData);
            
            res.json({centro: dataCalc.centro, outliers: dataCalc.outliers});
    
        } catch (error) {
            next(error);
        }

    }
}