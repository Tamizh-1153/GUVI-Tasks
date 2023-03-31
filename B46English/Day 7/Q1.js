// a.Get all the countries from the Asia continent /region using the Filter function
import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
    let asiaFilter=data.filter(item=>{
        if(item['region']=='Asia' ){
            console.log(item)
        }}
         )
})

// b.Get all the countries with a population of less than 2 lakhs using Filter function
import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
      let popFilter=data.filter(item=>{
        if(item['population']<200000){
           console.log(item)
        }
    })
})

// c.Print the following details name, capital, flag using forEach function
import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
     let details=data.forEach(element => {
        console.log('Name:',element['name']['common'])
        console.log('Capital:',element['capital'])
        console.log('Flag:',element['flag'])
        console.log()
     });
})

// d.Print the total population of countries using reduce function
import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
    let totalPopulation=data.reduce((a,b)=>{
        return a+(b['population'])
    },0)
    console.log(totalPopulation)
})

// e.Print the country which uses US Dollars as currency.
import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
    data.forEach(element => {
        Object.keys(element).forEach(i=>{
            if(i=='currencies'){
                for(let j=0;j<Object.keys(element['currencies']).length;j++){
               if((Object.keys(element['currencies']))[j]=='USD'){
                console.log(element['name']['common'])
               }}
            }
        }
        )        
    }); 
})
