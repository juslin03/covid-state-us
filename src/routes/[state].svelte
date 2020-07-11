<script context="module">
  import stateNames from "../data/stateNames.js";
  import requests from "../data/request.js";

  export async function preload(page) {
    const state = page.params["state"];

    if (stateNames.find(s => s.abbreviation === state) === undefined) {
      this.error(404, {
        message: "State not found!"
      });
      return;
    }
    const fullStateName = stateNames.find(s => s.abbreviation === state).name;

    try {
      const stats = await requests.stateStats(state);
      const historic = await requests.historicState(state);
      return { state: fullStateName, stats, historic };
    } catch (error) {
      this.error(500, error.message);
      return;
    }
  }
</script>

<script>
  import CovidStat from "../components/CovidStat.svelte";
  import CovidChart from "../components/CovidChart.svelte";

  export let state;
  export let stats;
  export let historic;
  // console.log(historic, "historic");
</script>

<svelte:head>
  <title>Covid19 - {state}</title>
</svelte:head>

<div class="section header">
  <div class="container">
    <h1>Covid19 - {state}</h1>
  </div>
</div>
<CovidStat {...stats} />
<CovidChart historicData={historic} title="Covid 19 - {state}" />
