const counter = {
  counterValue: 0,
  increment(){
    this.counterValue += 1;
  },

  decrement(){
    this.counterValue -= 1;
  },
};

const valueEl = document.querySelector('#value');
const plusBtn = document.querySelector('[data-action="increment"]');
const minusBtn = document.querySelector('[data-action="decrement"]');


plusBtn.addEventListener("click",function(){
  counter.increment();
  console.log(counter)
  valueEl.textContent = counter.counterValue;
});

minusBtn.addEventListener("click",function(){
  counter.decrement();
  console.log(counter)
  valueEl.textContent = counter.counterValue;
});
