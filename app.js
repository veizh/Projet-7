import card from "./components/card.js";
import dropdown from "./components/dropdown.js";
import { recipes } from "./media/recipes.js"
import { search,resetCards } from "./utils/search.js";
export let AllIngredients=[]
export let AllAppliances=[]
export let AllUstensils=[]
export let AllCards=[]
export let AllTags=[]
 export   let dropdowns =[]
function initCardAndList(){
    let nombre = 0

    recipes.forEach(element => {
        nombre+=1
    element.ingredients.forEach(i=>{
            if(!AllIngredients.includes(i.ingredient.toLowerCase())){
                AllIngredients.push(i.ingredient.toLowerCase())
            }
        })
        element.ustensils.forEach(y=>{
            if(!AllUstensils.includes(y.toLowerCase())){
                AllUstensils.push(y.toLowerCase())
        }})
              
        if(!AllAppliances.includes(element.appliance.toLowerCase())){
            AllAppliances.push(element.appliance.toLowerCase())
        }
    
  
    const tmp = new card(element.name,element.image,element.description,element.time,element.ingredients,element.ustensils,element.appliance)
    tmp.init()
    AllCards.push(tmp)
})
document.querySelector('.information-nombre').innerHTML=nombre+" recettes"

}

function inputController(){
    let input = document.querySelector('.search')
    input.addEventListener('keyup',(e)=>{
        if(input.value.length>=3){
            // add searching function
            search(AllCards)
        }
        else{
            search(AllCards)

        }
    })
}
function initDropdown(){
    let ingredientsDropdown = new dropdown("Ingrédients")
    ingredientsDropdown.init()
    dropdowns.push(ingredientsDropdown)
    
    let applianceDropdown = new dropdown("Appareils")
    applianceDropdown.init()
    dropdowns.push(applianceDropdown)
    
    let ustensilsDropdown = new dropdown("Ustensiles")
    ustensilsDropdown.init()
    dropdowns.push(ustensilsDropdown)
    console.log(dropdowns);
}
initCardAndList()
initDropdown()
inputController()