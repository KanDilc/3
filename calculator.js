let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "X", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons").onclick = (event) => {
  if(!event.target.classList.contains('btn')) return;
  if(event.target.classList.contains('ac')) return;

  out.textContent = '';
  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (b ==='' && sign==='') {
      if (a.length < 7) {
        a += key;
        out.textContent = a;
      }
    } else if(a!=='' && b!=='' && finish) {
      if (key === '.') {
        b += key;
        out.textContent = b;
      } else if (b.length < 7) {
        b += key;
        out.textContent = b;
      }
    } else {
      if (key === '.') {
        if (!b.includes('.')) {
          b += key;
          out.textContent = b;
        }
      } else if (b.length < 7) {
        b += key;
        out.textContent = b;
      }
    }
    console.log(a, b, sign);
    return;
  }
  
  if (key==='%') {
    if (a!=='' && b==='')  
    {    
    a = a/100;
    out.textContent = a;
    return;
}
else if(a!=='' && b!=='') {
    b = b/100;
    out.textContent = b;
    return;
}
  }

  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(sign);
    return;
  }
  if (key === '=') {
    if (b ==='') b = a;
    switch(sign) {
        case '+':
            a = +a + +b;
            break;  
        case '-':
            a = a - b;
            break;
        case 'X':
            a = a * b;
            break;    
        case '/':
            if (b === '0') {
                out.textContent = 'Error';
                a ='';
                b = '';
                sign = '';
                return;
            }
            a = a / b;
            break;        
    }
    finish = true;
    out.textContent = a;
    console.log(sign);
  }
  

}
