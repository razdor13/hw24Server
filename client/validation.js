import { letRenderListOfUniq,letRenderQuntityUniq,userInputConteiner } from './render.js';


const button = document.querySelector('button')
const input = document.querySelector('input');
const haveChild = userInputConteiner.children.length > 0


async function validation(input) {
    
    const something = await fetch('http://localhost:5500/gg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(input.value),
    })
    
    const data = await something.json()
    const map = new Map(Object.entries(data))
    
    if(!haveChild){
        userInputConteiner.innerHTML = ''
    }
    if(!map.size){
        letRenderQuntityUniq(map)
        return
    }
    letRenderQuntityUniq(map)
    letRenderListOfUniq(map)
    
}


button.addEventListener('click',()=>{
    validation(input)
})