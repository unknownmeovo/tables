// Selecting table containers
const tableContainer1 = document.querySelector(".one");
const tableContainer2 = document.querySelector(".two");
const tableContainer3 = document.querySelector(".three");
const tableContainer4 = document.querySelector(".four");
const tableContainer5 = document.querySelector(".five");
const tableContainer6 = document.querySelector(".six");
const tableContainer7 = document.querySelector(".seven");
const tableContainer8 = document.querySelector(".eight");
const tableContainer9 = document.querySelector(".nine");
const tableContainer10 = document.querySelector(".ten");

// Alert and prompt to get the number
alert("This app will tell you the multiplication table of any number till ten. Press OK to continue.");
const tableOf = +prompt("Enter a number whose table you want.");

// Generating the table
tableContainer1.innerText = `${tableOf} x 1 = ${tableOf * 1}`;
tableContainer2.innerText = `${tableOf} x 2 = ${tableOf * 2}`;
tableContainer3.innerText = `${tableOf} x 3 = ${tableOf * 3}`;
tableContainer4.innerText = `${tableOf} x 4 = ${tableOf * 4}`;
tableContainer5.innerText = `${tableOf} x 5 = ${tableOf * 5}`;
tableContainer6.innerText = `${tableOf} x 6 = ${tableOf * 6}`;
tableContainer7.innerText = `${tableOf} x 7 = ${tableOf * 7}`;
tableContainer8.innerText = `${tableOf} x 8 = ${tableOf * 8}`;
tableContainer9.innerText = `${tableOf} x 9 = ${tableOf * 9}`;
tableContainer10.innerText = `${tableOf} x 10 = ${tableOf * 10}`;

// Firebase integration (Module)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFJihWuegkUDJ0gPslbSoIYjQNtAttx6A",
  authDomain: "tables-b272a.firebaseapp.com",
  projectId: "tables-b272a",
  storageBucket: "tables-b272a.appspot.com",
  messagingSenderId: "725978649359",
  appId: "1:725978649359:web:a50ec7de140234d8d9247a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
