<template>
  <div class="champions col-4">
    <div class="card">
      <img class="card-img-top" :src="championData.imgUrl" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{championData.name}}</h5>
        <h6>Race: {{championData.race}}</h6>
        <h6>Class: {{championData.class}}</h6>
        <h6>Health: {{championData.hp}}</h6>
        <a @click="selectChampion(championData)" class="btn btn-primary">Select</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Champions",
    props: ['championData'],
    data() {
      return {}
    },
    computed: {},
    methods: {
      selectChampion(championData) {
        this.$store.dispatch('changeActiveChampion', championData)
        console.log(championData)
      }
    },
    components: {}
  }
</script>