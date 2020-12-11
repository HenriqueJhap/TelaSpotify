var musica = new Audio('./audios/musica.m4a');
var video = document.getElementById('video');
var divPropaganda = document.getElementById('propaganda');

setTimeout(playVideo(), 1000 * 5)


function playMusica(){
    if (musica.paused) 
        musica.play();
    else{
        musica.pause();
        musica.currentTime = 0
    }
}

function playVideo(){
    video.currentTime = 0;
    video.play();
    
    divPropaganda.style.display = "flex";
}

const tempoVideo = setInterval(playVideo, 1000 * 60 * 10);

function FecharVideo(){
    video.pause();

    divPropaganda.style.display = "none";
}


