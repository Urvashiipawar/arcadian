const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.main-video');

const movieList =['videos/mainvideo.mp4', 'videos/mainvideo1.mp4', 'videos/mainvideo2.mp4', 'videos/mainvideo3.mp4',];

let index = 0;
nextButton.addEventListener('click', function(){

    index+= 1
    video.src = movieList[index];

    if(index === 3){
        index= -1;
    }
});

const moreGamesButton = document.getElementById('more-games-btn');
if (moreGamesButton) {
    moreGamesButton.addEventListener('click', () => {
        window.location.href = 'games.html'; // Navigate to games.html
    });

    
}

