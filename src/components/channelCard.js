// Componente de tarjeta de canal
function createChannelCard(channel) {
    const card = document.createElement('div');
    card.classList.add('channel-card');

    const logo = document.createElement('img');
    logo.src = channel.logoUrl;
    logo.alt = channel.name;

    const title = document.createElement('h3');
    title.textContent = channel.name;

    card.appendChild(logo);
    card.appendChild(title);

    card.addEventListener('click', () => {
        window.location.href = `../pages/channelPlayer.html?streamUrl=${channel.streamUrl}`;
    });

    return card;
}
