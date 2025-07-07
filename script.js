const catFact = document.getElementById('cat-fact')
const button = document.getElementById('button')

button.addEventListener('click',function(){
    getCatFact()
})

async function getCatFact() {
    try {
        const response = await fetch('https://catfact.ninja/fact') //await venter på noget sker før den går videre fetch henter data fra siden
        const data = await response.json() //.json er en funktion som laver respone om til json
        catFact.textContent = data.fact // data.fact henter den attribut fra json som hedder 'fact'
    } catch (error) {
        catFact.textContent = "Couldn't get the facts straight!"
        console.error(error);
    }
}