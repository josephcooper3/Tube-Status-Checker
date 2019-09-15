<template>
<div>
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
  table {
    margin-top: 20px;
    margin-bottom: 20px
  }
</style>