import player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

//player.on('play', function () {
//console.log('played the video!');
//});

//const onPlay = function(data) {
// data is an object containing properties specific to that event
//};
//player.on('timeupdate', onPlay);

const onPlay = function (data) {};

localStorage.setItem(STORAGE_KEY, data.seconds);
onPlay = throttle(data => {
  localStorage.setItem(STORAGE_KEY, data.seconds);
}, 1000);

player.on('timeupdate', onPlay);
player
  .getCurrentTime(STORAGE_KEY)
  .then(function (seconds) {
    //seconds = the current playback position
  })
  .catch(function (error) {});

player.on('loaded', function () {
  if (localStorage.getItem(STORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
  }
});
