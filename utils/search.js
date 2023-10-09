function actualCount(cards){
  let nombre = 0
  for(let i = 0; i< cards.length;i++){
    if(cards[i].state===true){
      nombre+=1
    }
  }
 
 
  document.querySelector('.information-nombre').innerHTML= nombre+" recettes"
}

export function search(cards) {
  for(let i = 0; i< cards.length;i++){
    
  cards[i].filterAll()
 
  }
 actualCount(cards)
}


function searchOption(cards, option) {
  cards.forEach((element) => {
    if (element.state) {
        console.log("un debut");
      if( verifierIngr(element,option) || verifierUstensil(element,option) || verifierappareil(element,option)){
        console.log("dans le vrai");
        element.toggleState(true)
      }
      else{
        element.toggleState(false)
      }
      
    }
  })
}
//
//verifier ingr et verifier ustensil n'utilise pas la bonne methode 
//
//
export function verifierIngr(element,value){
    let test =element.map(e=>e.ingredient.toLowerCase())
    let bl = test.includes(value.toLowerCase())
    
    return bl
    
}
export function verifierUstensil(element,value){
  let test =element.map(e=>e.toLowerCase())
  let bl = test.includes(value.toLowerCase())
  
  return bl
      
    
}
export function verifierappareil(element,value){
    
        if(element.toLowerCase()===value.toLowerCase()){
            return true
        }
        else{
            return false
        }
    }

export function createArrayFromTags(cards) {
  let tmp = document.querySelectorAll(".tag");
  let tags = Array.from(tmp).map((e) => e.textContent);
  return tags;
}

export function resetCards(cards) {
  cards.forEach((e) => {
    e.toggleState(true);
  });
}
