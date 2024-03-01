import { calculateTDEE, ActivityLevel } from './calculateTDEE';

describe('calculateTDEE', () => {
    it('calculates TDEE correctly for a sedentary lifestyle', () => {
        const bmr = 1500;
        const activityLevel = ActivityLevel.Sedentary;
        const expectedTDEE = bmr * activityLevel;
        expect(calculateTDEE(bmr, activityLevel)).toBeCloseTo(expectedTDEE);
    });

    it('calculates TDEE correctly for a lightly active lifestyle', () => {
        const bmr = 1500;
        const activityLevel = ActivityLevel.LightlyActive;
        const expectedTDEE = bmr * activityLevel;
        expect(calculateTDEE(bmr, activityLevel)).toBeCloseTo(expectedTDEE);
    });

    it('calculates TDEE correctly for a moderately active lifestyle', () => {
        const bmr = 1500;
        const activityLevel = ActivityLevel.ModeratelyActive;
        const expectedTDEE = bmr * activityLevel;
        expect(calculateTDEE(bmr, activityLevel)).toBeCloseTo(expectedTDEE);
    });

    it('calculates TDEE correctly for a very active lifestyle', () => {
        const bmr = 1500;
        const activityLevel = ActivityLevel.VeryActive;
        const expectedTDEE = bmr * activityLevel;
        expect(calculateTDEE(bmr, activityLevel)).toBeCloseTo(expectedTDEE);
    });

    it('calculates TDEE correctly for an extra active lifestyle', () => {
        const bmr = 1500;
        const activityLevel = ActivityLevel.ExtraActive;
        const expectedTDEE = bmr * activityLevel;
        expect(calculateTDEE(bmr, activityLevel)).toBeCloseTo(expectedTDEE);
    });
});

