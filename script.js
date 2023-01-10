const dogImage = document.getElementById("dog-result");
const dogButton = document.getElementById("dog-btn");

dogButton.addEventListener("click",getRandomDog);

function getRandomDog(){
    fetch("https://random.dog/woof.json")
    .then(res => res.json())
    .then(data => {
        dogImage.innerHTML =`<img src="${data.url}" alt="dog image" >`
    })
}