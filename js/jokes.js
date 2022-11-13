
const jokeContainer = document.querySelector(".col-sm-6");
const heading = document.querySelector("h1");

const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=5";

async function fetchJokes() {

    try {
        const response = await fetch(url);
        const json = await response.json();

        console.log(json);

        jokeContainer.innerHTML = "";

        const jokes = json.jokes;

        jokes.forEach(function(joke) {
            jokeContainer.innerHTML += 

                            `<div class="card">
                                <div class="joke-detail">
                                    <h4 class="type">${joke.category}</h4>
                                    <div class="setup">${joke.setup}</div>
                                    <div class="punchline">${joke.delivery}</div>
                                </div>
                            </div>`;
        });
      
        let third = jokes[jokes.length, 2];
        console.log(third);
        document.title = `${third.setup}`;
    }
    catch(error) {
        console.log(error);
        heading.innerHTML = ("error", error);
    }
    
}

fetchJokes();

