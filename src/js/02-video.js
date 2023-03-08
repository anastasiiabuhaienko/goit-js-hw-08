
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (timeupdate) {  
  localStorage.setItem("videoplayer-current-time", timeupdate.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const savedCurrentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedCurrentTime).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});



