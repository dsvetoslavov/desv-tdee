import { calculateBMR } from './calculateBMR';

describe('calculateBMR', () => {
    it('calculates BMR for males correctly', () => {
        // BMR formula for males: 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) + 5
        expect(calculateBMR(70, 175, 25, 'male')).toBeCloseTo(1668.75);
    });

    it('calculates BMR for females correctly', () => {
        // BMR formula for females: 10 * weight(kg) + 6.25 * height(cm) - 5 * age(y) - 161
        expect(calculateBMR(70, 175, 25, 'female')).toBeCloseTo(1509.75);
    });
});

