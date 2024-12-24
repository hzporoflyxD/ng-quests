const questions = [
    {
        question: "- Здравствуйте, добро пожаловать на новогоднюю игру!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Что ответите?",
        options: ["Здравствуйте!", "Проигнорировать"],
        answer: "Здравствуйте!"
    },
    {
        question: "- Ой! А что это у Вас на носу?)",
        options: ["Крот", "Сопля", "Сессия", "Новый год!", "Ничего"],
        answer: "Ничего"
    },
    {
        question: "- Что ж, ладно. Разгадайте пожалуйста: Каждый новый год происходит...",
        options: ["Радость, надежда и новые начинания", "Смена цифры года", "Табуретка..."],
        answer: "Смена цифры года"
    },
    {
        question: "- Хорошо, еще вопросик: Существует ли дед мороз?",
        options: ["Да", "Не знаю", "Нет", "Все варианты верны"],
        answer: "Нет"
    },
    {
        question: "Дед мороз: - ХоХоХо! А вот я!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Вы: - Йомайо! Чезабретто? ",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Дед мороз: - Можешь пожалуйста помочь отнести подарки детишкам? А то я очень устал относить их самостоятельно.",
        options: ["С чем помочь?", "Да, мне несложно!", "Помочь", "Нет, давай сам!", "За мандарины да"],
        answer: "За мандарины да"
    },
    {
        question: "Дед мороз: -Хорошо, договорились.",
        options: ["Ну тогда погнали!"],
        answer: "Ну тогда погнали!"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("result").textContent = "";
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    const resultDiv = document.getElementById("result");
    const buttons = document.querySelectorAll("#options button");

    // Disable all buttons
    buttons.forEach(button => button.disabled = true);

    if (selectedAnswer === currentQuestion.answer) {
        resultDiv.textContent = "Да не может быть такого, как вы ответили правильно?!";
        buttons.forEach(button => {
            if (button.textContent === selectedAnswer) {
                button.classList.add("correct");
            }
        });
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            setTimeout(loadQuestion, 600);
        } else {
            // Переход на другую страницу при правильном ответе на последний вопрос
            setTimeout(() => {
                window.location.href = "dedmoroz.html"; // Замените на нужный URL
            }, 1000);
        }
    } else {
        resultDiv.textContent = "Ахахахахах, нет))";
        buttons.forEach(button => {
            if (button.textContent === selectedAnswer) {
                button.classList.add("wrong");
            }
        });

        // Re-enable buttons after 1 second
        setTimeout(() => {
            buttons.forEach(button => {
                button.disabled = false;
                button.classList.remove("wrong");
            });
        }, 1000);
    }
}

loadQuestion();
