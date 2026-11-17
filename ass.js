const games = [
    { title: "Каркассон", players: 4, borrower: null },
    { title: "Доббль", players: 6, borrower: 'Аня' },
    { title: "Шахматы", players: 2, borrower: null }
]
const borrowButton = document.getElementById(`borrowButton`);
const returnButton = document.getElementById(`returnButton`);
const gameSelect = document.getElementById(`gameSelect`);
const gameList = document.getElementById(`gameList`);
const message = document.getElementById(`message`);
const errorName = document.getElementById(`errorName`);
borrowButton.addEventListener('click', () => {
    const game = games[Number(gameSelect.value)];
    const name = borrowerName.value.trim();
    if (name === '') {
        message.textContent = 'Введите имя'
        return
    }
    if (game.borrower !== null) {
        message.textContent = 'Игра уже выдана'
        return
    }
    game.borrower = name
    message.textContent = 'Игра выдана'
    renderGames()
})
returnButton.addEventListener('click', () => {
    const game = games[Number(gameSelect.value)];
    if (game.borrower === null) {
        message.textContent = 'Игра уже свободна';
        return;
    }
    game.borrower = null;
    message.textContent = 'Игра возвращена';
    renderGames();
});
function renderGames() {
    gameList.innerHTML = '';
    games.forEach(game => {
        const li = document.createElement('li');
        let check = ""
        if (game.borrower === null) {
            check = "Свободна"
        }
        else {
            check = `Взял(а) ${game.borrower}`;
        };
        li.textContent = `${game.title} · ${game.players} игрока · ${check}`;
        gameList.append(li);
    });
}
renderGames();