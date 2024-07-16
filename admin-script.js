function addMedal() {
    const team = document.getElementById('team').value;
    const gold = parseInt(document.getElementById('gold').value) || 0;
    const silver = parseInt(document.getElementById('silver').value) || 0;
    const bronze = parseInt(document.getElementById('bronze').value) || 0;

    if (team && gold >= 0 && silver >= 0 && bronze >= 0) {
        const medals = {
            team,
            gold,
            silver,
            bronze
        };

        let medalData = JSON.parse(localStorage.getItem('medalData')) || [];
        const existingIndex = medalData.findIndex(item => item.team === team);

        if (existingIndex > -1) {
            medalData[existingIndex].gold += gold;
            medalData[existingIndex].silver += silver;
            medalData[existingIndex].bronze += bronze;
        } else {
            medalData.push(medals);
        }

        localStorage.setItem('medalData', JSON.stringify(medalData));
        alert('Medalhas adicionadas com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}
