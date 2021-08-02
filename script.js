"use strict";
// const uniqid = require("uniqid");

// Select the items

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");

// Edit options
let editElement;
let editFlag = false;
let editID = "";

// Submit form

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  console.log(value);
  const id = 11; // uniqid(); has to be change
  // console.log(id);
  if (value && !editFlag) {
    // console.log("add item");
    const element = document.createElement("article");
    // adding the class to the new element -> article
    element.classList.add("grocery-item");
    // console.log(element);

    // adding the id
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <!-- edit btn -->
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <!-- delete btn -->
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          `;
    // console.log(element);

    // Append child
    list.appendChild(element);
    // Display alert
    displayAlert("Added succesfully", "success");
    // Render the container
    container.classList.add("show-container");
    // console.log(container);

    // Add to local storage
    addToLocalStorage(id, value);

    // Default value in the text placeholder
    setToDefaultValue();
  } else if (value && editFlag) {
    console.log("editing");
  } else {
    displayAlert("Emptyy", "danger");
  }
}

// Function: display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // Remove the alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 4000);
}

// Default value
function setToDefaultValue() {
  grocery.value = "";
  grocery.placerholder = "e.g eggs";
  console.log("Default");
}

// Local Storage
function addToLocalStorage() {
  console.log("local Storage");
}
