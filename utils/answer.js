export const addAnswerToDay = (day, answer) => {
  console.warn("addAnswerToDay");
  const tbody = document.querySelector("#days");
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  const dayTd = document.createElement("td");
  const valueTd = document.createElement("td");
  const sourceTd = document.createElement("td");
  dayTd.innerHTML = `<a href="https://adventofcode.com/2022/day/${day}" target="_blank">${day}</a>`;
  valueTd.innerHTML = answer;
  sourceTd.innerHTML = `<a href="https://github.com/m4thieulavoie/advent-of-code/blob/main/days/day-${day}.js" target="_blank">Source</a>`;
  tr?.appendChild(dayTd);
  tr?.appendChild(valueTd);
  tr?.appendChild(sourceTd);
};
