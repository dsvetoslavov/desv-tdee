export enum ActivityLevel {
	  Sedentary = 1.2,
    LightlyActive = 1.375,
    ModeratelyActive = 1.55,
    VeryActive = 1.725,
    ExtraActive = 1.9
}

export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
	return bmr * activityLevel;
}

