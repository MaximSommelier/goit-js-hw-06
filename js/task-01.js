

const itemsEl = document.querySelectorAll('.item');
const result = itemsEl.length;
console.log(`Number of categories: ${result}`);


itemsEl.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});