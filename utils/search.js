function actualCount(cards){
  let nombre = 0
  for(let i = 0; i< cards.length;i++){
    if(cards[i].state===true){
      nombre+=1
    }
  }
 
 
  document.querySelector('.information-nombre').innerHTML= `${nombre} recette${
    nombre < 2 ? "" : "s"}`
    if(nombre===0){
      document.querySelector(".noResult").style.display="block"
    }
    else{
        document.querySelector(".noResult").style.display="none"
      
    }
}

export function search(cards) {
  let start =+ new Date()
  for(let i = 0; i< cards.length;i++){
    
  cards[i].filterAll()
 
  }
 actualCount(cards)
 setTimeout(()=>{
  let end =+ new Date()
  let tmp = document.querySelector(".search");
  console.log(tmp.value,"prends",end - start -2000+ " ms à etre trié");
 },2000)
 
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
