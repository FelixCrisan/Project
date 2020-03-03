let apiCall = 'http://api.openweathermap.org/data/2.5/weather?id=681291&units=metric&APPID=b515a9393241d516a0d48ac9aab21ed9';
let apiCall2 = 'http://api.openweathermap.org/data/2.5/weather?id=665087&units=metric&APPID=b515a9393241d516a0d48ac9aab21ed9';
let apiCall3 = 'http://api.openweathermap.org/data/2.5/weather?id=683506&units=metric&APPID=b515a9393241d516a0d48ac9aab21ed9';
let apiCall4 = 'http://api.openweathermap.org/data/2.5/weather?id=680963&units=metric&APPID=b515a9393241d516a0d48ac9aab21ed9';
let chuckApi = 'https://api.chucknorris.io/jokes/random';
let newsApi = 'http://newsapi.org/v2/top-headlines?country=ro&category=technology&apiKey=26f1b33a171c404a8f0cc107308c3238';

fetch(apiCall)
    .then((response) => {
        return response.json();
    })
    .then(weatherCity = (weather) => {
        console.log(weather);
        temp = weather.main.temp;
        console.log(temp);

        document.querySelector('.loadWeather').addEventListener("mousemove", function () {
            document.querySelector('#showCel').innerHTML = temp + " &#8451;";
            // setTimeout(weatherCity, 30000); 
        });
    });

fetch(apiCall2)
    .then((response) => {
        return response.json();
    })
    .then((weather) => {
        temp2 = weather.main.temp;
        document.querySelector('.loadWeather').addEventListener("mousemove", function () {
            document.querySelector('#showCel1').innerHTML = temp2 + " &#8451;";
        });
    });

fetch(apiCall3)
    .then((response) => {
        return response.json();
    })
    .then((weather) => {
        temp3 = weather.main.temp;
        document.querySelector('.loadWeather').addEventListener("mousemove", function () {
            document.querySelector('#showCel2').innerHTML = temp3 + " &#8451;";
        });
    });

fetch(apiCall4)
    .then((response) => {
        return response.json();
    })
    .then((weather) => {
        temp4 = weather.main.temp;
        document.querySelector('.loadWeather').addEventListener("mousemove", function () {
            document.querySelector('#showCel3').innerHTML = temp4 + " &#8451;";
        });
    });

fetch(chuckApi)
    .then((response) => {
        return response.json();
    })
    .then((funFact) => {
        console.log(funFact);
        fact = funFact.value;
        image = funFact.icon_url;
        console.log(fact);
        document.querySelector('#image-fact').src = image;
        document.querySelector('#random-fact').innerText = fact;
    });

function loadFact(event) {
    event.preventDefault();
    fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => {
            return response.json();
        })
        .then((funFact) => {
            fact = funFact.value;
            image = funFact.icon_url;
            document.querySelector('#image-fact').src = image;
            document.querySelector('#random-fact').innerText = fact;
        });
}

var req = new Request(newsApi);
fetch(req)
    .then((response) => {
        return response.json();
    })
    .then((newsFact) => {
        console.log(newsFact);
        newsInfoTitle = newsFact.articles[1].title;
        newsInfoDescription = newsFact.articles[1].description;
        newsInfoURL = newsFact.articles[1].url;
        console.log(newsFact.articles[1].title);
        console.log(newsFact.articles[1].description);
        console.log(newsFact.articles[1].url);
        document.querySelector('#newsTitle').innerText = newsInfoTitle;
        document.querySelector('#newsContent').innerText = newsInfoDescription;
    });


function checkWordForPalindrome(word, event) {
    event.preventDefault();
    let valid = true;
    let wordClass = document.querySelector(".inputText");
    let wordValue = wordClass.value;
    let wordLowKey = wordValue.toString().toLowerCase();
    let reverseWord = wordLowKey.split("").reverse().join("");

    if (wordLowKey === reverseWord) {
        document.querySelector('.response').innerText = "It is a palindrome";
    } else {
        document.querySelector('.response').innerText = "It is not a palindrome";
        valid = false;
    }
    document.querySelector('.palindromeContainer').reset();
    if (wordValue === "") {
        document.querySelector('.response').innerText = "You need to write something!";
    }
};




if (localStorage.getItem('numberArray') == null) {
    var arrayOfNumbers = [];
} else {
    arrayOfNumbers = JSON.parse(localStorage.getItem('numberArray'));
    //-----------^parse the item by getting---^--stored item
}

function addTheNumbers(number, event) {
    event.preventDefault();
    if (document.querySelector(".inputNumber").value !== "") {
        arrayOfNumbers.push(document.querySelector(".inputNumber").value);
        localStorage.setItem('numberArray', JSON.stringify(arrayOfNumbers));
        //------------^store the item by stringify--^
        document.querySelector('.numberArray').innerHTML = "Numbers Added: " + arrayOfNumbers;
        console.log(arrayOfNumbers);
        document.querySelector('.numbersContainer').reset();
    } else {
        document.querySelector('.numberArray').innerText = "You need to add a number!";
    }

}

function showDup() {
    document.querySelector('.fadeout').style.opacity = '1';
    for (var i = 0; i <= arrayOfNumbers.length; i++) {

        for (var j = i; j <= arrayOfNumbers.length; j++) {

            if (i != j && arrayOfNumbers[i] == arrayOfNumbers[j]) {
                return document.querySelector(".displayNumbers").innerText = "You have a duplicate!";
            } else {
                document.querySelector(".displayNumbers").innerText = "No duplicates found!";
            }
        }
    }
}

function showEven() {
    document.querySelector('.fadeout').style.opacity = '1';
    let arrEven = [];
    for (var i = 0; i < arrayOfNumbers.length; i++) {

        if (arrayOfNumbers[i] % 2 === 0) {
            arrEven.push(arrayOfNumbers[i]);
            arrEven.sort((x, y) => x - y);
        }
    }
    return document.querySelector(".displayNumbers").innerText = arrEven;
}

function showOdd() {
    document.querySelector('.fadeout').style.opacity = '1';
    let arrOdd = [];
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] % 2 !== 0) {
            arrOdd.push(arrayOfNumbers[i]);
            arrOdd.sort((x, y) => x - y);
        }
    }
    return document.querySelector(".displayNumbers").innerText = arrOdd;
}
















function hideDiv() {
    window.setTimeout(fadeout, 8000);
}

function fadeout() {
    document.querySelector('.fadeout').style.opacity = '0';

}



function resetTheNumbers() {
    localStorage.removeItem("numberArray");
    arrayOfNumbers = [];
    document.querySelector('.numberArray').innerHTML = arrayOfNumbers;
}