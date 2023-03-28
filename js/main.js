// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowestandHighest(n1,n2,n3){
    let min = Math.min(n1,n2,n3)
    let max = Math.max(n1,n2,n3)
    console.log(`The lowest num is ${min} and the highest num is ${max}`)
}    
lowestandHighest(10,20,30)