const chooseStations = function (stations) {
  let capacity = [];
  let stationType = [];
  let stationName = [];

  for (let station of stations) {
    capacity = station[1];
    stationType = station[2];

    if (
      (stationType === "school" || stationType === "community center") &&
      capacity >= 20
    ) {
      stationName.push(station[0]);
    }
  }

  return stationName;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community center"],
];

console.log(chooseStations(stations));
