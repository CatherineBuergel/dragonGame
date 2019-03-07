<template>
  <div class="start container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Champions Vs Dragons</h1>

      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="row">
          <champions class="border" :class="{'border-success': champion.id == activeChampion.id}" v-for="champion in champions"
            :championData="champion" :key="champion.id"></champions>
        </div>
      </div>
      <div class="col-2">
        <button v-if="activeChampion.name && activeDragon.name" class="btn-outline-info btn" @click="startGame()">Start
          the game</button>
      </div>
      <div class="col-5">
        <div class="row">
          <dragons class="border" :class="{'border-warning': dragon.id == activeDragon.id}" v-for="dragon in dragons"
            :dragonData="dragon" :key="dragon.id"></dragons>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Champions from '@/components/Champions.vue'
  import Dragons from '@/components/Dragons.vue'
  export default {
    name: "Start",
    mounted() {
      this.$store.dispatch('getChampions')
      this.$store.dispatch('getDragons')
    },
    props: [],
    data() {
      return {
        data: {

        }
      }
    },
    computed: {
      champions() {
        return this.$store.state.champions
      },
      dragons() {
        return this.$store.state.dragons
      },
      activeChampion() {
        return this.$store.state.activeChampion
      },
      activeDragon() {
        return this.$store.state.activeDragon
      }
    },
    methods: {
      startGame() {
        let data = {
          dragonId: this.activeDragon.id.toString(),
          championId: this.activeChampion.id.toString()
        }
        this.$store.dispatch('createGame', data)
      }
    },
    components: {
      Champions,
      Dragons
    }
  }
</script>