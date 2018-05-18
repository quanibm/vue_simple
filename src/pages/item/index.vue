<template>
  <div>
    <item-container fathercomponent="item"></item-container>
  </div>
</template>

<script>
  import itemcontainer from '@/components/itemcontainer'
  export default {
    components: {
      itemContainer: itemcontainer
    },
    created() {

    }
  }

</script>

<style scoped>


</style>
