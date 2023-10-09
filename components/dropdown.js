import { AllCards } from "../app.js";
import tag from "./tag.js";
const arrowSvg = ``;
class dropdown {
  constructor(name) {
    this.name = name;
    this.sublist = this.createSublist();
    this.input= null
  }
  toggle(x) {
      this.options = this.getCurrentOption();
    x.classList.toggle("active");
    this.createOptions(this.sublist,this.input)

  }
  getCurrentOption(e) {
    let tmp = [];
    switch (e) {
      case "Ingrédients":
        AllCards.forEach((element) => {
          if (element.state) {
            element.ingredients.forEach((i) => {
              if (!tmp.includes(i.ingredient.toLowerCase())) {
                tmp.push(i.ingredient.toLowerCase());
              }
            });
          }
        });
        break
      case "Ustensiles":
        AllCards.forEach((element) => {
          if (element.state) {
            element.ustensils.forEach((y) => {
              if (!tmp.includes(y.toLowerCase())) {
                tmp.push(y.toLowerCase());
              }
            });
          }
        });
        break

      case "Appareils":
        AllCards.forEach((element) => {
          if (element.state) {
            if (!tmp.includes(element.appliances.toLowerCase())) {
              tmp.push(element.appliances.toLowerCase());
            }
          }
        });
        break

    }
  
    return tmp;
  }
  createSublist(parent) {
    let sublist = document.createElement("div");
    sublist.classList.add("sublist");
    let research = document.createElement("div");
    research.classList.add("search-option");
    let button = document.createElement("button");
    button.innerHTML =
      '<svg width="35" height="35" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="9.5" stroke="#7A7A7A"></circle><line x1="30.3536" y1="30.6464" x2="39.3536" y2="39.6464" stroke="#7A7A7A"></line></svg>';
  
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "....");
    
    input.addEventListener("keyup",  (e)=> {
      if(input.value.length!==0){
        button.innerHTML='<svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/></svg>'
      
      }
      else{
        button.innerHTML =
      '<svg width="35" height="35" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="9.5" stroke="#7A7A7A"></circle><line x1="30.3536" y1="30.6464" x2="39.3536" y2="39.6464" stroke="#7A7A7A"></line></svg>';
       
      }
      let arrayMatch = document.querySelectorAll(`.${this.name}`);

      let count = 0;
      arrayMatch.forEach((x) => {
        if (
          x.textContent
            .toLocaleLowerCase()
            .includes(input.value.toLocaleLowerCase())
        ) {
          x.classList.remove("invisible");
          count++;
        } else {
          x.classList.add("invisible");
        }
      });
      if (count === 0) {
        document
          .querySelector(`.missing.${this.name}`)
          .classList.remove("invisible");
      } else {
        document
          .querySelector(`.missing.${this.name}`)
          .classList.add("invisible");
      }
    });
    this.input=input
      research.appendChild(input);
    research.appendChild(button);
    sublist.appendChild(research);
    


    return sublist;
  }

  createOptions(parent, input) {
    document.querySelectorAll("."+this.name).forEach(e=>e.remove())
    let options = this.getCurrentOption(this.name)
    options.forEach((e) => {
      let tmp = document.createElement("div");
      tmp.classList.add(this.name);
      tmp.classList.add("option");
      tmp.innerHTML = `${e}`;

      tmp.addEventListener("click", () => {
        //add a tag =>
        //add a tag =>
        //add a tag =>
        //add a tag =>
        //add a tag =>
        //add a tag =>
        let element = new tag(tmp.textContent);
        element.init();
        input.value = "";
        this.toggle(parent);
      });
      parent.appendChild(tmp);
    });
    let missing = document.createElement("div");
    missing.classList.add("missing");
    missing.classList.add(this.name);
    missing.classList.add("invisible");
    missing.innerHTML = `Pas d'${this.name} correspondant! `;
    parent.appendChild(missing)
  }
  createElement() {
    let dropdown = document.createElement("div");
    dropdown.classList.add("list");

    let button = document.createElement("div");
    button.classList.add("dropdown-button");
    button.innerHTML = `${this.name} <img src="./media/images/Vector1.png" />`;
    dropdown.appendChild(button);
    let sublist = this.createSublist();
    button.addEventListener("click", (x) => {
      this.toggle(this.sublist);
    });
    dropdown.appendChild(this.sublist);
    document.querySelector(".container-dropdown").appendChild(dropdown);
  }
  init() {
    this.createElement();
  }
}
export default dropdown;
