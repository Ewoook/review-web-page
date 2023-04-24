let result = 0;
function mouseEnterColor(whichButton)
{
  let buttonElement = document.querySelector('.button-' + whichButton);
  if(buttonElement.style.backgroundColor !== 'orange' )
  {
    buttonElement = document.querySelector('.button-' + whichButton);
    buttonElement.style.backgroundColor = 'grey';
  }
  
}
function mouseLeaveColor(whichButton)
{
  let buttonElement = document.querySelector('.button-' + whichButton);
  if(buttonElement.style.backgroundColor !== 'orange' )
  {
    buttonElement = document.querySelector('.button-' + whichButton);
    buttonElement.style.backgroundColor = 'rgb(18, 18, 66)';
  }
}
function mouseClickColor(whichButton)
{
  ifAnyColorOrange();
  buttonElement = document.querySelector('.button-' + whichButton);
  buttonElement.style.backgroundColor = 'orange';
  result = whichButton;
}
function ifAnyColorOrange()
{
  for(let i = 1; i <= 5; i++)
  {
    if(document.querySelector('.button-' + i).style.backgroundColor === 'orange')
    {
      document.querySelector('.button-' + i).style.backgroundColor = 'rgb(18, 18, 66)';
    }
  } 
}
let submitElement = document.querySelector('.submit-button');
function changeColor()
{
   submitElement.classList.add('is-on');
}
function changeColorBack()
{
  submitElement.classList.remove('is-on');
}


let popup = document.getElementById("popup");
function openPopup()
{
    popup.classList.add("open-popup");
    console.log('nigger')
}
function closePopup()
{
  popup.classList.remove("open-popup");
}

let thanks = document.getElementById("thanks");
function openThanks()
{
  thanks.classList.add("open-thanks");
}
function howManyStars()
{
  document.querySelector('.selection').innerHTML = 'You selected ' + result + ' out of 5 stars';
}