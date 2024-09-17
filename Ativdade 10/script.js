const ctx = document.getElementById('tabela').getContext('2d');

const ctabela = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'Valores',
            data: [],
            backgroundColor: 'rgba(20, 255, 150, 0.3)',
            borderColor: 'rgba(20, 255, 120, 1)',
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
        ctabela.data.labels.push(label);
        ctabela.data.datasets[0].data.push(value);
        ctabela.update();
        
        document.getElementById('label').value = '';
        document.getElementById('value').value = '';
    } else {
        alert('Por favor, insira um nome válido e um valor numérico.');
    }
}
