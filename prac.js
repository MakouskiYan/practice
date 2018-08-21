var user ={
    name: "John",
    age: 30,
    sex: "male"
}
var keys = Object.keys(user);
// console.log(typeof keys);
// console.log(keys);
var array =[];
for(k in keys){
    array.push(keys[k])
}
