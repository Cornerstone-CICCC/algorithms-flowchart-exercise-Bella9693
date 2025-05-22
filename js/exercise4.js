let A = 50
let B = 150
let C = 100

if (A+B>C) {
    if (A+C>B) {
        if(B+C>A) {
            console.log("Triangle is Possible")
        }else {
            console.log("Triangle is Not Possible")
        }
    }else {
        console.log("Triangle is Not possible")
    }
}else {
    console.log("Triangle is Not Possible")
}