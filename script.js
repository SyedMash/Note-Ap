var noteContainer = document.querySelector("#notesContainer");
var createButton = document.querySelector("#createNote");
var notes = document.querySelectorAll(".inputBox");
function newNote() {
    var paragraph = document.createElement("p");
    var img = document.createElement("img");
    img.src = "./notes-app-img/images/delete.png";
    img.classList.add("inputBoximg");
    paragraph.classList.add("inputBox");
    paragraph.contentEditable = "true";
    paragraph.appendChild(img);
    noteContainer.appendChild(paragraph);
}
noteContainer.addEventListener("click", function (event) {
    var _a;
    var target = event.target;
    if (target.tagName === "IMG") {
        (_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    }
});
