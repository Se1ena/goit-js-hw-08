import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new player(iframe);

//player.on('play', function () {
  //console.log('played the video!');
//});

//const onPlay = function(data) {
// data is an object containing properties specific to that event
//};
//player.on('timeupdate', onPlay);

onPlay();
player.on('timeupdate', throttle(playedTime, 1000));
function playedTime(data) {
  localStorage.setItem('videoplayer-current-time', `${data.seconds}`)
}

function onPlay() {
    if (localStorage.getItem('videoplayer-current-time')) {
        player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
    }
};
