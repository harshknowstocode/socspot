const audioplayer = document.getElementById('audioplayer')
const musicitem = document.querySelectorAll('.music')
const playbutton = document.querySelector('.pauseplay')
const seekbar = document.querySelector('.seekbar')
const seekcontainer = document.querySelector('.seek')
const volumebar = document.querySelector('.volumebar')
const songimage = document.getElementById('songimage')




let currentsong = null
let isplaying = false

musicitem.forEach(item =>{
    item.addEventListener('click',()=>{
        const src = item.getAttribute('data-src')
        const imgsrc = item.getAttribute('data-img')
        if(src !== currentsong){
            currentsong = src
            audioplayer.src = src
            songimg.src = imgsrc
        }
        if(isplaying){
            audioplayer.currentTime = 0
        }
        audioplayer.play()
        isplaying = true
        updateplaybutton()
        
    })
})

playbutton.addEventListener('click',()=>{
    if(!audioplayer.src) return
    if(isplaying){
        audioplayer.pause()
    } else {
        audioplayer.play()
    }
    isplaying = !isplaying
    updateplaybutton()
    }
)

function updateplaybutton(){
    if(isplaying){
        playbutton.textContent = '⏸️'
    } else{
        playbutton.textContent = '▶️'
    }
}

audioplayer.addEventListener('timeupdate',()=>{
    const progress = (audioplayer.currentTime/audioplayer.duration)*100
    seekbar.style.width = progress + "%"
})

volumebar.addEventListener('click',(e)=>{
    const rect = volumebar.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const volume = clickX/width
    audioplayer.volume = volume
    volumebar.style.background = `linear-gradient(to right, green ${volume*100}%, black ${volume*100}%)`

})

seekcontainer.addEventListener('click',(e)=>{
    const rect = seekcontainer.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const width = rect.width
    const position = clickX/width
    audioplayer.currentTime = position*audioplayer.duration
    seekbar.style.width = `${position*100}%`
})

document.getElementById('login').addEventListener('click',()=>{
const clientId = 'd1731c875c5f4f45bcc1bf69041097c1'
const redirectUri = 'http://127.0.0.1:5500/8spotify.html'
const scope = 'user-read-private user-read-email';
const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scope)}`;

window.authUrl = authUrl
})


