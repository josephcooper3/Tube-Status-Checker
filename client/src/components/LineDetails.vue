<template>
  <tr :id="line.id">
    <td :id="line.id">{{ line.name }} Line</td>
    <td :id="line.id" v-on:click="toggleReason()">
      <span>{{ line.lineStatuses[0].statusSeverityDescription }}</span>
      <br>
      <span v-if="this.showReason === true">{{ this.line.lineStatuses[0].reason }}</span>
      </td>
  </tr>
</template>

<script>
export default {
  name: "line-details",
  props: ["line"],
  data(){
    return {
      showReason: false
    }
  },
  methods: {
    toggleReason() {
      this.showReason = !this.showReason
    }
  }
}
</script>

<style lang="css">
  td {
    color: white;
  }

  #bakerloo td {
   background-color: #996633
  }

  #central td {
    background-color: #CC3333
  }

  #circle td {
    background-color: #FFCC00;
    color: black
  }

  #district td {
    background-color: #006633
  }

  #hammersmith-city td {
    background-color: #CC9999;
    color: black
  }

  #jubilee td {
    background-color: #868F98
  }

  #metropolitan td {
    background-color: #660066
  }

  #northern td {
    background-color: #000000
  }

  #piccadilly td {
    background-color: #000099
  }

  #victoria td {
    background-color: #0099CC
  }

  #waterloo-city td {
    background-color: #66CCCC;
    color: black
  }

</style>