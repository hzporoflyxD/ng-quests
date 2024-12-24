const questions = [
    {
        question: "- Вам подарили довольно неплохие подарки. Особенно первый!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "Вы: - Да, пожалуй, первый подарок мне тоже очень понравился!",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- Я очень рад, что вам понравились все подарки",
        options: ["Далее"],
        answer: "Далее"
    },
    {
        question: "- Может быть уже запустим фейерверки?",
        options: ["Да, конечно!", "Попозже"],
        answer: "Да, конечно!"
    },
    {
        question: "Сейчас будет просто черный фон. Вы кликаете по нему куда угодно и фейерверк запускается. На этом все, сапсибо за прохождение!",
        options: ["Далее"],
        answer: "Далее"
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
                window.location.href = "fw.html"; // Замените на нужный URL
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
