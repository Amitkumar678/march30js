// /*
// creating a object by four way
// 1 using curli brases {}
// 2 object.create
// 3 object constructor
// 4 function constructor
// */
// const obj1={
//     name:'amit',
//     lname:'kumar',
//     info:function(){
//      console.log("my name is"+ " "+this.name +" my last name is"+ " "+this.lname);
//     }
// }
// console.log(obj1.info())
// const name=Object.entries(obj1)
// console.log(name);

// //2 object.create
// const obj2=Object.create(obj1)
// console.log(obj2.info());            //here 1 doubt why come undefined
// console.log(obj2);

// //3 object constuctor
// const obj4=new Object()
// obj4.name='abhishek'
// console.log(obj4);

// //4 function constructor

// function Obj6(name,age){
//     this.name=name,
//     this.age=age,
//     this.greet=function(){
//         console.log(this.name);
//     }

// }
// const obj7=new Obj6('amit',21)
// console.log(obj7);






//this keyword is used for pointing the corrent object
// const name={
//     name:'amit',
//     lname:'kumar',
//     info:function (){
//         console.log('my name is'+this.name +'and last name is'+this.lname);
//     }
// }
// const value={
//     name:'abhishek',
//     lname:'kannaujiya'
// }
// name.info.call(value)
//call apply bind is use for borrowing the function


// const name={
//     name:'abc',
//     lname:'kumar'
// }
// let printname=function(state,country){
//     console.log('my first name is'+this.name+'my last name is'+this.lname+'my state is'+state+'my country is'+country);
// }
// const val={
//     name:'xyz',
//     lname:'shukla'
// }
// printname.apply(val,['uttarpradesh','india'])

const name={
        name:'abc',
        lname:'kumar'
    }
    let printname=function(state,country){
        console.log('my first name is'+this.name+'my last name is'+this.lname+'my state is'+state+'my country is'+country);
    }
    const val={
        name:'xyz',
        lname:'shukla'
    }
    const result = printname.bind(val,['uttarpradesh','india'])
    result()