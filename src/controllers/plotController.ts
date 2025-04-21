import {Data} from '../db/types/types';
import {datos} from '../db/fake/fakeService';

export class PlotController {
    async ordenar(numbers: number[]): Promise<number[]> {
        numbers = numbers.sort((a, b) => a - b);
        return numbers;
    }
    calculo(numbers: number[]) {
        const media = Math.floor(numbers.length / 2);
        const centro=numbers.slice(media-2,media+3);
        const outliers=numbers.filter(n=>!centro.includes(n));
        return {centro, outliers};
    }
}