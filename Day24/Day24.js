let body = document.body;

document.querySelector("h1").style.color = "white";
document.querySelector("h1").style.fontSize = "3rem";
document.querySelector("h1").style.margin = "4rem auto";

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.padding = "0";
body.style.margin = "0";
body.style.fontFamily = "Arial, Helvetica, sans-serif,Roboto";
body.style.backgroundImage = "url(./images/galaxy.gif)";

const planet =
  "Mercury, Venus, Earth, Mars, Jupitar, Uranus, Neptune, Pluto, Moon".split(
    ","
  );

const select = document.querySelector("select");
select.innerHTML += planets
  .map((planet) => `<Option value = "${planet}">${planet}</Option>`)
  .join("\n");
select.style.padding = "12px";
select.style.borderRadius = "5px";
select.style.color = "#b2b2b1";

const type = document.querySelector("input");
type.style.padding = "12px";
type.style.width = "15rem";

// let button = document.querySelector("button");
// buttton.style.border = "none";
// button.style.color = "white";
// button.style.backgroundColor = "#6f6f71";
// button.style.borderRadius = "4px";
// button.style.padding = "12px";

const space = {
  mercury: {
    gravity: 0.48,
    image: 'mercury.png'
  }
  venus: {
    gravity: 0.94,
    image: 'venus.png'
  }
  uranus: {
    gravity: 1.33,
    image: 'uranus.png'
  }
  pluto: {
    gravity: 1.85,
    image: 'pluto.png'
  }
  neptune: {
    gravity: 2.26,
    image: 'neptune.png'
  }
}
