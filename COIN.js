document.getElementById('flip-button').addEventListener('click', function() {
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');

    // Simulate a coin flip
    const isHeads = Math.random() < 0.5;

    // Apply the results
    if (isHeads) {
        coin.className = 'coin heads';
        result.textContent = 'Heads!';
    } else {
        coin.className = 'coin tails';
        result.textContent = 'Tails!';
    }

    // Animate coin flip
    coin.style.transform = 'rotateY(360deg)';
    setTimeout(() => {
        coin.style.transform = '';
    }, 600);
});
