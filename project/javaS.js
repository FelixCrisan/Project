"use strict"


function jumpToContact() {
  document.querySelector(".contact").scrollIntoView({
    behavior: "smooth"
  });
}



function send(formular, event) {
  event.preventDefault();
  let valid = true;


  let firstNameInput = document.querySelector("[name='firstName']");
  let lastNameInput = document.querySelector("[name='lastName']");
  let emailInput = document.querySelector("[name='email']");

  let fName = firstNameInput.value;
  let lName = lastNameInput.value;
  let emailIn = emailInput.value;

  if (fName.length > 1) {

    firstNameInput.classList.add("changeColorGood");



  } else {

    firstNameInput.classList.add("changeColorBad");


    valid = false;
  };

  if (lName.length > 1) {


    lastNameInput.classList.add("changeColorGood");

  } else {

    lastNameInput.classList.add("changeColorBad");

    valid = false;
  };
  if (emailIn.length > 1) {


    emailInput.classList.add("changeColorGood");

  } else {

    emailInput.classList.add("changeColorBad");

    valid = false;
  };


  function displayText() {

    document.querySelector("[name='topText']").classList.remove("hidden");
    let showText = document.querySelector("[name='topText']");
    showText.querySelector("[name='hiddenMessage']").innerHTML = " &#9745;  Thank you for contacting us, " + fName;

  }

  if (valid) {

    displayText();
    document.form.reset();
    firstNameInput.classList.remove("changeColorGood");
    lastNameInput.classList.remove("changeColorGood");
    emailInput.classList.remove("changeColorGood");
    console.log("First name: " + fName, "Last name: " + lName);
  };


}



function hideText() {

  document.querySelector("[name='topText']").classList.add("hidden");

}





function contactFormCSS() {

  let firstNameInput = document.querySelector("[name='firstName']");
  let lastNameInput = document.querySelector("[name='lastName']");
  let emailInput = document.querySelector("[name='email']");

  let fName = firstNameInput.value;
  let lName = lastNameInput.value;
  let emailIn = emailInput.value;


  if (fName.length > 1) {

    firstNameInput.classList.add("changeColorGood");
    firstNameInput.classList.remove("changeColorBad");

  } else if (fName.length == 1) {

    firstNameInput.classList.remove("changeColorGood");
    firstNameInput.classList.add("changeColorBad");

  } else {

    firstNameInput.classList.remove("changeColorBad");

  }

  if (lName.length > 1) {

    lastNameInput.classList.add("changeColorGood");
    lastNameInput.classList.remove("changeColorBad");

  } else if (lName.length == 1) {

    lastNameInput.classList.remove("changeColorGood");
    lastNameInput.classList.add("changeColorBad");

  } else {

    lastNameInput.classList.remove("changeColorBad");

  }
  if (emailIn.length > 1) {

    emailInput.classList.add("changeColorGood");
    emailInput.classList.remove("changeColorBad");

  } else if (emailIn.length == 1) {

    emailInput.classList.remove("changeColorGood");
    emailInput.classList.add("changeColorBad");

  } else {

    emailInput.classList.remove("changeColorBad");

  }

}



function inputTextLimit() {


  if (div < 15) {

    divInput.classList.remove("counter");

  }

  if (div > 14) {
    document.querySelector("[name='divul']").classList.add("counter");

  }
}



function load_menu() {
  document.getElementById("content").innerHTML = '<object type="text/html" data="menu.html"></object>';
}