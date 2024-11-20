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
    alert("This app will tell you table of any number till ten .Press OK to continue");
    tableOf = +prompt("Enter a number whose table you want.");
    tableOne = (tableOf + " x " + "1 = " + tableOf * 1 + " ");
    tableTwo = (tableOf + " x " + "2 = " + tableOf * 2 + " ");
    tableThree = (tableOf + " x " + "3 = " + tableOf * 3 + " ");
    tableFour = (tableOf + " x " + "4 = " + tableOf * 4 + " ");
    tableFive = (tableOf + " x " + "5 = " + tableOf * 5 + " ");
    tableSix = (tableOf + " x " + "6 = " + tableOf * 6 + " ");
    tableSeven = (tableOf + " x " + "7 = " + tableOf * 7 + " ");
    tableEight = (tableOf + " x " + "8 = " + tableOf * 8 + " ");
    tableNine = (tableOf + " x " + "9 = " + tableOf * 9 + " ");
    tableTen = (tableOf + " x " + "10 =" + tableOf * 10 + " ");
    tableContainer1.innerText = tableOne;
    tableContainer2.innerText = tableTwo;
    tableContainer3.innerText = tableThree;
    tableContainer4.innerText = tableFour;
    tableContainer5.innerText = tableFive;
    tableContainer6.innerText = tableSix;
    tableContainer7.innerText = tableSeven;
    tableContainer8.innerText = tableEight;
    tableContainer9.innerText = tableNine;
    tableContainer10.innerText = tableTen;

</script>
    <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAFJihWuegkUDJ0gPslbSoIYjQNtAttx6A",
    authDomain: "tables-b272a.firebaseapp.com",
    projectId: "tables-b272a",
    storageBucket: "tables-b272a.appspot.com",
    messagingSenderId: "725978649359",
    appId: "1:725978649359:web:a50ec7de140234d8d9247a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
