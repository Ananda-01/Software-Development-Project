// ES6 is created to standardize JavaScript
// here we can use let,const etc

// function nm(kih)
// {
//     if(true)
//     {
        // var x="hello";
        // console.log(x);

        // let y="world";
        // console.log(y);

        // const z="Win";
        // console.log(z);
    // }
    // console.log(x);
    // console.log(y);
//     console.log(z);
// }

// console.log(nm());

// --------------->>>>>>>>>>>>>>>>------------------

// lets talk about difference between let and const

// let nm="joyful";
// nm="willingness";  // change name
// console.log(nm);

// const nm="Dhaka";
// nm="Feni";
// console.log(nm); // not changeable


// ------------------------->>>>>>>>>>>>>>

// multiple line string
// const city=`This is the city of joy
// which is the also ancient city of the india`;
// console.log(city);

// template string
// const vcity="Dhaka";
// const dcity=`${vcity} University`;
// console.log(dcity);

// spread operator
// const num=[1,2,3,4,5,6,7,8];
// console.log(num);
// console.log(...num); // array without third brackets

// const ar1=[7,8,9,3,5,6];
// const ar2=["hiks","kisw","kiws","nusi",...ar1];
// console.log(ar2);
// console.log(Math.max(...ar1));  // find max value using built in method

//---------------->>>>>>>>>>>>>>>>>>>>>>>>>-----------------------

// arrow function
// const test=()=> 2+3;
// console.log(test());

// const test1=()=>
// {
//     console.log("face challenge and rise");
//     return "ecstesy";
// }

// console.log(test1());

// const test2=(a,b)=>
// {
//     console.log(a+b);
//     return "sum";
// }
// console.log(test2(5,8));


// --------------------->>>>>>>>>>>>>>>>>---------------------------

// array destructuring
// const num=[1,2,3,4,5,6,7];
// const [a,b,c,d]=num;
// console.log(a,b);
// console.log(a,d);

// object destructuring
// const person={
//     name:"Anand",
//     age:22,
//     city:"Ctg",
//     country:"BanglaDesh"
// }
// const x=person.age;
// console.log(x);
// const desh=person.country;
// console.log(desh);

// nested object destructuring
// const arr=[
//     {
//         name:"Anand",
//         age:22,
//         city:"Ctg",
//         country:"BanglaDesh",
//         friend:["jikw","lihw","sijdd","aikls"]
//     },
//     {},{}];

// console.log(arr[0].friend[2]);


//--------------------->>>>>>>>>>>>>>>>>--------------------------------

// map, filter, find,forEach

// using for loop
// const ar1=[2,3,5];
// let ar2=[];
// for(let i=0;i<ar1.length;i++)
// {
//     const sqr=ar1[i]*ar1[i];
//     ar2.push(sqr);
// }
// console.log(ar2);

// same task using map
// const ar1=[2,3,5];
// const sqr=ar1.map(x=>x*x);
// console.log(sqr);

// using filter
// const product = [
//     {id:1,name:"apple",price:90,color:"golden"},
//     {id:2,name:"apple",price:900,color:"pink"},
//     {id:3,name:"xiomi",price:80,color:"golden"},
//     {id:4,name:"nokia",price:50,color:"black"},
//     {id:5,name:"oppo",price:70,color:"golden"},
// ]
// const result=product.filter((pd)=>pd.color=="golden");
// console.log(result);

// const result2=product.find((pd)=>pd.id == 1);
// console.log(result2);


// const productContainer=document.getElementById("product-container");
// const result3=product.forEach((prod)=>
// {
//     console.log(prod);
//     const h1=document.createElement("h1");
//     h1.innerText=prod.name;
//     productContainer.appendChild(h1);
// });



// ----------------->>>>>>>>>>>>>>>>>>>------------------------

// API- Application Programming Interface

// fetch("https://fakestoreapi.com/products/1")
//  .then(res=>res.json())
//  .then((data) =>
//  {
//     console.log(data);
//  })

// syncronus and asyncronus behaviour

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// nm(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);

// function nm(x)
// {
//     setTimeout(() => console.log(x));
// }


// promise and async await

const getData = new Promise(function(resolve, reject)
{
    return resolve(20);
});

// console.log(getData);
getData.then((data) =>console.log(data));




