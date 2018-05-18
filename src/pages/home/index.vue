<template>
  <div>
    <item-container fathercomponent='home'></item-container>
  </div>
</template>

<script>
  import itemcontainer from '@/components/itemcontainer.vue'
  export default {
    components: {
      itemContainer: itemcontainer
    }
  }

</script>

<style scoped>


</style>
