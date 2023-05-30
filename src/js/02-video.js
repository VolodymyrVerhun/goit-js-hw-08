import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
    localStorage.setItem(LOCAL_STORAGE_KEY, seconds);
};

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY) || 0);