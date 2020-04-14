<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data(){
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyonRails', 'MySQL'],
        datasets: [{
            data: [1, 2, 1, 3]
        }]
      },
      options: {
        scale: {
            angleLines: {
              display: false
            },
            ticks: {
              suggestedMin: 1,
              suggestedMax: 4,
              stepSize: 1,
              beginAtZero: true
            }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
