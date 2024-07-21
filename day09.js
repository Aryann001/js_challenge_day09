// Task 1
const parentDiv = document.getElementById("parent1");
parentDiv.innerText = "Changed";

// Task 2
const child = document.getElementsByClassName("child");
child[0].style.background = "red";

// console.log(child)
// console.log(child[0])

// Task 3
const newDiv = document.createElement("div");
newDiv.innerText = "New Div";

document.body.appendChild(newDiv);
// parentDiv.appendChild(newDiv);

// Task 4
const newLi = document.createElement("li");
newLi.innerText = "Contact";

const existingUl = document.querySelector("ul");
existingUl.appendChild(newLi);

// Task 5
parentDiv.remove();

// Task 6
existingUl.lastChild.remove();

// Task 7
existingUl.setAttribute("list", true);

// Task 8
child[0].classList.add("hero");
child[0].classList.remove("hero");

// Task 9
const task9Parent = document.getElementById("task9");
const task9button = document.getElementById("button1");
const task9button2 = document.getElementById("button2");

task9button.addEventListener("click", () => {
  task9Parent.children[0].innerText =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi fugit officia ullam animi. Totam magni numquam corrupti aliquid soluta laboriosam at harum accusantium ab eligendi error, voluptatem facilis temporibus quia quis autem quod dicta ullam assumenda recusandae esse. Sint soluta reiciendis aliquid cupiditate at ea deserunt ipsum enim corporis, ipsam culpa perspiciatis a, aut beatae natus doloremque explicabo doloribus accusamus.";
});

task9button2.addEventListener("click", () => {
  task9Parent.children[0].innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore incidunt alias cupiditate voluptatem illum sunt unde exercitationem labore? Cupiditate mollitia distinctio veniam repellendus perspiciatis exercitationem eum eius et maiores asperiores?";
});

// Task 10
existingUl.addEventListener("mouseover", (c) => {
    c.stopPropagation()
    existingUl.style.border = "2px solid red"
})

document.addEventListener("mouseover", () => {
    existingUl.style.border = "none"
})
