import PringlesGenerator from './js/pringlesGenerator.js';
import VendingMachineFunc from './js/vendingMachine.js';

const colorGenerator = new PringlesGenerator();
// 최상위 모듈 await
// console.log(await PringlesGenerator.loadData());
await colorGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();
