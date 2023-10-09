import { AllCards } from "../app.js"
import { search } from "../utils/search.js"

class tag{
    constructor(value,type){
        this.value= value
        this.type=type
    }
    createTag(){
        let container = document.querySelector('.container-tags')
        let element = document.createElement('div')
        element.classList.add('tag')
        element.innerHTML=this.value
        element.addEventListener('click',(e)=>{
            element.remove()
            search(AllCards)
        })
        container.appendChild(element)
        return container
    }
    
    init(){
        this.createTag()
        search(AllCards)
    }
}
export default tag