export function calculateBMR(weight: number, height: number, age: number, gender: string): number {
	return 10 * weight + 6.25 * height - 5 * age + 5;
}
