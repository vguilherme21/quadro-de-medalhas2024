document.addEventListener('DOMContentLoaded', () => {
    const table = document.getElementById('medalTable').getElementsByTagName('tbody')[0];
    const medalData = JSON.parse(localStorage.getItem('medalData')) || [];

    // Ordena os dados pela quantidade de ouro, prata e bronze
    medalData.sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);

    let previousGold = null;
    let previousSilver = null;
    let previousBronze = null;
    let currentRank = 0;
    let position = 0;

    medalData.forEach((data, index) => {
        if (data.gold !== previousGold || data.silver !== previousSilver || data.bronze !== previousBronze) {
            position = index + 1;
        }
        currentRank = position;

        const newRow = table.insertRow();
        newRow.insertCell().textContent = currentRank + "º"; // Adiciona o símbolo "º" após a posição
        newRow.insertCell().textContent = data.team;
        newRow.insertCell().textContent = data.gold;
        newRow.insertCell().textContent = data.silver;
        newRow.insertCell().textContent = data.bronze;
        newRow.insertCell().textContent = data.gold + data.silver + data.bronze;

        previousGold = data.gold;
        previousSilver = data.silver;
        previousBronze = data.bronze;
    });
});
