function actualCount(cards){
  let nombre = 0
  cards.forEach(card=>{
     if(card.state===true){
    nombre+=1
  }
  })
 
  document.querySelector('.information-nombre').innerHTML= nombre+" recettes"
}

export function search(cards) {
 // let currentArray = filterByTags(cards);
 // currentArray.forEach((element) => {
 //   if (
 //     element.name.toLowerCase().includes(value.toLowerCase().trim()) ||
 //     element.description.toLowerCase().includes(value.toLowerCase().trim())
 //   ) {
 //     element.toggleState(true);
 //   } else {
 //     element.toggleState(false);
 //   }
 // });
 // document.querySelector(".information-nombre").innerHTML = " recettes";
 cards.forEach(e=>{
  e.filterAll()
 
 })
 actualCount(cards)
}
//export function filterByTags(cards) {
//  // me permet de filtrer
//  let tags = createArrayFromTags(cards);
//  let newArray = [];
//  if (tags.length === 0) {
//    newArray = cards;
//    return newArray;
//  }
//  tags.forEach((e) => {
//    searchOption(cards, e);
//  })
//  cards.forEach(e=>{
//    if(cards.state){
//        newArray.push(e)
//    }
//  })
//  return newArray;
//}

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
