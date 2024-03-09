import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { calculateTDEE } from './calculateTDEE';
import {calculateBMR} from './calculateBMR';

yargs(hideBin(process.argv))
  .command(
    '$0',
    'Calculate your Total Daily Energy Expenditure (TDEE)',
    (yargs) => {
      yargs
        .option('weight', { describe: 'Your weight in kilograms', type: 'number', demandOption: true })
        .option('height', { describe: 'Your height in centimeters', type: 'number', demandOption: true })
        .option('age', { describe: 'Your age in years', type: 'number', demandOption: true })
        .option('gender', { describe: 'Your gender (male/female)', type: 'string', demandOption: true })
        .option('activityLevel', { describe: 'Your activity level (1.2 - sedentary, 1.375 - lightly active, 1.55 - moderately active, 1.725 - very active, 1.9 - extra active)', type: 'number', demandOption: true });
    },
    (argv) => {
      const { weight, height, age, gender, activityLevel } = argv;
			console.log({ height, weight, age, gender, activityLevel});
      //const bmr = calculateBMR(weight, height, age, gender); // Implement this function based on your BMR calculation logic
      //const tdee = calculateTDEE(bmr, activityLevel);
      //console.log(`Your TDEE is ${tdee} calories.`);
    }
  )
  .parse();

