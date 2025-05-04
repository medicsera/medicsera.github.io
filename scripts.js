document.addEventListener('DOMContentLoaded', function() {
    // Обработка теста
    const quizForm = document.getElementById('quiz-form');
    const submitBtn = document.getElementById('submit-btn');
    const resultsDiv = document.getElementById('results');
    const scorePara = document.getElementById('score');
    const feedbackPara = document.getElementById('feedback');

    // Правильные ответы
    const correctAnswers = {
        q1: 'b',
        q2: 'b',
        q3: 'c',
        q4: 'c',
        q5: 'b'
    };

    // Обработка отправки теста
    submitBtn.addEventListener('click', function() {
        let score = 0;
        const userAnswers = {};

        // Собираем ответы пользователя
        for (let i = 1; i <= 5; i++) {
            const questionName = 'q' + i;
            const selectedOption = quizForm.elements[questionName].value;
            userAnswers[questionName] = selectedOption;

            // Проверяем ответ
            if (selectedOption === correctAnswers[questionName]) {
                score++;
            }
        }

        // Показываем результаты
        resultsDiv.classList.remove('hidden');
        scorePara.textContent = `Вы ответили правильно на ${score} из 5 вопросов.`;

        // Генерируем обратную связь
        let feedback = '';
        if (score === 5) {
            feedback = "Супер! Ты показал отличные знания о государстве и его задачах. Продолжай в том же духе, будущий президент!";
        } else if (score >= 3) {
            feedback = "Хорошая работа! Ты уже понимаешь, как устроено государство. Пройди тест еще раз или повтори материал, чтобы стать настоящим профи!";
        } else {
            feedback = "Ты сделал первый шаг к пониманию государства! Посмотри видео или теорию еще раз, и у тебя точно получится. Мы в тебя верим!";
        }

        feedbackPara.textContent = feedback;
    });

    // Обработка формы обратной связи
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const feedbackText = document.getElementById('feedback').value;

        // Здесь можно добавить код для отправки отзыва на сервер
        alert('Спасибо за ваш отзыв! Он поможет улучшить урок.');
        feedbackForm.reset();
    });

    // Плавная прокрутка к разделам
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
});