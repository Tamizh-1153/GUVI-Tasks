class uberDetails{
    constructor(km,baseCost,after3km){
        this.km=km
        this.baseCost=baseCost
        this.after3km=after3km
        this.uberPrice
    }
    uberPriceEst(){
        if(this.km<=3){
           this.uberPrice=this.km * this.baseCost
           return this.uberPrice
        }
        else{
            this.uberPrice=(3*this.baseCost)+((this.km-3)*this.after3km)
            return this.uberPrice
        }
    }
}
let uberDetails1=new uberDetails(5,60,100)
console.log(uberDetails1.uberPriceEst())