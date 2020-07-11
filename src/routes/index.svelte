<script context="module">
  import requests from "../data/request.js";
  export async function preload() {
    try {
      const usStats = await requests.usStats();
      const historic = await requests.historicUs();
      const statesData = await requests.statesData();
      return { usStats, historic, statesData };
    } catch (error) {
      this.error(500, error.message);
      return;
    }
  }
</script>

<script>
  import TableContainer from "../components/TableContainer.svelte";
  import CovidChart from "../components/CovidChart.svelte";
  import CovidStat from "../components/CovidStat.svelte";

  export let usStats;
  export let historic;
  export let statesData;
  // console.log(statesData, "statesData");
</script>

<svelte:head>
  <title>Covid19 US Tracker</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid19 - US</h1>
  </div>
</div>

<CovidStat {...usStats} />
<CovidChart historicData={historic} title="US Covid-19" />
<TableContainer data={statesData} />
