// Get elements from the HTML
const noteInput = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const notesList = document.getElementById("notesList");
const noteCount = document.getElementById("noteCount");


// Function to update note count
function updateNoteCount() {

    const notes = document.querySelectorAll(".note");

    noteCount.textContent = "Total Notes: " + notes.length;
}


// Function to add a note
function addNote() {

    const noteText = noteInput.value.trim();

    // Check for empty input
    if (noteText === "") {

        alert("Please enter a note.");

        return;
    }


    // Remove "No notes added yet"
    const emptyMessage =
        document.querySelector(".empty-message");

    if (emptyMessage) {
        emptyMessage.remove();
    }


    // Create note container
    const note = document.createElement("div");

    note.classList.add("note");


    // Create note text
    const text = document.createElement("p");

    text.classList.add("note-text");

    text.textContent = noteText;


    // Create buttons container
    const buttons = document.createElement("div");

    buttons.classList.add("buttons");


    // Create Important button
    const importantBtn =
        document.createElement("button");

    importantBtn.textContent = "Important";

    importantBtn.classList.add("important-btn");


    // Create Edit button
    const editBtn =
        document.createElement("button");

    editBtn.textContent = "Edit";

    editBtn.classList.add("edit-btn");


    // Create Delete button
    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.classList.add("delete-btn");


    // Important button
    importantBtn.addEventListener("click", function () {

        note.classList.toggle("important");

        if (note.classList.contains("important")) {

            importantBtn.textContent = "Unmark";

        } else {

            importantBtn.textContent = "Important";
        }
    });


    // Edit button
    editBtn.addEventListener("click", function () {

        const newText = prompt(
            "Edit your note:",
            text.textContent
        );

        if (newText !== null &&
            newText.trim() !== "") {

            text.textContent = newText.trim();
        }
    });


    // Delete button
    deleteBtn.addEventListener("click", function () {

        note.remove();

        updateNoteCount();


        // Show empty message if there are no notes
        if (document.querySelectorAll(".note").length === 0) {

            const emptyMessage =
                document.createElement("p");

            emptyMessage.classList.add("empty-message");

            emptyMessage.textContent =
                "No notes added yet.";

            notesList.appendChild(emptyMessage);
        }
    });


    // Add buttons to buttons container
    buttons.appendChild(importantBtn);

    buttons.appendChild(editBtn);

    buttons.appendChild(deleteBtn);


    // Add text and buttons to note
    note.appendChild(text);

    note.appendChild(buttons);


    // Add note to webpage
    notesList.appendChild(note);


    // Clear input
    noteInput.value = "";


    // Update count
    updateNoteCount();
}


// Add note when Add Note button is clicked
addBtn.addEventListener("click", addNote);


// Add note when Enter key is pressed
noteInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        addNote();
    }
});