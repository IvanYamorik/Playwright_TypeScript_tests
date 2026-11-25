import { test as base } from '@playwright/test';

type MyFixture = {
  helloWorld: String;
  greatDay: String;
};

type WorkerFixture = {
  cupOfCoffee: String;
};

export const test = base.extend<MyFixture, WorkerFixture>({
  helloWorld: async ({}, use) => {
    const myWorld = 'Hello World';
    await use(myWorld);
    console.log('Good bye!');
  },

  greatDay: async ({ helloWorld, page }, use) => {
    const myDay = helloWorld + '. What a great day!';
    await use(myDay);
  },

  cupOfCoffee: [
    async ({}, use, workerInfo) => {
      const cup = 'The cup of coffee No: ' + workerInfo.workerIndex;
      await use(cup);
    },
    { scope: 'worker' },
  ],
});
