// script.js
document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { name: '躲球球', url: 'games/game1.html', source: 'games/game1.html' },
        { name: '游戏2', url: 'games/game2.html', source: 'games/game1.html' },
        // 添加更多游戏
    ];

    const gameContainer = document.querySelector('.game-container');
    const searchInput = document.getElementById('search');

    function renderGames(gameList) {
        gameContainer.innerHTML = '';
        gameList.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.className = 'game-card';
            gameCard.innerHTML = `
                <h2><a href="${game.url}" target="_blank">${game.name}</a></h2>
                <iframe src="${game.url}" title="${game.name}"></iframe>
                <button class="download-btn" data-source="${game.source}">下载源码</button>
            `;
            gameContainer.appendChild(gameCard);
        });

        // 添加下载按钮点击事件
        const downloadButtons = document.querySelectorAll('.download-btn');
        downloadButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const sourceUrl = event.target.getAttribute('data-source');
                const link = document.createElement('a');
                link.href = sourceUrl;
                link.download = sourceUrl.split('/').pop();
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
        });
    }

    renderGames(games);

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));
        renderGames(filteredGames);
    });
});
