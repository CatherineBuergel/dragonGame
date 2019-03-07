<template>
   <div class="dragons col-4">
      <div class="card">
         <img class="card-img-top" :src="dragonData.imgUrl" alt="Card image cap">
         <div class="card-body">
            <h5 class="card-title">Name: {{dragonData.name}}</h5>
            <h6>Health: {{dragonData.maxHP}}</h6>
            <a @click="selectDragon(dragonData)" class="btn btn-primary">Select</a>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "dragons",
      props: ['dragonData'],
      data() {
         return {}
      },
      computed: {},
      methods: {
         selectDragon(dragonData) {
            this.$store.dispatch('changeActiveDragon', dragonData)
            console.log(dragonData)
         }
      },
      components: {}
   }
</script>