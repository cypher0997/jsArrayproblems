let container = []
let random
for ( let i = 0;i<10;i++){
    random = Math.floor(Math.random()*(999-100+1)+100)
    container[i] = [random]
}
console.log(container)
container.sort().reverse()
console.log(container[0])
