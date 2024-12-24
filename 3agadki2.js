const questions = [
    {
        question: "Дед мороз: - Спасибо! С наступающим! *пошел домой*",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Вы: - Да пожалуйста!) И вас с наступающим!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- В каком городе вы дарили подарки, играя за деда мороза?",
        options: ["Я не играл за деда мороза!", "Москва", "Казахстан", "Киев", "Свой вариант ответа"],
        answer: "Свой вариант ответа"
    },
    {
        question: "- Хорошо. А что подарил дед мороз детям?",
        options: ["Игрушки", "Мандарины", "Конфетки", "Dyson Supersonic Hair Dryer"],
        answer: "Конфетки"
    },
    {
        question: "- Вау, это так классно! А что подарил дед мороз студентам?",
        options: ["Зачет по философии", "Методологию БЭМ", "Степендию х2", "Ничего😰", "Каникулы!🤩", "Свой вариант ответа(теперь сработает)"],
        answer: "Ничего😰"
    },
    {
        question: "- Это было очевидно",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: " - Я тут кое-что вспомнил... А заплатил ли вам дед мороз за помощь? Он обещал.",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Вы: - точно! Нет, не заплатил, я совсем забыл про это...(",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- И что вы будете делать в такой ситуации?",
        options: ["Потребую с него мандарины", "Закрою эту игру", "Забью просто"],
        answer: "Потребую с него мандарины"
    },
    {
        question: "Вы: *догоняете деда мороза и требуете с него мандарины*",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Дед мороз: - Тебе чего надо? Не дам я тебе никаких мандаринов и вообще я не знаю кто ты!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- Что вы сделаете?",
        options: ["Позвоню в полицию", "Стерплю", "Поздравлю с новым годом"],
        answer: "Поздравлю с новым годом"
    },
    {
        question: "Вы: - Извините, обознался... С наступающим!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Дед мороз: - И тебя с наступающим!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Дед мороз: - Постой! Хочешь темку дам для заработка легких мандаринов?",
        options: ["Взять темку", "Мандарин", "Нет"],
        answer: "Взять темку"
    },
    {
        question: "Дед мороз: - Хорошо, тогда ответь мне на один вопрос: в честь кого будет 2025 год?",
        options: ["Зелёной Деревянной Змеи", "Иглобрюха", "Змеи",  "Кролика"],
        answer: "Зелёной Деревянной Змеи"
    },
    {
        question: "Дед мороз: - Ого, молодец!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Дед мороз: - Тогда тебе предется поиграть за зеленую деревянную змею!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- Готовы ли вы играть за зеленую деревянную змею?",
        options: ["Да", "Нет"],
        answer: "Да"
    },
    {
        question: "Зелёная Деревянная Змея: - Сейчас хороший улов будет!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Зелёная Деревянная Змея: - Мандарины делим пополам!",
        options: ["Далее", "Нет"],
        answer: "Нет"
    },
    {
        question: "Зелёная Деревянная Змея: - Ну, нет так нет...",
        options: ["Погнали за мандаринами!"],
        answer: "Погнали за мандаринами!"
    },
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
                window.location.href = "snakeGame.html"; // Замените на нужный URL
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
