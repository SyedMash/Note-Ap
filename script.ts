const noteContainer = document.querySelector(
  "#notesContainer"
) as HTMLDivElement;
const createButton = document.querySelector("#createNote") as HTMLButtonElement;
let notes = document.querySelectorAll(".inputBox");

function newNote() {
  let paragraph = document.createElement("p");
  let img = document.createElement("img");
  img.src = "./notes-app-img/images/delete.png";

  img.classList.add("inputBoximg");
  paragraph.classList.add("inputBox");

  paragraph.contentEditable = "true";

  paragraph.appendChild(img);
  noteContainer.appendChild(paragraph);
}

noteContainer.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.tagName === "IMG") {
    target.parentElement?.remove();
  }
});
