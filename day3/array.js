//basic declaration of array
const cars=["Creta","Verna","Fortuner"]
console.log(cars)

//map function
cars.map((gg, num) => {
console.log(`Cars: ${num + 1}, Car: ${gg}`)
})

//sort function = sort every element
cars.sort()
console.log(cars)

//reverse function
cars.reverse()
console.log(cars)

//unshift function
cars.unshift("Maclaren")
console.log(cars)

//splice function = remove and add element
cars.splice(0,1,"Lamborgini")
console.log(cars)

//shift function //delete first element
cars.shift()
console.log(cars)

//pop function //delete last element
cars.pop()
console.log(cars)

