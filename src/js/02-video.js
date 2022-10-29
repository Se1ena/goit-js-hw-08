import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

//player.on('play', function () {
//console.log('played the video!');
//});

//const onPlay = function(data) {
// data is an object containing properties specific to that event
//};
//player.on('timeupdate', onPlay);

player.setCurrentTime(localStorage.getItem(STORAGE_KEY) ?? 0);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data){
  localStorage.setItem(STORAGE_KEY, data.seconds);
}

