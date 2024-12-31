let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;
let usedQuestions = []; // To track already used questions

const questionElement = document.getElementById("question");
const optionsElement = document.querySelector(".options");
const nextButton = document.getElementById("next-btn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const exitButton = document.getElementById("exit-btn");

const questions = [
  { country: "Afghanistan", capital: "Kabul" },
  { country: "Albania", capital: "Tirana" },
  { country: "Algeria", capital: "Algiers" },
  { country: "Andorra", capital: "Andorra la Vella" },
  { country: "Angola", capital: "Luanda" },
  { country: "Antigua and Barbuda", capital: "Saint John's" },
  { country: "Argentina", capital: "Buenos Aires" },
  { country: "Armenia", capital: "Yerevan" },
  { country: "Australia", capital: "Canberra" },
  { country: "Austria", capital: "Vienna" },
  { country: "Azerbaijan", capital: "Baku" },
  { country: "Bahamas", capital: "Nassau" },
  { country: "Bahrain", capital: "Manama" },
  { country: "Bangladesh", capital: "Dhaka" },
  { country: "Barbados", capital: "Bridgetown" },
  { country: "Belarus", capital: "Minsk" },
  { country: "Belgium", capital: "Brussels" },
  { country: "Belize", capital: "Belmopan" },
  { country: "Benin", capital: "Porto-Novo" },
  { country: "Bhutan", capital: "Thimphu" },
  { country: "Bolivia", capital: "Sucre" },
  { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
  { country: "Botswana", capital: "Gaborone" },
  { country: "Brazil", capital: "Brasília" },
  { country: "Brunei", capital: "Bandar Seri Begawan" },
  { country: "Bulgaria", capital: "Sofia" },
  { country: "Burkina Faso", capital: "Ouagadougou" },
  { country: "Burundi", capital: "Gitega" },
  { country: "Cabo Verde", capital: "Praia" },
  { country: "Cambodia", capital: "Phnom Penh" },
  { country: "Cameroon", capital: "Yaoundé" },
  { country: "Canada", capital: "Ottawa" },
  { country: "Central African Republic", capital: "Bangui" },
  { country: "Chad", capital: "N'Djamena" },
  { country: "Chile", capital: "Santiago" },
  { country: "China", capital: "Beijing" },
  { country: "Colombia", capital: "Bogotá" },
  { country: "Comoros", capital: "Moroni" },
  { country: "Congo (Congo-Brazzaville)", capital: "Brazzaville" },
  { country: "Costa Rica", capital: "San José" },
  { country: "Croatia", capital: "Zagreb" },
  { country: "Cuba", capital: "Havana" },
  { country: "Cyprus", capital: "Nicosia" },
  { country: "Czechia (Czech Republic)", capital: "Prague" },
  { country: "Democratic Republic of the Congo", capital: "Kinshasa" },
  { country: "Denmark", capital: "Copenhagen" },
  { country: "Djibouti", capital: "Djibouti" },
  { country: "Dominica", capital: "Roseau" },
  { country: "Dominican Republic", capital: "Santo Domingo" },
  { country: "Ecuador", capital: "Quito" },
  { country: "Egypt", capital: "Cairo" },
  { country: "El Salvador", capital: "San Salvador" },
  { country: "Equatorial Guinea", capital: "Malabo" },
  { country: "Eritrea", capital: "Asmara" },
  { country: "Estonia", capital: "Tallinn" },
  { country: "Eswatini (fmr. Swaziland)", capital: "Mbabane" },
  { country: "Ethiopia", capital: "Addis Ababa" },
  { country: "Fiji", capital: "Suva" },
  { country: "Finland", capital: "Helsinki" },
  { country: "France", capital: "Paris" },
  { country: "Gabon", capital: "Libreville" },
  { country: "Gambia", capital: "Banjul" },
  { country: "Georgia", capital: "Tbilisi" },
  { country: "Germany", capital: "Berlin" },
  { country: "Ghana", capital: "Accra" },
  { country: "Greece", capital: "Athens" },
  { country: "Grenada", capital: "Saint George's" },
  { country: "Guatemala", capital: "Guatemala City" },
  { country: "Guinea", capital: "Conakry" },
  { country: "Guinea-Bissau", capital: "Bissau" },
  { country: "Guyana", capital: "Georgetown" },
  { country: "Haiti", capital: "Port-au-Prince" },
  { country: "Honduras", capital: "Tegucigalpa" },
  { country: "Hungary", capital: "Budapest" },
  { country: "Iceland", capital: "Reykjavik" },
  { country: "India", capital: "New Delhi" },
  { country: "Indonesia", capital: "Jakarta" },
  { country: "Iran", capital: "Tehran" },
  { country: "Iraq", capital: "Baghdad" },
  { country: "Ireland", capital: "Dublin" },
  { country: "Israel", capital: "Jerusalem" },
  { country: "Italy", capital: "Rome" },
  { country: "Jamaica", capital: "Kingston" },
  { country: "Japan", capital: "Tokyo" },
  { country: "Jordan", capital: "Amman" },
  { country: "Kazakhstan", capital: "Nur-Sultan" },
  { country: "Kenya", capital: "Nairobi" },
  { country: "Kiribati", capital: "Tarawa" },
  { country: "Kuwait", capital: "Kuwait City" },
  { country: "Kyrgyzstan", capital: "Bishkek" },
  { country: "Laos", capital: "Vientiane" },
  { country: "Latvia", capital: "Riga" },
  { country: "Lebanon", capital: "Beirut" },
  { country: "Lesotho", capital: "Maseru" },
  { country: "Liberia", capital: "Monrovia" },
  { country: "Libya", capital: "Tripoli" },
  { country: "Liechtenstein", capital: "Vaduz" },
  { country: "Lithuania", capital: "Vilnius" },
  { country: "Luxembourg", capital: "Luxembourg" },
  { country: "Madagascar", capital: "Antananarivo" },
  { country: "Malawi", capital: "Lilongwe" },
  { country: "Malaysia", capital: "Kuala Lumpur" },
  { country: "Maldives", capital: "Malé" },
  { country: "Mali", capital: "Bamako" },
  { country: "Malta", capital: "Valletta" },
  { country: "Marshall Islands", capital: "Majuro" },
  { country: "Mauritania", capital: "Nouakchott" },
  { country: "Mauritius", capital: "Port Louis" },
  { country: "Mexico", capital: "Mexico City" },
  { country: "Micronesia", capital: "Palikir" },
  { country: "Moldova", capital: "Chișinău" },
  { country: "Monaco", capital: "Monaco" },
  { country: "Mongolia", capital: "Ulaanbaatar" },
  { country: "Montenegro", capital: "Podgorica" },
  { country: "Morocco", capital: "Rabat" },
  { country: "Mozambique", capital: "Maputo" },
  { country: "Myanmar (formerly Burma)", capital: "Naypyidaw" },
  { country: "Namibia", capital: "Windhoek" },
  { country: "Nauru", capital: "Yaren District (de facto)" },
  { country: "Nepal", capital: "Kathmandu" },
  { country: "Netherlands", capital: "Amsterdam" },
  { country: "New Zealand", capital: "Wellington" },
  { country: "Nicaragua", capital: "Managua" },
  { country: "Niger", capital: "Niamey" },
  { country: "Nigeria", capital: "Abuja" },
  { country: "North Korea", capital: "Pyongyang" },
  { country: "North Macedonia (formerly Macedonia)", capital: "Skopje" },
  { country: "Norway", capital: "Oslo" },
  { country: "Oman", capital: "Muscat" },
  { country: "Pakistan", capital: "Islamabad" },
  { country: "Palau", capital: "Ngerulmud" },
  { country: "Palestine State", capital: "Ramallah" },
  { country: "Panama", capital: "Panama City" },
  { country: "Papua New Guinea", capital: "Port Moresby" },
  { country: "Paraguay", capital: "Asunción" },
  { country: "Peru", capital: "Lima" },
  { country: "Philippines", capital: "Manila" },
  { country: "Poland", capital: "Warsaw" },
  { country: "Portugal", capital: "Lisbon" },
  { country: "Qatar", capital: "Doha" },
  { country: "Romania", capital: "Bucharest" },
  { country: "Russia", capital: "Moscow" },
  { country: "Rwanda", capital: "Kigali" },
  { country: "Saint Kitts and Nevis", capital: "Basseterre" },
  { country: "Saint Lucia", capital: "Castries" },
  { country: "Saint Vincent and the Grenadines", capital: "Kingstown" },
  { country: "Samoa", capital: "Apia" },
  { country: "San Marino", capital: "San Marino" },
  { country: "Sao Tome and Principe", capital: "São Tomé" },
  { country: "Saudi Arabia", capital: "Riyadh" },
  { country: "Senegal", capital: "Dakar" },
  { country: "Serbia", capital: "Belgrade" },
  { country: "Seychelles", capital: "Victoria" },
  { country: "Sierra Leone", capital: "Freetown" },
  { country: "Singapore", capital: "Singapore" },
  { country: "Slovakia", capital: "Bratislava" },
  { country: "Slovenia", capital: "Ljubljana" },
  { country: "Solomon Islands", capital: "Honiara" },
  { country: "Somalia", capital: "Mogadishu" },
  { country: "South Africa", capital: "Pretoria (administrative), Cape Town (legislative), Bloemfontein (judicial)" },
  { country: "South Korea", capital: "Seoul" },
  { country: "South Sudan", capital: "Juba" },
  { country: "Spain", capital: "Madrid" },
  { country: "Sri Lanka", capital: "Sri Jayawardenepura Kotte" },
  { country: "Sudan", capital: "Khartoum" },
  { country: "Suriname", capital: "Paramaribo" },
  { country: "Sweden", capital: "Stockholm" },
  { country: "Switzerland", capital: "Bern" },
  { country: "Syria", capital: "Damascus" },
  { country: "Tajikistan", capital: "Dushanbe" },
  { country: "Tanzania", capital: "Dodoma" },
  { country: "Thailand", capital: "Bangkok" },
  { country: "Timor-Leste", capital: "Dili" },
  { country: "Togo", capital: "Lomé" },
  { country: "Tonga", capital: "Nukuʻalofa" },
  { country: "Trinidad and Tobago", capital: "Port of Spain" },
  { country: "Tunisia", capital: "Tunis" },
  { country: "Turkey", capital: "Ankara" },
  { country: "Turkmenistan", capital: "Ashgabat" },
  { country: "Tuvalu", capital: "Funafuti" },
  { country: "Uganda", capital: "Kampala" },
  { country: "Ukraine", capital: "Kyiv" },
  { country: "United Arab Emirates", capital: "Abu Dhabi" },
  { country: "United Kingdom", capital: "London" },
  { country: "United States of America", capital: "Washington, D.C." },
  { country: "Uruguay", capital: "Montevideo" },
  { country: "Uzbekistan", capital: "Tashkent" },
  { country: "Vanuatu", capital: "Port Vila" },
  { country: "Vatican City (Holy See)", capital: "Vatican City" },
  { country: "Venezuela", capital: "Caracas" },
  { country: "Vietnam", capital: "Hanoi" },
  { country: "Yemen", capital: "Sana'a" },
  { country: "Zambia", capital: "Lusaka" },
  { country: "Zimbabwe", capital: "Harare" }
  // Add the full list of countries and capitals here
];
function getRandomQuestion() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (usedQuestions.includes(randomIndex)); // Ensure no repeats
  usedQuestions.push(randomIndex);
  return questions[randomIndex];
}

function generateOptions(correctAnswer) {
  const allCapitals = questions.map((q) => q.capital);
  const options = [correctAnswer, ...getRandomElements(allCapitals, 3)].sort(() => Math.random() - 0.5);
  return options;
}

function getRandomElements(arr, count) {
  const shuffled = arr.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function showQuestion() {
  if (usedQuestions.length === questions.length) {
    showResult();
    return;
  }

  const question = getRandomQuestion();
  const questionNumber = currentQuestionIndex + 1;

  questionElement.innerHTML = `
    <span style="font-size: 20px; font-weight: bold;">Question ${questionNumber}: </span>
    <b>What is the capital of ${question.country}?</b>
  `;

  const options = generateOptions(question.capital);
  optionsElement.innerHTML = "";
  options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", (event) => selectAnswer(event, question.capital));
    optionsElement.appendChild(button);
  });
}

function selectAnswer(event, correctAnswer) {
  const selectedOption = event.target.textContent;

  if (selectedOption === correctAnswer) {
    score++;
    correctAnswers++;
    event.target.textContent += " ✅";
  } else {
    wrongAnswers++;
    highlightAnswer(selectedOption, correctAnswer);
  }
  nextButton.style.display = "block";
}

function highlightAnswer(selectedOption, correctAnswer) {
  const options = optionsElement.querySelectorAll(".option");
  options.forEach((button) => {
    if (button.textContent === selectedOption) {
      button.style.backgroundColor = "red";
    }
    if (button.textContent === correctAnswer) {
      button.style.backgroundColor = "green";
      button.textContent += " ✅";
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  showQuestion();
  nextButton.style.display = "none";
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultElement.classList.remove("hidden");
  scoreElement.textContent = `${score} / ${questions.length}`;
  document.getElementById("correct-answers").textContent = `Correct Answers: ${correctAnswers}`;
  document.getElementById("wrong-answers").textContent = `Wrong Answers: ${wrongAnswers}`;
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  correctAnswers = 0;
  wrongAnswers = 0;
  usedQuestions = []; // Reset used questions
  document.getElementById("quiz").classList.remove("hidden");
  resultElement.classList.add("hidden");
  nextButton.style.display = "none";
  showQuestion();
}

function exitQuiz() {
  document.getElementById("quiz").classList.add("hidden");
  resultElement.classList.remove("hidden");
  scoreElement.textContent = `${score} / ${questions.length}`;
  document.getElementById("correct-answers").textContent = `Correct Answers: ${correctAnswers}`;
  document.getElementById("wrong-answers").textContent = `Wrong Answers: ${wrongAnswers}`;
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
exitButton.addEventListener("click", exitQuiz);

showQuestion();
nextButton.style.display = "none";
