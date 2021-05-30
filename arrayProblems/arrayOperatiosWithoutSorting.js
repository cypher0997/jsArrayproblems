let container = []
let random
for ( let i = 0;i<10;i++){
    random = Math.floor(Math.random()*(999-100+1)+100)
    container[i] = [random]
}
console.log(container)

let secondLargest = function(){
    let max = Math.max.apply(null,container)
    container.splice(container.indexOf(max),1)
    return Math.max.apply(null,container)
}

console.log(secondLargest())