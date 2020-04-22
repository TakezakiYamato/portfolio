<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data(){
    return {
      data: {
        labels: ['Java', 'Ruby', 'RubyonRails', 'MySQL'],
        datasets: [{
            data: [],
            label: 'Back End',
            backgroundColor: '#80CBC4',
            pointBackgroundColor: '#80CBC4'
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
    this.getSkills()
    this.getScores()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      // gettersの該当する配列を持ってくる
      const skills = this.$store.getters.skillName(1)
      // labelに代入する
      this.data.labels = skills
    },
    getScores() {
      const scores = this.$store.getters.skillScore(1)
      this.data.datasets[0].data = scores
    }
  }
}
</script>
