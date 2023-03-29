import fetch from "node-fetch"
let fetchRes=fetch("https://restcountries.com/v3.1/all");
fetchRes
.then((res)=>res.json())
.then((data) => {
    let i
    for(i=0;i<Object.keys(data).length;i++){
        let countryName=data[i]['name']['official']
        let region=data[i]['region']
        let subregion=data[i]['subregion']
        let population=data[i]['population']
        console.log("Country:",countryName)
        console.log("Region:",region)
        console.log("Subregion:",subregion)
        console.log("Population",population)
        console.log(" ")
    }
})
