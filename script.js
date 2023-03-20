
// const sayHello = (name) => console.log("hello " + name)

// sayHello("viral")

// const sayHello2 = (name,greeting) => console.log(greeting+ " " + name)
// sayHello("viral","good morning")

// const x = {
//     name: "viral",
//     role: "js developer",
//     exp: 30,
//     show: function(){
//         console.log(`The name is ${this.name} \n The role is ${this.role}`)
//     }
// }

// x.show()

//without using arrow function 
const x2 = {
    name: "viral",
    role: "js developer",
    exp: 30,
    show: function(){
        let that = this
        console.log(this) // will print the above object
        setTimeout(function(){
            console.log(`The name is ${that.name} \n The role is ${that.role}`)
        },1000)
        
    }
}

x2.show()

//with using arrow function
const x3 = {
    name: "viral",
    role: "js developer",
    exp: 30,
    show: function(){
        //let that = this
        //console.log(this) // will print the above object

        //in arrow function it will using lexical this
        setTimeout(()=>{
            console.log(`The name is ${this.name} \n The role is ${this.role}`)
        },1000)
        
    }
}

x3.show()