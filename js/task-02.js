const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



 
  const elements=ingredients.map((ingredient)=>{
    const li = document.createElement('li')
   li.classList.add(".item")
   li.textContent = ingredient
return li
   
  })

const listIngridiends = document.querySelector("#ingredients")
listIngridiends.append(...elements)
 console.log(listIngridiends)

