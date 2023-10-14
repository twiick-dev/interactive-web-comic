//containers
let wellcomeContainer=document.querySelector('.wellcome');
let comicContainer=document.querySelector('.comic-container');
//buttons
let comicButton=document.querySelector('.comic-button');
let creditosButton=document.querySelector('.creditos-button');
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
let audioPlaying;
let popup=document.querySelector('#popup');
let popupImage=document.querySelector('#popup-image');
let popupButton=document.querySelector('#popup-button');

let intervalId;
//swow comic whe tap comic button
comicButton.addEventListener('click', function() {
    comicContainer.style.display='flex'
    wellcomeContainer.style.display='none'
    messageAudio.pause()
    setTimeout(()=>{
        comicContainer.classList.add('reading')
    }, 100)
});
creditosButton.addEventListener('click', function() {
    alert('Este sitio ha diso creado por Brahyam Luna, como reto creativo para generation')
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
          if(window.innerWidth >= 1281){
            intervalId = setInterval((time=0) => {
                time++;
                if (time >= 1) {
                    audioPlaying.currentTime = 0;
                audioPlaying.play()
                    clearInterval(intervalId);
                }
            }, 500);
        }
    });
    comicImage.addEventListener('mouseleave', function() {
        audioPlaying.pause()
        clearInterval(intervalId);
    });
});
comicImages.forEach( (comicImage) => {
    comicImage.addEventListener('click', function() {
        switch (comicImage.id){
            case 'box-1':activePopup('box-1.png', audio1); break;
            case 'box-2':activePopup('box-2.png', audio2); break;
            case 'box-3':activePopup('box-3.png', audio3); break;
            case 'box-4':activePopup('box-4.png', audio4); break;
            case 'box-5':activePopup('box-5.png', audio5); break;
            case 'box-6':activePopup('box-6.png', audio6); break;
            case 'box-7':activePopup('box-7.png', audio7); break;
            case 'box-8':activePopup('box-8.png', audio8); break;
            case 'box-9':activePopup('box-9.png', audio9); break;
            case 'box-10':activePopup('box-10.png', audio10); break;
            case 'box-11':activePopup('box-11.png', audio11); break;
            case 'box-12':activePopup('box-12.png', audio12); break;
            case 'box-13':activePopup('box-13.png', audio13); break;
            case 'box-14':activePopup('box-14.png', audio14); break;
            case 'box-15':activePopup('box-15.png', audio15); break;
            case 'box-16':activePopup('box-16.png', audio16); break;
        }
    });
});
popupButton.addEventListener('click',()=>{
    popup.style.display='none'
    audioPlaying.pause()
})
function activePopup(image, audio){
    audioPlaying=audio
    popup.style.display='flex'
    popupImage.src = "../assets/images/"+image;
    setTimeout(() => {
        audioPlaying.currentTime=0
        audioPlaying.play()
    }, 100);
}

let messageButtom=document.querySelector('#message-player')
let messageAudio=document.querySelector('#message-audio')
let messagePlayerText=document.querySelector('#message-player-text')
let play=0
messageButtom.addEventListener('click',()=>{
    console.log('click'+play);
    if(play==0){
        play=1
        messageAudio.play()
        messagePlayerText.innerHTML='❙❙'
    }
    else{
        play=0
        messageAudio.pause()
        messagePlayerText.innerHTML='▶'
    }
})