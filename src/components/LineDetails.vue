<template>
  <li>{{ line.name }} Line: {{ line.lineStatuses[0].statusSeverityDescription }}</li>
</template>

<script>
export default {
  name: "line-details",
  props: ["line"]

}
</script>

<style>

</style>