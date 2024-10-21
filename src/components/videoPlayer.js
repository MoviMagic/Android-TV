// Componente para reproducir videos
function initializeVideoPlayer(videoUrl) {
    const videoContainer = document.createElement('div');
    videoContainer.classList.add('video-container');

    const video = document.createElement('video');
    video.src = videoUrl;
    video.controls = true;
    video.autoplay = true;

    videoContainer.appendChild(video);
    document.getElementById('video-player').appendChild(videoContainer);
}
