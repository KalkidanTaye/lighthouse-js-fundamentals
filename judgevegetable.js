const judgeVegetable = function (vegetables, metric) {
  let x = 0;
  let selectedSubmitter;

  for (let i = 0; i < vegetables.length; i++) {
    if (vegetables[i][metric] > x) {
      x = vegetables[i][metric];
      selectedSubmitter = vegetables[i].submitter;
    }
  }
  return selectedSubmitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
  {
    submitter: "A",
    d: 5,
  },
  {
    submitter: "B",
    d: 10,
  },
  {
    submitter: "C",
    d: 25,
  },
];

const metric = "d";

console.log('"' + judgeVegetable(vegetables, metric) + '"');
