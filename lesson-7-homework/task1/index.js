
const btn = document.querySelector('button');
const input = document.querySelector('input');

btn.addEventListener('click', function(){
  const n = Number(input.value);
  console.log("Success")
  print('Waiting...');
  const now = Date.now();
  const res = fibonacci(n);
  for(let i=1;i<n;++i){
    res.next()
  }
  const costInMs = Date.now() - now;
  print(`Result: ${res.next().value} in ${costInMs}ms`);
});

const log = document.querySelector('.log');
function print(str) {
  log.innerText = str;
}

function *fibonacci(n) {
  if (n <= 2) {
    return 1;
  }
  let i = 2;
  let prev = 1
  let cur = 1;
  while(i <= n) {
    const temp = cur;
    cur = cur + prev;
    prev = temp;
    yield;
    i++;
  }
  return cur;
}