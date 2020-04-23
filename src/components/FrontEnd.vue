<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data(){
    return {
      data: {
        label: [],
        datasets: [{
            data: [],
            label: 'Front-end',
            backgroundColor: '#EF9A9A',
            pointBackgroundColor: '#EF9A9A'
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
  // チャート生成のインスタンスを作成
  mounted () {
    this.getSkills()
    this.getScores()
    this.renderChart(this.data, this.options)
  },
  methods: {
    getSkills() {
      // gettersの該当する配列を持ってくる
      const skills = this.$store.getters.skillName(0)
      // labelに代入する
      this.data.labels = skills
    },
    getScores() {
      const scores = this.$store.getters.skillScore(0)
      this.data.datasets[0].data = scores
    }
  }
}
</script>
