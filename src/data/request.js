import axios from "axios";
import parsers from "./parsers";

async function usStats() {
  const req = await axios.get(
    "https://covidtracking.com/api/v1/us/current.json"
  );
  return parsers.usStats(req.data);
}

async function stateStats(state) {
  const req = await axios.get(
    "https://covidtracking.com/api/v1/states/current.json"
  );

  return parsers.stateStats(state, req.data);
}

async function historicUs() {
  const req = await axios.get(
    "https://covidtracking.com/api/v1/states/daily.json"
  );

  return parsers.historicUs(req.data);
}

export default {
  usStats,
  stateStats,
  historicUs,
};
