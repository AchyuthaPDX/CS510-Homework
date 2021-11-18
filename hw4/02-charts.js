let backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
];

let borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
];
const final = [];


// URL to Game of Thrones API to fetch all characters
let url = 'https://thronesapi.com/api/v2/Characters';
async function getInfo(){
  const response = await fetch(url);
  let data = await response.json();
  const houses = data.reduce((total, item) => {
    total.hasOwnProperty(item.family)
      ? total[item.family]++
      : (total[item.family] = 1);
    return total
  }, {});
  let stark = houses["Stark"] + houses["House Stark"];
  let baratheon = houses ["Baratheon"] + houses["House Baratheon"];
  let bolton = houses["Bolton"];
  let lannister = houses["House Lanister"] + houses["House Lannister"] + houses["Lannister"];
  let greyjoy = houses["Greyjoy"] + houses["House Greyjoy"];
  let tar = houses["House Targaryen"]+houses["Targaryan"]; 
  let tyrell = houses["House Tyrell"]+houses["Tyrell"];
  let lorathi = houses["Lorath"] + houses["Lorathi"];
  let mormont = houses["Mormont"];
  final.push(baratheon, bolton, greyjoy, lannister, stark, tar, tyrell, lorathi, mormont);
}

async function renderChart() {
  const donutChart = document.getElementById('donut-chart');
  await getInfo();
  console.log(final);
  const mychart = new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: ['House Baratheon', 'House Bolton', 'House Greyjoy', 'House Lannister', 'House Stark', 'House Targaryen', 'House Tyrell', 'House Lorathi', 'House Mormont'],
      datasets: [
        {
          label: 'Game of Thrones Characters',
          data: final,
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

renderChart();
