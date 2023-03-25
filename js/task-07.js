const controlRanger = document.querySelector("#font-size-control")
controlRanger.addEventListener('input', ranger);
const textEl=document.querySelector('#text')
const span = document.querySelector('#text')


function ranger(event) {
    const value=(`${event.currentTarget.valueAsNumber}px`)
 
    textEl.style.fontSize=value
  
}


