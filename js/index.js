function carregar () {

    var video = window.document.getElementById('bck-video')

    var data = new Date()
    var hora = data.getHours()

    if (hora >= 6 && hora <18) {
        video.src = 'other_assets/sky-clouds.mp4'
    } else {
        video.src = 'other_assets/nighttime.mp4'
    }


}

