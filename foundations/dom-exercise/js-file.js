// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const red = document.createElement("p");
red.classList.add("red");
red.textContent = "Hey I'm red!";
red.style.color = 'red'

container.appendChild(red);

const blue_h3 = document.createElement("h3");
blue_h3.classList.add("blue_h3");
blue_h3.textContent = `I’m a blue h3!`;
blue_h3.style.color = 'blue'

container.appendChild(blue_h3);

// 1. Create the div container
const pinkDiv = document.createElement("div");

// 2. Add the styles (Border and Background)
pinkDiv.style.border = "1px solid black";
pinkDiv.style.backgroundColor = "pink";

// 3. Create the <h1>
const innerH1 = document.createElement("h1");
innerH1.textContent = "I’m in a div";

// 4. Create the <p>
const innerP = document.createElement("p");
innerP.textContent = "ME TOO!";

// 5. Append the h1 and p TO the pinkDiv (the "Hint" step)
pinkDiv.appendChild(innerH1);
pinkDiv.appendChild(innerP);

// 6. Finally, append the pinkDiv to the main container
container.appendChild(pinkDiv);

function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log(e.target);
});
btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});