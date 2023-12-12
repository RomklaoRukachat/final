// ใช้ JavaScript เพื่อแสดง/ซ่อนเมนู dropdown
document.getElementById("dropdown").addEventListener("mouseover", function() {
    document.querySelector(".dropdown-content").style.display = "block";
});

document.getElementById("dropdown").addEventListener("mouseout", function() {
    document.querySelector(".dropdown-content").style.display = "none";
});

//   js1
function calculateGrade() {
  var score = document.getElementById("score").value;
  var resultCard = document.getElementById("result-card1");
  var resultElement = document.getElementById("result");

  if (score !== "") {
    resultCard.style.display = "block";

    if (score >= 80) {
      displayResult("A");
    } else if (score >= 70) {
      displayResult("B");
    } else if (score >= 60) {
      displayResult("C");
    } else if (score >= 50) {
      displayResult("D");
    } else {
      displayResult("F");
    }
  } else {
    alert("Please enter a valid score.");
  }
}

function displayResult(grade) {
  var resultElement = document.getElementById("result");
  resultElement.innerText = "Your grade is: " + grade;
}

// js2
function generateTable() {
  var number = document.getElementById("number").value;
  var resultCard = document.getElementById("result-card2");
  var resultElement = document.getElementById("result2");

  if (number !== "") {
    resultCard.style.display = "block";
    resultElement.innerHTML = ""; // Clear previous results

    for (var i = 1; i <= 12; i++) {
      var result = number * i;
      resultElement.innerHTML += `<p>${number} x ${i} = ${result}</p>`;
    }
  } else {
    alert("Please enter a valid number.");
  }
}

// js3
function calculateDigitSum() {
  var number = document.getElementById("number1").value;
  var resultCard3 = document.getElementById("result-card3");
  var resultElement = document.getElementById("result3");

  if (number !== "") {
    resultCard3.style.display = "block";
    
    var digitSum = 0;
    var numString = number.toString();
    
    for (var i = 0; i < numString.length; i++) {
      digitSum += parseInt(numString[i]);
    }

    resultElement.innerText = "Digit Sum: " + digitSum;
  } else {
    alert("Please enter a valid number.");
  }
}

// js4
function generateRandomLetter() {
  var resultCard = document.getElementById("result-card4");
  var resultElement = document.getElementById("result4");

  resultCard.style.display = "block";
  resultElement.innerText = ""; // 
  // Generate a random letter (A-Z)
  var randomCharCode = Math.floor(Math.random() * 26) + 65;
  var randomLetter = String.fromCharCode(randomCharCode);

  resultElement.innerText = randomLetter;
  // setInterval(generateRandomLetter, 3000);
}


// JS5
function displayRandomNumber() {
      var resultCard = document.getElementById("result-card5");
      var resultElement = document.getElementById("result5");

      resultCard.style.display = "block";
      resultElement.innerText = ""; // Clear previous results

      var randomNumber = Math.floor(Math.random() * 100) + 1;
      resultElement.innerText =   randomNumber;
    }

    // Automatic loop every 3 seconds (1000 milliseconds)
    setInterval(displayRandomNumber, 1000);
    
    const foods = [
      { name: 'Pizza', image: 'https://source.unsplash.com/200x150/?pizza' },
      { name: 'Burger', image: 'https://source.unsplash.com/200x150/?burger' },
      { name: 'Sushi', image: 'https://source.unsplash.com/200x150/?sushi' },
      { name: 'Pasta', image: 'https://source.unsplash.com/200x150/?pasta' },
      { name: 'Salad', image: 'https://source.unsplash.com/200x150/?salad' },
      { name: 'Fried rice', image: 'https://source.unsplash.com/200x150/?friedrice' },
      { name: 'Noodle', image: 'https://source.unsplash.com/200x150/?noodle' },
       

    ];
    function getRandomFood() {
      const randomIndex = Math.floor(Math.random() * foods.length);
      return foods[randomIndex];
    }
    function generateRandomFood() {
      const randomFood = getRandomFood();
      document.getElementById('foodName').textContent = `Name : ${randomFood.name}`;
      document.getElementById('foodImage').innerHTML = `Image : <img src="${randomFood.image}" alt="${randomFood.name}">`;
    }