const title=document.createElement('h1')
title.setAttribute('id','title')
title.classList='text-center my-5'
title.textContent='Calculator'
document.body.appendChild(title)

const paragraph=document.createElement('p')
paragraph.setAttribute('id','description')
paragraph.classList='text-center fs-4'
paragraph.textContent='Calculator using keyboard as input'
document.body.appendChild(paragraph)

const container=document.createElement('div')
container.classList='container vh-100 d-flex align-items-center justify-content-center'
document.body.append(container)

const calculator=document.createElement('div')
calculator.classList='calculator row border border-black border-opacity-25 bg-dark bg-gradient text-white'
container.appendChild(calculator)

const calculatorDisplay=document.createElement('input')
calculatorDisplay.setAttribute('id','result')
calculatorDisplay.classList='calculator-display row mx-0 px-0  '
calculatorDisplay.value='0'
calculator.appendChild(calculatorDisplay)

const calculatorKeys=document.createElement('div')
calculatorKeys.classList='calculator-keys row mx-0 px-0'
calculator.appendChild(calculatorKeys)

const row1=document.createElement('div')
row1.classList='row px-0 '
calculatorKeys.appendChild(row1)

const buttonPlus=document.createElement('button')
buttonPlus.classList='plus col-3 btn +'
buttonPlus.setAttribute('data-type','operator')
buttonPlus.setAttribute('id','add')
buttonPlus.textContent='+'
row1.appendChild(buttonPlus)

const buttonMinus=document.createElement('button')
buttonMinus.classList='minus col-3 btn -'
buttonMinus.setAttribute('data-type','operator')
buttonMinus.setAttribute('id','subtract')
buttonMinus.textContent='-'
row1.appendChild(buttonMinus)

const buttonMultiply=document.createElement('button')
buttonMultiply.classList='multiply  col-3 btn *'
buttonMultiply.setAttribute('data-type','operator')
buttonMultiply.setAttribute('id','multiply')
buttonMultiply.textContent='*'
row1.appendChild(buttonMultiply)

const buttonDivide=document.createElement('button')
buttonDivide.classList='divide col-3 btn /'
buttonDivide.setAttribute('data-type','operator')
buttonDivide.setAttribute('id','divide')
buttonDivide.textContent='/'
row1.appendChild(buttonDivide)

const row2=document.createElement('div')
row2.classList='row px-0'
calculatorKeys.appendChild(row2)

const colOne=document.createElement('div')
colOne.classList='col-9'
row2.appendChild(colOne)

const colRow1=document.createElement('div')
colRow1.classList='row'
colOne.appendChild(colRow1)
const colRow2=document.createElement('div')
colRow2.classList='row'
colOne.appendChild(colRow2)
const colRow3=document.createElement('div')
colRow3.classList='row'
colOne.appendChild(colRow3)
const colRow4=document.createElement('div')
colRow4.classList='row'
colOne.appendChild(colRow4)

const colTwo=document.createElement('div')
colTwo.classList='col-3 px-0'
row2.appendChild(colTwo)


const buttonOne=document.createElement('button')
buttonOne.classList='one col-4 btn 1'
buttonOne.setAttribute('data-type','number')
buttonOne.setAttribute('id','1')
buttonOne.textContent='1'
colRow1.appendChild(buttonOne)

const buttonTwo=document.createElement('button')
buttonTwo.classList='two col-4 btn 2'
buttonTwo.setAttribute('data-type','number')
buttonTwo.setAttribute('id','2')
buttonTwo.textContent='2'
colRow1.appendChild(buttonTwo)

const buttonThree=document.createElement('button')
buttonThree.classList='three col-4 btn 3'
buttonThree.setAttribute('data-type','number')
buttonThree.setAttribute('id','3')
buttonThree.textContent='3'
colRow1.appendChild(buttonThree)

const buttonFour=document.createElement('button')
buttonFour.classList='four col-4 btn 4'
buttonFour.setAttribute('data-type','number')
buttonFour.setAttribute('id','4')
buttonFour.textContent='4'
colRow2.appendChild(buttonFour)

const buttonFive=document.createElement('button')
buttonFive.classList='five col-4 btn 5'
buttonFive.setAttribute('data-type','number')
buttonFive.setAttribute('id','5')
buttonFive.textContent='5'
colRow2.appendChild(buttonFive)

const buttonSix=document.createElement('button')
buttonSix.classList='six col-4 btn 6'
buttonSix.setAttribute('data-type','number')
buttonSix.setAttribute('id','6')
buttonSix.textContent='6'
colRow2.appendChild(buttonSix)

const buttonSeven=document.createElement('button')
buttonSeven.classList='seven col-4 btn 7'
buttonSeven.setAttribute('data-type','number')
buttonSeven.setAttribute('id','7')
buttonSeven.textContent='7'
colRow3.appendChild(buttonSeven)

const buttonEight=document.createElement('button')
buttonEight.classList='eight col-4 btn 8'
buttonEight.setAttribute('data-type','number')
buttonEight.setAttribute('id','8')
buttonEight.textContent='8'
colRow3.appendChild(buttonEight)

const buttonNine=document.createElement('button')
buttonNine.classList='nine col-4 btn 9'
buttonNine.setAttribute('data-type','number')
buttonNine.setAttribute('id','9')
buttonNine.textContent='9'
colRow3.appendChild(buttonNine)

const buttonZero=document.createElement('button')
buttonZero.classList='zero col-4 btn 0'
buttonZero.setAttribute('data-type','number')
buttonZero.setAttribute('id','0')
buttonZero.textContent='0'
colRow4.appendChild(buttonZero)

const buttonDecimal=document.createElement('button')
buttonDecimal.classList='decimal col-4 btn .'
buttonDecimal.setAttribute('data-type','number')
buttonDecimal.setAttribute('id','.')
buttonDecimal.textContent='.'
colRow4.appendChild(buttonDecimal)

const buttonClear=document.createElement('button')
buttonClear.classList='clear col-4 btn c C'
buttonClear.setAttribute('id','clear')
buttonClear.textContent='C'
colRow4.appendChild(buttonClear)

const buttonEqual=document.createElement('button')
buttonEqual.classList='equal col-12 h-100  btn Enter'
buttonEqual.textContent='='
buttonEqual.setAttribute('data-type','equal')
buttonEqual.setAttribute('id','equal')
colTwo.appendChild(buttonEqual)

// --------------Eventlistener------------------------

const calculatorEl=document.querySelector('.calculator')
const keys=document.querySelector('.calculator-keys')
const display=document.querySelector('.calculator-display')
keys.addEventListener('click',e=>{
    if(e.target===container);
    const key=e.target
    const keyValue=key.textContent
    const displayvalue=display.value
    const type=key.dataset.type
    const previousKeyType=calculatorEl.dataset.previousKeyType

    if(type==='number' ){
        if(displayvalue==='0'){
            display.value=keyValue
        }else if(previousKeyType=='operator'){
            display.value=keyValue
        }
        else{
            display.value=displayvalue+keyValue
        }
        
    }
    if(type==='operator'){
        const operatorKeys=keys.querySelectorAll('[data-type="operator"]')
        operatorKeys.forEach(i=>{
            i.dataset.state=''
        })

        key.dataset.state='selected'
        calculatorEl.dataset.firstNum=displayvalue
        calculatorEl.dataset.operator=key.textContent
    }

    if(type==='equal'){
        const firstNum=calculatorEl.dataset.firstNum
        const operator=calculatorEl.dataset.operator
        const secondNum=displayvalue
        //console.log(firstNum,operator,secondNum);
        let result=''

        if(operator=='+'){
            result=parseFloat(firstNum)+parseFloat(secondNum)
        }
        if(operator=='-'){
            result=parseFloat(firstNum)-parseFloat(secondNum)
        }
        if(operator=='*'){
            result=parseFloat(firstNum)*parseFloat(secondNum)
        }
        if(operator=='/'){
            result=parseFloat(firstNum)/parseFloat(secondNum)
        }
        display.value=result
    }
    if(key.classList.contains('clear')){
        display.value='0'
    }
    calculatorEl.dataset.previousKeyType=type
})

document.addEventListener('keypress',e=>{
    let target=e.key
    //console.log(target) 
    let cBtn=document.getElementsByClassName(target)[0]  
    //console.log(cBtn);
    if(cBtn==undefined){
        alert('Only numbers are allowed')
    }else
    cBtn.click()
}
)

