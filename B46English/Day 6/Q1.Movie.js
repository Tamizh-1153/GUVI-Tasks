//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
class movie{
    constructor(title,studio,rating){
           this.title=title;
           this.studio=studio;
           this.rating=rating;
    }
}
let movie1=new movie('Ironman','Marvel','PG13')
console.log(movie1)

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
class MOvie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating||'PG'
    }
}
let MOvie1=new MOvie('Ironman','Marvel')
console.log(MOvie1)

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.
class Movie{
    constructor(title,studio,rating){
           this.title=title;
           this.studio=studio;
           this.rating=rating||'PG';
           this.Array=[]
           this.PGArray=[]
          
    }
    getPG(){
        for(let i=0;i<this.Array.length;i++){
            if(this.Array[i][2]=='PG'){
                this.PGArray.push(this.Array[i])
            }      
        }return this.PGArray
        }
    setPG(movieDetails){
        this.Array.push(movieDetails)
       
    }  
}
let movie2=new Movie('Ironman','Marvel')
movie2.setPG(['Captain America','Marvel','PG'])
movie2.setPG(['Black Panther','Marvel','PG13'])
movie2.setPG(['Spiderman','Marvel','PG'])
console.log(movie2.getPG())

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
class MOVie{
        constructor(title,studio,rating){
            this.title=title;
            this.studio=studio;
            this.rating=rating
        }
    }
    let MOVie1=new MOVie('Casino Royale','Eon Productions','PG13')
    console.log(MOVie1)

