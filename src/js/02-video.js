import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const frame = document.querySelector('iframe');
const player = new Player(frame);
const LOCALE_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(timeListener, 1000));

function timeListener(data) {
  localStorage.setItem(LOCALE_KEY, JSON.stringify(data.seconds));
}
player.setCurrentTime(localStorage.getItem(LOCALE_KEY));
