document.getElementById("drawBtn").addEventListener("click", () => {
  const numbers = Array.from({ length: 25 }, (_, i) => i + 1);
  const selected = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    selected.push(numbers.splice(randomIndex, 1)[0]);
  }

  selected.sort((a, b) => a - b);

  const resultText = document.getElementById("resultText");
  resultText.innerHTML = `<strong>${selected.join(', ')}번</strong>이 청소당번입니다!`;

  // Bootstrap Modal Show
  const modal = new bootstrap.Modal(document.getElementById('resultModal'));
  modal.show();
});
