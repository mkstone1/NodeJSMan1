const meatcuts = [
    {cut: "Tenderloin", animal: "Pig", price: 5},
    {cut: "Belly", animal:"Pig", price: 2},
    {cut: "Tenderloin", animal: "Cow", price: 10},
    {cut: "Ribeye", animal: "Cow", price: 8},
    {cut: "Breast", animal: "Chicken", price: 2},
    {cut: "Wings", animal: "Chicken", price: 3},
]
//Here we map all the cuts to an unordered list for use in html
const asUnorderedList = meatcuts.map((cut) => `<ul> The cut is ${cut.cut} froma ${cut.animal} </ul>`)
//Here we find all the cuts with chickens and store in its own array
const chickens = meatcuts.filter((cut) => cut.animal ==="Chicken")
//Here we find the cut with a name of wings
const wings = meatcuts.find((cut)=> cut.animal ==="Cow")
console.log(wings)
//Here we use reduce to find the total price and from there the average price
const averagePrice =  meatcuts.reduce((prev, curr, index) =>{
    if(index === 1){
        return curr.price
    }
    return prev + curr.price
} ) / meatcuts.length

console.log(averagePrice)



