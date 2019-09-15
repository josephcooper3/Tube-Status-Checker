<template>
  <div id="app">
    <h1>Tube Line Status Checker</h1>
    <status-list :lines="statusDetails"></status-list>
    <button v-on:click="fetchStatusDetails()">Refresh Status</button>
    <footer>Powered by TfL Open Data. Contains OS data © Crown copyright and database rights 2016 and Geomni UK Map data © and database rights 2019</footer>
  </div>
</template>

<script>
const Key = require('../key')

import StatusList from './components/StatusList'

export default {
  name: 'app',
  data() {
    return {
      statusDetails: [],
    }
  },
  mounted() {
    this.fetchStatusDetails();
  },
  computed: {
    goodLines: function () {
      return this.statusDetails.filter((line) => line.lineStatuses[0].statusSeverityDescription === 'Good Service')
    },
    badLines: function () {
      return this.statusDetails.filter((line) => line.lineStatuses[0].statusSeverityDescription !== 'Good Service')
    }
  },
  components: {
    'status-list': StatusList,
  },
  methods: {
    fetchStatusDetails() {
      fetch(`https://api.tfl.gov.uk/Line/Mode/tube/Status?detail=true&app_id=${Key.app_id}&app_key=${Key.app_key}`)
      .then(result => result.json())
      .then(statusDetails => this.statusDetails = statusDetails)
      .catch(console.error);      
    } 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
