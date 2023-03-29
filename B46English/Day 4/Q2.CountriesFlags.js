import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {

    let i
    for(i=0;i<Object.keys(data).length;i++){
        let countriesFlags=data[i]['flags']
        console.log(countriesFlags)
        console.log(" ") 
    }
})
