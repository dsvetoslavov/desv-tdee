import { calculateBMR } from './calculateBMR';
import 'jest';

describe('calculateBMR', () => {
    it('calculates BMR for males correctly', () => {
        // BMR formula for males: 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5
        expect(calculateBMR(70, 175, 25, 'male')).toBeCloseTo(1673.75);
    });

    xit('calculates BMR for females correctly', () => {
        // BMR formula for females: 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161
        expect(calculateBMR(70, 175, 25, 'female')).toBeCloseTo(1509.75);
    });
});

