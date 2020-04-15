
<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data(){
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'GitHub', 'Firebase'],
        datasets: [{
            data: [3, 3, 4, 3, 2]
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
