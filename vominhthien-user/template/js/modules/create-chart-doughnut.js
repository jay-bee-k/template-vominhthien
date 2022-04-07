export default function createChartDoughnut() {
    document.addEventListener('DOMContentLoaded', () => {
      var ctx = document.getElementById('chartDoughnut');
      var data = {
          labels: [
            "Đặt hàng TQ",
            "NK chính nghạch",
            "Thanh toán hộ"
          ],
          datasets: [
            {
              data: [75, 11, 14],
              backgroundColor: [
                "#1a8917",
                "#076007",
                "#f2994a"
              ],
              hoverBackgroundColor: [
                "#1a8917",
                "#076007",
                "#f2994a"
              ]
            }]
        };

      if(ctx) {
        var promisedDeliveryChart = new Chart(document.getElementById('chartDoughnut'), {
          type: 'doughnut',
          data: data,
          options: {
              responsive: true,
              legend: {
                  display: false
              }
          }
        });
      }
    });
}