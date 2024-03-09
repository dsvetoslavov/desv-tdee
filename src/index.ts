import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {calculateTDEE} from './calculateTDEE';
import {calculateBMR} from './calculateBMR';

const a = yargs(hideBin(process.argv))
  .option('weight', {
		description: 'Your weight in centimeters',
		type: 'number',
		demandOption: true
	})

const parsed = await a.parse();
parsed.weighth
