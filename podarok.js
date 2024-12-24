const click=document.querySelector('.click');
const giftBox=document.querySelector('.gift-box');
const text=document.querySelector('.text')






click.addEventListener('click', ()=> {
    if(click.className==='click'){
        click.classList.add('active')
        giftBox.classList.add('active')
        text.classList.add('active')

    }
    else{
        click.classList.remove('active')
        giftBox.classList.remove('active')
        text.classList.remove('active')
        
    }
})



setTimeout(() => {
    document.getElementById("btn").style.display = "block";
  }, 3000); 