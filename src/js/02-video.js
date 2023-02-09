import Player from '@vimeo/player'
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});


function pushTimeInLocalStorage() {
    console.log('seconds');
    player.getCurrentTime().then(function(seconds){
        localStorage.setItem('videoplayer-current-time', seconds);
    })
}

let timeout = throttle(pushTimeInLocalStorage, 1000,{trailing:true})

player.on('timeupdate', timeout)

player.on('playing', function(){
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
})