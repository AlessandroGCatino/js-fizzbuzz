const mul3 = "Fizz"
const mul5 = "Buzz"
const foglio = document.getElementById("sheet")


console.log(foglio)

for(i=1; i<=100; i++)
{
    if((i%3 == 0) && (i%5 == 0)){
        console.log(mul3+mul5)
        foglio.innerHTML += `<div class="col-2 p-2"> <div class="square mul15"> ${mul3+mul5} </div> </div>`
    } else if((i%3 == 0)){
        console.log(mul3)
        foglio.innerHTML += `<div class="col-2 p-2"> <div class="square mul3"> ${mul3} </div> </div>`
    } else if ((i%5 == 0)){
        console.log(mul5)
        foglio.innerHTML += `<div class="col-2 p-2"> <div class="square mul5"> ${mul5} </div> </div>`
    } else {
        console.log(i)
        foglio.innerHTML += `<div class="col-2 p-2"> <div class="square bg-success"> ${i} </div> </div>`
    }
}