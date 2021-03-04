var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Estatisticas',
            backgroundColor: 'rgb(45, 177, 119)',
            borderColor: 'rgb(255, 255, 255)',
            data: [50, 60, 55, 48, 70, 65, 60, 50, 54, 66, 58, 50]
        }]
    },
    // Configuration options go here
    options: {}
});
let saldo = document.querySelector('.saldo').innerHTML = 'R$ 3.000,00'