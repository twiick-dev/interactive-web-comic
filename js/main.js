//containers
let wellcomeContainer=document.querySelector('.wellcome');
let comicContainer=document.querySelector('.comic-container');
//buttons
let comicButton=document.querySelector('.comic-button');
//comic images
let comicImages=document.querySelectorAll('.box');
//audios
let audio1=document.querySelector('#audio-1');
let audio2=document.querySelector('#audio-2');
let audio3=document.querySelector('#audio-3');
let audio4=document.querySelector('#audio-4');
let audio5=document.querySelector('#audio-5');
let audio6=document.querySelector('#audio-6');
let audio7=document.querySelector('#audio-7');
let audio8=document.querySelector('#audio-8');
let audio9=document.querySelector('#audio-9');
let audio10=document.querySelector('#audio-10');
let audio11=document.querySelector('#audio-11');
let audio12=document.querySelector('#audio-12');
let audio13=document.querySelector('#audio-13');
let audio14=document.querySelector('#audio-14');
let audio15=document.querySelector('#audio-15');
let audio16=document.querySelector('#audio-16');
let audioPlaying=
//swow comic whe tap comic button
comicButton.addEventListener('click', function() {
    comicContainer.style.display='flex'
    wellcomeContainer.style.display='none'
    setTimeout(()=>{
        comicContainer.classList.add('reading')
    }, 100)
});
comicImages.forEach( (comicImage) => {
    comicImage.addEventListener('mouseenter', function() {
        switch (comicImage.id){
            case 'box-1': audioPlaying=audio1; break;
            case 'box-2': audioPlaying=audio2; break;
            case 'box-3': audioPlaying=audio3; break;
            case 'box-4': audioPlaying=audio4; break;
            case 'box-5': audioPlaying=audio5; break;
            case 'box-6': audioPlaying=audio6; break;
            case 'box-7': audioPlaying=audio7; break;
            case 'box-8': audioPlaying=audio8; break;
            case 'box-9': audioPlaying=audio9; break;
            case 'box-10': audioPlaying=audio10; break;
            case 'box-11': audioPlaying=audio11; break;
            case 'box-12': audioPlaying=audio12; break;
            case 'box-13': audioPlaying=audio13; break;
            case 'box-14': audioPlaying=audio14; break;
            case 'box-15': audioPlaying=audio15; break;
            case 'box-16': audioPlaying=audio16; break;
        }
        intervalId = setInterval((time=0) => {
            time++;
            if (time >= 1) {
                audioPlaying.currentTime = 0;
                audioPlaying.play()
                clearInterval(intervalId);
            }
          }, 500);
    });
    comicImage.addEventListener('mouseleave', function() {
        audioPlaying.pause()
        clearInterval(intervalId);
    });
});