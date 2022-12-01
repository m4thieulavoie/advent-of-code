export const addAnswerToDay = (day, ...answers) => {
  console.warn("addAnswerToDay");
  const tbody = document.querySelector("#days");
  const tr = document.createElement("tr");
  tbody.appendChild(tr);
  const dayTd = document.createElement("td");
  const sourceTd = document.createElement("td");
  dayTd.innerHTML = `<a href="https://adventofcode.com/2022/day/${day}" target="_blank">${day}</a>`;
  tr?.appendChild(dayTd);
  const valueTd = document.createElement("td");
  valueTd.innerHTML = `[${answers.join(", ")}]`;
  tr?.appendChild(valueTd);
  sourceTd.innerHTML = `<a href="https://github.com/m4thieulavoie/advent-of-code/blob/main/days/day-${day}.js" target="_blank">Source</a>`;
  tr?.appendChild(sourceTd);
};
