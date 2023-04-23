const display=document.querySelector('.countdown')
let displayTimer=10
display.textContent=displayTimer
setTimeout(function(){
    display.textContent=9
    setTimeout(function(){
        display.textContent=8
        setTimeout(function(){
            display.textContent=7
            setTimeout(function(){
                display.textContent=6
                setTimeout(function(){
                    display.textContent=5
                    setTimeout(function(){
                        display.textContent=4
                        setTimeout(function(){
                            display.textContent=3
                            setTimeout(function(){
                                display.textContent=2
                                setTimeout(function(){
                                    display.textContent=1
                                    setTimeout(function(){
                                        display.textContent="Happy Independence Day"
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)




