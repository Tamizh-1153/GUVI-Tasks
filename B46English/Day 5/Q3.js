// a.Odd num from array
(()=>{
    let array1=[0,1,2,3,4,5,6,7,8,9]
    let oddArray=[]
           for( let odd in array1){
            if(array1[odd]%2!=0){
                oddArray.push(array1[odd])
            }
           }console.log(oddArray)
}
)()

// b.string titlecase
(()=>{
    let array2=["how are you"].toString().split(' ')
    let array3=[]
    for(let value of array2){
        let a=value.charAt(0).toUpperCase()+value.substring(1)
        array3.push(a)
    }
    console.log(array3.join(' '))}
)()

//c.sum of all numbers in array
(()=>{
    let array4=[1,2,3,4,5,6,7,8,9]
    let sum=0
    for(let number of array4){
        sum+=number
    }
    console.log(sum)}
    )()
     
// d.To return array of prime numbers
(()=>{
    let Array=[0,1,2,3,4,5,6,7,8,9,517]
    let primeArray=[]
    for (let prime of Array){
    let IsPrime=true
    if(prime==1||prime==0){
        IsPrime=false
    }
    
    for(i1=2;i1<prime;i1++){
        if(prime%i1==0){
           IsPrime=false
        }
    }
    if(IsPrime){
       primeArray.push(prime)  
    }
    }console.log(primeArray)
    }
    )()

// e.To return array of palindromes
(()=>{
    let array5=['apple',"kayak",'bench','deed','bowl','racecar']
    let palindromeArray=[]
    for(let arr of array5){
    let splitarr=arr.split('').reverse().join('')
    if(splitarr==arr){
       palindromeArray.push(arr) 
    }
    }console.log(palindromeArray)
    })()