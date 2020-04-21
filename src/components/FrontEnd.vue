<script>
import { Radar } from 'vue-chartjs'
import { mapGetters,mapActions } from 'vuex'

export default {
  extends: Radar,
  data(){
    return {
      data: {
        label: [],
        datasets: [{
            label: 'Front-end',
            data: [3, 2, 2, 1, 3],
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
  computed: {
      ...mapGetters({
        get: 'getSkills',
      }),
  },
  created() {
      this.updateSkillCategories();
    },

  methods: {
    ...mapActions(['updateSkillCategories']),

    getSkill() {
      this.get(this.category);
    },

    async test() {
      return await this.updateSkillCategories();
    },
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
