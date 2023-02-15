import Player from '@vimeo/player'
var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


function pushTimeInLocalStorage() {
    player.getCurrentTime().then(function(seconds){
        localStorage.setItem('videoplayer-current-time', seconds);
    })
}

let timeout = throttle(pushTimeInLocalStorage, 1000,{trailing:true})

player.on('timeupdate', timeout)

player.on('playing', function(){
    const localTime = localStorage.getItem('videoplayer-current-time')
    if(localTime != undefined){
        player.setCurrentTime(localTime)
    }
})