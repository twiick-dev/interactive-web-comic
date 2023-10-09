let wellcomeContainer=document.querySelector('.wellcome');
let comicContainer=document.querySelector('.comic-container');
let comicButton=document.querySelector('.comic-button');
let image1=document.querySelector('#box-1');
let audio1=document.querySelector('#audio-2');


comicButton.addEventListener('click', function() {
    comicContainer.style.display='flex'
    wellcomeContainer.style.display='none'
});

image1.addEventListener('mouseenter', function() {
    //play sound
    audio1.currentTime = 0;
    audio1.play();
    console.log('Toca')
});

image1.addEventListener('mouseleave', function() {
    //stop sound
    audio1.pause()
});
