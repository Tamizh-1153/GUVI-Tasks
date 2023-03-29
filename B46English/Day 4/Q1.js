let obj1={
    name:'person',
    age:27
}
let obj2={
    age:29,
    name:'person',
    height:184
}
let obj1keys=Object.keys(obj1)
let obj2keys=Object.keys(obj2)
if(obj1keys.length==obj2keys.length){
    if (obj1keys.every(i=>obj1[i]==obj2[i])){
        console.log('Two json are same')
    }
    else {
        console.log("Two json are different")
    }
    
    }else {
        console.log("Two json are different")
    }
