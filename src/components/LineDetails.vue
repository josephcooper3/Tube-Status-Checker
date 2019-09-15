<template>
  <tr>
    <td>{{ line.name }} Line</td>
    <td>{{ line.lineStatuses[0].statusSeverityDescription }}</td>
  </tr>
</template>

<script>
export default {
  name: "line-details",
  props: ["line"]
}
</script>

<style>

</style>