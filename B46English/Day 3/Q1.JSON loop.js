let resume={
    fullName:{
        fname:"Tamil",
        lname:"Arasan",
    },
    education:{
        sslc:94,
        hsc:96,
        college:70

    },
    skills:{
        skill1:'C++',
        skill2:'Javascript',
        skill3:'HTML',
        skill4:'CSS'
    }       
}

// for loop
for(i=0;i<Object.keys(resume).length;i++){
    let d=Object.keys(resume)[i]
    console.log(d)
    for(j=0;j<Object.values(resume[d]).length;j++){
        let e=Object.values(resume[d])
        let f=Object.keys(resume[d])
        console.log(f[j],":",e[j])
    }
}

//forEach
let arr1=Object.entries(resume)
arr1.forEach(element => {
    console.log(element[0])
    let arr2=Object.entries(element[1])
    arr2.forEach(i=>console.log(i[0],":",i[1]))
 })

//for...in loop
for(let key in resume){
    console.log(key)
    for(let key1 in resume[key]){
        console.log(key1,":",resume[key][key1])
    }
}

//for...of loop
let arr=Object.keys(resume)
for(let value of arr){
    console.log(value)
    let result=Object.entries(resume[value])
    //console.log(result)
     for( let value1 of result)
     console.log(value1[0],":",value1[1])
}