const judgeVegetable = function (vegetables, metric) {
  let selected = 0;
  let submitterName = "";
  for (let i = 0; i < vegetables.length; i++) {
    if (metric === "redness") {
      if (vegetables[i].redness > selected) {
        selected = vegetables[i].redness;
        submitterName = vegetables[i].submitter;
      }
    } else if (metric === "plumpness") {
      if (vegetables[i].plumpness > selected) {
        selected = vegetables[i].plumpness;
        submitterName = vegetables[i].submitter;
      }
    }
  }
  return submitterName;
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
];

const metric = "redness";

console.log(judgeVegetable(vegetables, metric));
