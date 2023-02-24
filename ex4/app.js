const imgArray = ["a","b","c","d",]
const slider = document.querySelector('#slider')
const buttons = document.querySelectorAll('button')
let counter = 0
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('prev')){
        counter--
        if(counter < 0){
          counter = imgArray.length -1
        }
        slider.style.backgroundImage = `url('./img/${imgArray[counter]}.jpg')`
      }
      if (button.classList.contains('next')){
        counter++
        if(counter > imgArray.length -1){
          counter = 0
        }
        slider.style.backgroundImage = `url('./img/${imgArray[counter]}.jpg')`
      }
    })
  })