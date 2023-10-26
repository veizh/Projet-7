import {
  verifierIngr,
  verifierUstensil,
  verifierappareil,
} from "../utils/search.js";

class card {
  constructor(
    name,
    source,
    description,
    duration,
    ingredients,
    ustensils,
    appliances
  ) {
    this.name = name;
    this.description = description;
    this.source = source;
    this.duration = duration;
    this.ingredients = ingredients;
    this.ustensils = ustensils;
    this.appliances = appliances;
    this.element = this.createElement();
    this.state = true;
  }
  toggleState(state) {
    this.state = state;
    this.reveal();
  }

  filterAll() {
    if (this.filterBySearch() && this.filterByTag()) {
      this.toggleState(true);
    } else {
      this.toggleState(false);
    }
  }
  filterBySearch() {
    let tmp = document.querySelector(".search");
    if (tmp.value.length < 3) {
      return true;
    }
    let test = false;
    if (this.description.toLowerCase().search(tmp.value.toLowerCase()) !== -1) {
      test = true;
    }
    if (this.appliances.toLowerCase().search(tmp.value.toLowerCase()) !== -1) {
      test = true;
    }
    if (this.name.toLowerCase().search(tmp.value.toLowerCase()) !== -1) {
      test = true;
    }
    this.ingredients.forEach((e) => {
      if (e.ingredient.toLowerCase().search(tmp.value.toLowerCase()) !== -1) {
        test = true;
      }
    });
    this.ustensils.forEach((e) => {
      if (e.toLowerCase().search(tmp.value.toLowerCase()) !== -1) {
        test = true;
      }
    });

    if (test) {
      return true;
    }
  }
  filterByTag() {
    this.state = true;
    if (this.state) {
      let verif = [];
      let tmp = document.querySelectorAll(".tag");
      if (tmp.length === 0) {
        this.toggleState(true);
        return true;
      }
      tmp.forEach((e) => {
        if (
          verifierIngr(this.ingredients, e.textContent.toLowerCase()) ||
          verifierUstensil(this.ustensils, e.textContent.toLowerCase()) ||
          verifierappareil(this.appliances, e.textContent.toLowerCase())
        ) {
          verif.push(true);
        } else {
          verif.push(false);
        }
      });
      if (verif.includes(false)) {
        return false;
      } else {
        return true;
      }
    }
  }
  createElement() {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="photo-container">
        <img src=${"./media/images/recettes/" + this.source} />
        <div class="time">${this.duration + " min"}</div>
        </div>
         `;
    let article = document.createElement("article");
    article.innerHTML = `
        <h1>${this.name}</h1>
        <h2>RECETTE</h2>
        <p class="description">${this.description}</p>
        <h2>ingrédients</h2>

        `;
    let ingrs = document.createElement("div");
    ingrs.classList.add("container-ingredient");
    this.ingredients.forEach((e) => {
      let tmp = document.createElement("div");
      tmp.classList.add("component-ingredient");
      tmp.innerHTML = `
        <p>${e.ingredient}</p>
        <p class="quantite">${e.quantity ? e.quantity + " " : ""}${
        e.unit ? e.unit : ""
      }</p>
        `;
      ingrs.appendChild(tmp);
    });
    article.appendChild(ingrs);

    card.appendChild(article);
    return card;
  }
  reveal() {
    if (this.state) {
      this.element.classList.remove("hide");
    } else {
      this.element.classList.add("hide");
    }
  }
  init() {
    document.querySelector(".container-cards").appendChild(this.element);
  }
}
export default card;
