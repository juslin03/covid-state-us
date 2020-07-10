<script context="module">
  import requests from "../data/request.js";
  export async function preload() {
    try {
      const usStats = await requests.usStats();
      const historic = await requests.historicUs();
      return { usStats, historic };
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

  console.log(historic, "historic");
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
<CovidChart />
<TableContainer />
