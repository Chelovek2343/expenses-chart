const price1 = document.getElementById('price1');
const day1 = document.getElementById('day1');
const price2 = document.getElementById('price2');
const day2 = document.getElementById('day2');
const price3 = document.getElementById('price3');
const day3 = document.getElementById('day3');
const price4 = document.getElementById('price4');
const day4 = document.getElementById('day4');
const price5 = document.getElementById('price5');
const day5 = document.getElementById('day5');
const price6 = document.getElementById('price6');
const day6 = document.getElementById('day6');
const price7 = document.getElementById('price7');
const day7 = document.getElementById('day7');

async function getInformation() {
    const resp = await fetch('data.json');
    const data =  await resp.json();

    day1.textContent = data[0].day;
    price1.textContent = `$ ${data[0].amount}`;
    day2.textContent = data[1].day;
    price2.textContent = `$ ${data[1].amount}`;
    day3.textContent = data[2].day;
    price3.textContent = `$ ${data[2].amount}`;
    day4.textContent = data[3].day;
    price4.textContent = `$ ${data[3].amount}`;
    day5.textContent = data[4].day;
    price5.textContent = `$ ${data[4].amount}`;
    day6.textContent = data[5].day;
    price6.textContent = `$ ${data[5].amount}`;
    day7.textContent = data[6].day;
    price7.textContent = `$ ${data[6].amount}`;
}

getInformation();