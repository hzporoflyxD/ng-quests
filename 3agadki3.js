const questions = [
    {
        question: "Зелёная Деревянная Змея: - Класс! Я так наелась. А вы?",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Вы: - Да!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Зелёная Деревянная Змея: - Тебе понравилась совместная наша работа?",
        options: ["Да", "Нет"],
        answer: "Да"
    },
    {
        question: "Зелёная Деревянная Змея: - Ладно, мне пора. С наступающим!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Вы: - С наступающим!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- Мандарины были вкусными?",
        options: ["Да", "Нет"],
        answer: "Да"
    },
    {
        question: "- Мандарины были с косточками?😡",
        options: ["Да", "Нет"],
        answer: "Нет"
    },
    {
        question: "- Это очень хорошо. Хотите подарок?",
        options: ["Да", "Не помню", "Нет"],
        answer: "Да"
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
                window.location.href = "podarok.html"; // Замените на нужный URL
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
