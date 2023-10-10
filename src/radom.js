
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}

function updateRandomNumbers() {
    document.getElementById('random1').textContent = generateRandomNumber();
    document.getElementById('random2').textContent = generateRandomNumber();
}

function calculateSum() {
    const random1 = parseInt(document.getElementById('random1').textContent);
    const random2 = parseInt(document.getElementById('random2').textContent);
    const sum = random1 + random2 ;
    document.getElementById('sum').textContent = sum;
}

window.addEventListener('load', function() {
    updateRandomNumbers();
    calculateSum();
});

window.addEventListener('beforeunload', function() {
    updateRandomNumbers();
    calculateSum();
});