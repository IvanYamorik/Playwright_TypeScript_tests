import { test } from './fixtures/fixture';

test('Where is my candy', async ({ helloWorld, cupOfCoffee }) => {
  console.log(helloWorld);
  console.log('Where is my candy?');
  console.log(cupOfCoffee);
});

test('I rocked it', async ({ greatDay, cupOfCoffee }) => {
  console.log(greatDay);
  console.log(cupOfCoffee);
});
