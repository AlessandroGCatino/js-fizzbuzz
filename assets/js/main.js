const mul3 = "Fizz"
const mul5 = "Buzz"

for(i=1; i<=100; i++)
{
    if((i%3 == 0) && (i%5 == 0)){
        console.log(mul3+mul5)
    }
    if((i%3 == 0)){
        console.log(mul3)
    } else if ((i%5 == 0)){
        console.log(mul5)
    }
    else {
        console.log(i)
    }
    
}