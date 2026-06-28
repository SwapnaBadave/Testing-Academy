function makeretrytracker(max){
 let attempts=0;
 function tryagain (testname){
    attempts++;
    if (attempts>max){
        return `${testname} exceeds max entries ${max}`;
 }
  return `attempt ${attempts}/${max} for ${testname}`;
}
return tryagain;
}
let retry=makeretrytracker(3);
console.log(retry('login'));
console.log(retry('login'));
console.log(retry('login'));
console.log(retry('login'));