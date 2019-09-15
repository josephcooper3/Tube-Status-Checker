<template>
<div>
  <table width="100%">
    <thead>
      <tr>
        <th>Line</th>
        <th>Service Status (click to see details)</th>
      </tr>
    </thead>
    <tbody>
      <line-details v-for="line in lines" v-bind:line="line" v-bind:key="line.id"></line-details>
    </tbody>
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