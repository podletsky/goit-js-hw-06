
const buttonChangeColor = document.querySelector('.change-color')
buttonChangeColor.addEventListener('click',getRandomHexColor)
const bodyHtml=document.querySelector('body')
console.log(bodyHtml)

function getRandomHexColor() {
  return bodyHtml.style.backgroundColor=`#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
