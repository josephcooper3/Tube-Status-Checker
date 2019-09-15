<template>
<div>
  <h3>Status Details</h3>
  <table width="100%">
    <line-details v-for="line in lines" v-bind:line="line" v-bind:key="line.id"></line-details>
  </table>
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