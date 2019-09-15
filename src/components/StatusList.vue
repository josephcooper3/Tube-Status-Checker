<template>
<div>
  <h3>Status Details</h3>
 
  <line-details v-for="(line, index) in lines" v-bind:line="line" v-bind:key="index"></line-details>
</div>
</template>

<script>
import LineDetails from './LineDetails'

export default {
  name: "status-list",
  props: ["lines"],
  components: {
    "line-details": LineDetails
  }
}
</script>

<style>

</style>