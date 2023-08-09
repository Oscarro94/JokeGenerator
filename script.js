const jokeElement = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');
document.addEventListener('DOMContentLoaded', getJoke);

jokeBtn.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: "application/json"
          }  
    });
    const jokeObj = await jokeData.json();
    jokeElement.innerHTML = jokeObj.joke;
    console.log(jokeData);
  }
    
