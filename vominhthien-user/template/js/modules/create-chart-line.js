export default function createChartLine() {
    document.addEventListener('DOMContentLoaded', () => {
        var ctx = document.getElementById('statisticalChart');
        var data = {
            labels: ["01/07", "05/07", "10/07", "15/07", "20/07", "25/07", "31/07"],
            datasets: [{
                label: 'Counts',
                data: [140, 180, 150, 190, 190, 250, 260],
                fill: false,
                lineTension: 0.1,
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderWidth: 3,
                borderColor: 'rgba(26, 137, 23, 1)',
                borderCapStyle: 'round',
                borderJoinStyle: 'round',
                pointBorderColor: 'rgba(26, 137, 23, 1)',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: 'rgba(26, 137, 23, 1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                pointHoverBorderWidth: 2,
                pointRadius: 3,
                pointHitRadius: 20,
                pointStyle: 'circle',
            }]
        };

        if(ctx) {
            var myChart = new Chart.Line(ctx, {
                data: data,
                options: {
                    legend: {
                        display: false
                    },
                    responsive: true,
                    scales: {
                    yAxes: [{
                        ticks: {
                        min: 140,
                        max: 260
                        }
                    }]
                    }
                }
            });
        }
    });
}