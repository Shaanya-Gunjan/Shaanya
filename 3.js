let captchaQuestion = document.getElementById('captcha-question');
let resultDiv = document.getElementById('result');

// Function to generate a simple captcha
function generateCaptcha() {
    let num1 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    let num2 = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    captchaQuestion.textContent = `What is ${num1} + ${num2}?`;
    return num1 + num2; // Store the answer
}

let correctAnswer = generateCaptcha(); // Generate the captcha when page loads

function checkCaptcha() {
    let userAnswer = parseInt(document.getElementById('captcha-answer').value);
    if (userAnswer === correctAnswer) {
        resultDiv.textContent = 'My phone number is: +91 7033509424' ; // Replace with your actual phone number
        resultDiv.classList.remove('hidden');
    } else {
        resultDiv.textContent = 'Incorrect answer, please try again.';
        resultDiv.classList.remove('hidden');
        correctAnswer = generateCaptcha(); // Generate a new captcha
    }
}

function toggleDashboard() {
    document.querySelector('.dashboard').classList.toggle('open');
}
