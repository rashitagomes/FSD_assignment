#  DOM Notes Manager

A simple and interactive **Notes Manager** built using **HTML, CSS, and JavaScript**. This project demonstrates how JavaScript DOM manipulation can be used to dynamically create, edit, delete, and manage notes on a webpage..



## 🛠️ Technologies Used

* **HTML5** – Creates the structure of the application
* **CSS3** – Provides styling and responsive layout
* **JavaScript** – Handles application logic and DOM manipulation



##  DOM Concepts Demonstrated

This project uses several important JavaScript DOM methods and properties:

### `createElement()`

Used to dynamically create HTML elements such as notes and buttons.

```javascript
const note = document.createElement("div");
```

### `appendChild()`

Used to add dynamically created elements to the webpage.

```javascript
notesList.appendChild(note);
```

### `remove()`

Used to delete a note from the DOM.

```javascript
note.remove();
```

### `textContent`

Used to set or retrieve the text of an element.

```javascript
text.textContent = noteText;
```

### `addEventListener()`

Used to respond to user interactions such as button clicks.

```javascript
addBtn.addEventListener("click", addNote);
```

## Assignment Objective

The main objective of this project is to demonstrate **DOM-based web development** using JavaScript. Instead of creating all notes manually in HTML, the application dynamically creates and modifies elements based on user interaction.


