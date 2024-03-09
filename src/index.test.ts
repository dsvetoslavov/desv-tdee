describe('TDEE Calculator CLI', () => {
    let originalConsoleLog: any;
    let consoleOutput: string[] = [];

    const mockedConsoleLog = (output: string) => consoleOutput.push(output);

    beforeEach(() => {
        originalConsoleLog = console.log;
        console.log = mockedConsoleLog;
        consoleOutput = [];
    });

    afterEach(() => {
        console.log = originalConsoleLog;
    });

    it('should display the calculated TDEE for given inputs', () => {
        process.argv = ['node', 'src/cli.ts', '--weight', '70', '--height', '175', '--age', '25', '--gender', 'male', '--activityLevel', '1.2'];
        require('./cli'); // Assuming your CLI entry point is src/cli.ts

        expect(consoleOutput).toContain(`Your TDEE is XXXX calories.`); // Replace XXXX with the expected calculation result
    });

    // Add more tests as necessary
});
