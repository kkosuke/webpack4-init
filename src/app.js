import './app.scss';

const init = async () => {
  console.log('hello from app.js');
  await asyncFn();
  g = 0;
};

async function asyncFn() {
  console.log([1, 2, 3].includes(0));
}
init();