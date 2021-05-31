let dictionary  = new Map([[1,1],
[2,1],
[3,1],
[4,1],
[5,1],
[6,1],
])

let outcome
outer : while(Array.from(dictionary.values()).includes(10) != true){
    outcome = Math.floor(Math.random() * 6) + 1
    dictionary.set(outcome,dictionary.get(outcome)+1)
}


console.log(dictionary)
let res = Math.max(...dictionary.values())
for(let key of dictionary.keys()){
    if(dictionary.get(key) == 10){
        console.log(key)
        break
    }
}
