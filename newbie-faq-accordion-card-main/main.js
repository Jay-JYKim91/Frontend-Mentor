const questions = document.querySelectorAll('.question');

for (i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function () {
    const panel = this.nextElementSibling;
    if (!this.classList.contains('active')) {
      for (j = 0; j < questions.length; j++) {
        questions[j].classList.remove('active');
        questions[j].nextElementSibling.style.display = 'none';
      }
    }

    this.classList.toggle('active');

    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
