// let name="hai"
// const Name="hi"
// console.log(name)
// {
//     let name="hari"
//     console.log(name)
// }
// let name="hari"
// isfollow=true
// a=9.0
// b=5
// let x=null
// let y=BigInt("123")
// const student = {
//     Name:"hari",
//     age:20,
//     cgpa:8.3
// }
// console.log(student.age+=15,student["name"]="harii",student)
// operators and conditional statements.........
// ....................................................
// let a=5
// let b="5"
// // a+=2
// // console.log("a =",++a)
// console.log(a===b)
// console.log(a!==b)

// let mode="gray"
// let color
// if (mode==="dark"){
//     color='white'
// }else if(mode==="gray"){
//     color="green"
// }else {
//     color='black'
// }
// console.log(color)
// let num="4"
// if(num%2===0 && typeof num!=){
//     console.log("is even")
// }else{
//     console.log("is odd")
// }
// tenary oprrator
// let age=17
// console.log(age>18?"adult":"minor")
// let choice=2
// switch(choice){
//     case 1:
//         console.log("hi")
//         break
//     case 2:
//         console.log("hlo")
//         break
//     default:
//         console.log("tq")
// }
// alert("hello")
// let name=prompt("enter your name")
// if(name==="Hari"){
//     console.log("correct")
//     const student={
//         age:prompt("enter age")
//     }
//     console.log(student.age)
// }else{
//     console.log("not correct")
// }
let pickbtn=document.getElementById("hari");

 function func(){
    document.getElementById("hi").style.backgroundColor = "black";
    document.getElementById("hari").innerText="Light";
    document.getElementById("hh").style.color="green";
}
function funx(){
    document.getElementById("hi").style.backgroundColor = "white"
    document.getElementById("hari").innerText="Dark";
    document.getElementById("hh").style.color="black";
}

// let sum=0

// for(let i=1;i<=10;i++){
//     console.log(i)
// }
// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<=5);
// ................for-of loop
// let a="hari"
// for(let i of a){
//     console.log(i)
// }
// let stu={
//     name:"hari prasad",
//     age:20,
//     height:6,
//     sex:"male"
// }
// // for(let i in stu){
// //     console.log(i,stu[i])
// // }
// // let a="hari"
// // console.log(a.length,a[3])

// console.log(`name is ${stu.name}\nage is ${stu.age+20}`,stu['name'].length)
// let a='    h  Ar  i     '
// console.log(a.trim(" "))
// let b="hari"
// b.slice(0,2)
// b.replace('h','b')
// b.charAt(2)
// console.log(b.charAt(2))
// ........................................arrays...................................................
// ...............................................
// let a=[1,2,'hi',4,5]
// console.log(a,a[2]='hlo')
// let b=['delhi','hyderabad','kakinada','samalakota']
// for(let i of b){
//     console.log(i.toUpperCase())
// }
// console.log(b)
// let a=[1,2,3,4,5,6]
// let sum=0
// for(let i of a){
//     sum+=i
// }
// console.log(sum/a.length,sum)
// ........................Array Methods.........
// let a=['hari','bunny']
// a.push('x','y')
// console.log(a)
// a.pop()
// a.pop()
// console.log(a)
// console.log(a.toString(),a)
// let b=[1,2]
// let c=a.concat(b)
// b.unshift("hii")
// a.unshift("hiii")
// console.log(c,a.shift(),b)
// let a=[1,2,3,4,5]
// a.splice(2,0,7)//add
// console.log(a)
// a.splice(2,1)
// console.log(a)//delete
// a.splice(2,1,100)
// console.log(a)
// .....................................................................functions.........
// ............................................................
// function my(a="hi"){
//     console.log(a)
// }
// my()
// function sum(x,y){
//     return x+y
// }
// console.log(sum(3,5))
// // arrow functions.....................
// const asum=(x,y)=>{
//     console.log(x+y)
// }
// const msg=()=>{
//     console.log("hari")
// }
// ...........................foreach loops...........
// let arr=[1,2,3,4,5]
// arr.forEach(function printval(val){
//     console.log(val)
// })
// console.log("\n")
// arr.forEach((v,i)=>{
//     console.log(v,i)
// })
// const calcsq=(val)=>{
//     console.log(val*val)
// }
// arr.forEach(calcsq)
// ..............................................................................................
// ..........................................................................................................
// let a=[1,7,3,4,5]
// // let b=a.filter((val)=>{
// //     return val%2===0
// // })
// let b=a.reduce((res,val)=>{
//     return res>val?res:val
// })
// console.log(b)
// ......................DOCUMENT OBJECT MODEL.........................
// ...................................................................
let h = document.querySelector("#hari")
console.log(h)
console.dir(h)
let a = document.querySelectorAll("button")
console.log(a)

let div =document.querySelector("div")
console.log(div)
console.dir(div)
