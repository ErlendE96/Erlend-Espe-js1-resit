const url =  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";
const setupContainer = document.querySelector(".setup");
const punchlineContainer = document.querySelector(".punchline");
const h2Container = document.querySelector("h2");

async function getProducts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        createHtml(getResults);
    

    function createHtml(joke) {
      console.log(joke);
      setupContainer.innerHTML = `${joke.setup}`;
      punchlineContainer.innerHTML = `${joke.delivery}`;
      h2Container.innerHTML = `${joke.category} joke`;
      document.title = `${joke.setup}`;
    
    }}

    catch(error) {
      console.log(error);
      product2Container.innerHTML = ("error", error);
  }
}
    
getProducts();




