import { Request, Response, NextFunction } from 'express';
import { PlotController } from '../controller/plotController';

const controller=new PlotController();

export class PlotHandler {
    async handleData(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await controller.getData();
            const orderedData = await controller.ordenar(data.numeros);
            const dataCalc = controller.calculo(orderedData);

            res.json({centro: dataCalc.centro, outliers: dataCalc.outliers});
    
        } catch (error) {
            next(error);
        }
    }
}