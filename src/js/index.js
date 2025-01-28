
const getInputValue = document.querySelector('.displayInput');
const getBtns = document.querySelectorAll('.btn')


function calculator (){
    return{
         inicia(){
            this.cliqueBtn();
         },

         cliqueBtn(){
            document.addEventListener('click',(event)=>{
              const el = event.target
              
              if(el.classList.contains('numberBtn') ||  el.classList.contains('operationBtn')){
                console.log(el)
                 getInputValue.value += el.innerText
              }
              else if(el.classList.contains("clearBtn")){
                 this.clearBtn()
              }
              else if(el.classList.contains('equalBtn')){
                 this.equalBtn()
              }

            })
         },

         clearBtn(){
            return getInputValue.value = ''
         },
         equalBtn(){
            return getInputValue.value = eval(getInputValue.value)
         }

    }

}
//segundo esboço utilizando factory funcition

const newCalculator = calculator();

newCalculator.inicia();



/* const btnsArrays = Array.from(getBtns).map((text)=>{
    return text.innerHTML
})

const listForEvaluete = [];

console.log(btnsArrays)
const buttons = document.getElementsByTagName('button');

window.addEventListener("click",(e)=>{
     console.log(getInputValue)
    switch (e.target.innerText){
        case '0': 
           getInputValue.value += 0
            break
        case '1':
            getInputValue.value += 1
            break
        case '2': 
             getInputValue.value += 2
            break
        case '3': 
            getInputValue.value += 3
             break
        case '4':
             getInputValue.value += 4
             break
        case '5': 
              getInputValue.value += 5
             break
        case '6': 
             getInputValue.value += 6
              break
        case '7':
              getInputValue.value += 7
              break
        case '8': 
               getInputValue.value += 8
              break
          
        case '9': 
              getInputValue.value += 9
               break
        case '*':
               getInputValue.value += '*'
               break
        case '+': 
                getInputValue.value += '+'
               break
        case '=':
            getInputValue.value = eval(getInputValue.value)
    }
    
})
 */

//primeiro esboço de codigo do desafio