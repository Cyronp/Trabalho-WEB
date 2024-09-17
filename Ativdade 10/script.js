const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Valores',
            data: [],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function addData() {
    const label = document.getElementById('label').value;
    const value = parseFloat(document.getElementById('value').value);

    if (label && !isNaN(value)) {
        myChart.data.labels.push(label);
        myChart.data.datasets[0].data.push(value);
        myChart.update();
        
        document.getElementById('label').value = '';
        document.getElementById('value').value = '';
    } else {
        alert('Por favor, insira um nome válido e um valor numérico.');
    }
}
