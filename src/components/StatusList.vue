<template>
<div>
  <h3>Status Details</h3>
  <ul>
    <line-details v-for="line in lines" v-bind:line="line" v-bind:key="line.id"></line-details>
  </ul>
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