
const quizQuestions = [
  {
    question: "What is the primary cause of the Harmattan season in Nigeria?",
    options: ["Ocean currents from the Atlantic", "The Northeast Trade Winds from the Sahara Desert", "Monsoon winds from Asia", "Volcanic activity in Central Africa"],
    correctAnswer: 1
  },
  {
    question: "During which months does the Harmattan season typically occur in Nigeria?",
    options: ["March to June", "July to September", "November to March", "April to August"],
    correctAnswer: 2
  },
{
 question: "What is the Harmattan season in Nigeria?", 
 options: ["A cold, dry, dusty wind from the Sahara", "A period of heavy rainfall", "A tropical storm season", "A humid summer period"],
  correctAnswer: 0 },

{
 question: "Which months does the Harmattan typically occur in Nigeria?", 
options: ["June to August", "March to May", "November to March", "September to November"], 
correctAnswer: 2 },


  { id: 3, question: "Why was the 2025 Harmattan season notably absent or weak in Nigeria?", options: ["Increased ocean temperatures", "Climate change and shifting wind patterns", "Government weather modification", "Volcanic activity"], correctAnswer: 1 },
  { id: 4, question: "What direction does the Harmattan wind blow from?", options: ["South to North", "East to West", "Northeast (from the Sahara)", "West to East"], correctAnswer: 2 },
  { id: 5, question: "Which desert is the source of Harmattan dust?", options: ["Kalahari Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert"], correctAnswer: 1 },
  { id: 6, question: "What is the main characteristic of Harmattan weather?", options: ["High humidity and rain", "Low humidity and dusty haze", "Thunderstorms", "High humidity and heat"], correctAnswer: 1 },
  { id: 7, question: "How many main seasons does Nigeria have?", options: ["Four (like Europe)", "Two (Wet and Dry)", "Three (Hot, Wet, Cold)", "One continuous season"], correctAnswer: 1 },
  { id: 8, question: "When does the rainy season typically begin in Southern Nigeria?", options: ["January", "March/April", "July", "October"], correctAnswer: 1 },
  { id: 9, question: "What is 'August Break' in Nigerian weather?", options: ["A national holiday", "A short dry spell during the rainy season", "The hottest week of the year", "A flood warning period"], correctAnswer: 1 },
  { id: 10, question: "Which Nigerian region experiences the longest dry season?", options: ["South-South", "South-East", "North (Sahel region)", "South-West"], correctAnswer: 2 },
  { id: 11, question: "What health issue is commonly associated with Harmattan?", options: ["Malaria", "Respiratory problems and dry skin", "Cholera", "Heat stroke"], correctAnswer: 1 },
  { id: 12, question: "What phenomenon causes the absence of Harmattan in some years?", options: ["El Niño effects", "Weakening of the Saharan High pressure", "Lunar cycles", "Solar flares"], correctAnswer: 1 },
  { id: 13, question: "Which climate zone covers most of Northern Nigeria?", options: ["Tropical rainforest", "Sahel/Sudan Savanna", "Mediterranean", "Temperate"], correctAnswer: 1 },
  { id: 14, question: "What is the average temperature during Nigerian dry season?", options: ["10-15°C", "20-25°C", "30-40°C", "45-50°C"], correctAnswer: 2 },
  { id: 15, question: "How does climate change affect Harmattan patterns?", options: ["Makes it stronger", "Makes it more unpredictable and weaker", "No effect at all", "Only affects timing"], correctAnswer: 1 },
  { id: 16, question: "What is the Inter-Tropical Convergence Zone (ITCZ)?", options: ["A trade agreement", "Where northeast and southeast trade winds meet", "A desert boundary", "An ocean current"], correctAnswer: 1 },
  { id: 17, question: "How does the ITCZ affect Nigerian weather?", options: ["It has no effect", "Its movement determines rainy and dry seasons", "It only affects coastal areas", "It causes earthquakes"], correctAnswer: 1 },
  { id: 18, question: "What is the coldest time during Harmattan in Nigeria?", options: ["Afternoon", "Midnight", "Early morning (before sunrise)", "Evening"], correctAnswer: 2 },
  { id: 19, question: "Which Nigerian city experiences the most intense Harmattan?", options: ["Lagos", "Port Harcourt", "Kano", "Calabar"], correctAnswer: 2 },
  { id: 20, question: "What causes the dusty haze during Harmattan?", options: ["Industrial pollution", "Fine sand particles carried from the Sahara", "Smoke from bush burning", "Sea salt spray"], correctAnswer: 1 },
  { id: 21, question: "How does Harmattan affect visibility?", options: ["Improves visibility", "Reduces visibility significantly", "No effect on visibility", "Only affects night visibility"], correctAnswer: 1 },
  { id: 22, question: "What is desertification and how does it relate to Harmattan?", options: ["Desert expansion that can intensify Harmattan", "A type of rainfall", "Coastal erosion", "Forest growth"], correctAnswer: 0 },
  { id: 23, question: "Which part of Nigeria receives the most annual rainfall?", options: ["Sokoto (Northwest)", "Niger Delta (South-South)", "Abuja (Central)", "Maiduguri (Northeast)"], correctAnswer: 1 },
  { id: 24, question: "What is the typical humidity level during Harmattan?", options: ["Above 80%", "60-70%", "Below 25%", "50-60%"], correctAnswer: 2 },
  { id: 25, question: "How long can the Harmattan season last?", options: ["1-2 weeks", "1 month", "3-4 months", "6 months"], correctAnswer: 2 },
  { id: 26, question: "What is Lake Chad's role in regional weather patterns?", options: ["No significant role", "Moderates local climate and provides moisture", "Causes hurricanes", "Creates cold fronts"], correctAnswer: 1 },
  { id: 27, question: "Why is Lake Chad shrinking and how does it affect weather?", options: ["It's not shrinking", "Climate change reduces its moderating effect", "Volcanic activity", "Tectonic shifts"], correctAnswer: 1 },
  { id: 28, question: "What protective measures do Nigerians take during Harmattan?", options: ["Using umbrellas", "Moisturizing skin and protecting from dust", "Wearing rain boots", "Using sunscreen only"], correctAnswer: 1 },
  { id: 29, question: "How does Harmattan affect agriculture in Nigeria?", options: ["Increases crop yield", "Can damage crops through dryness and dust", "No effect on farming", "Promotes rapid plant growth"], correctAnswer: 1 },
  { id: 30, question: "What is the 'tropical continental' air mass?", options: ["Humid air from the ocean", "Dry, dusty air from the Sahara (causes Harmattan)", "Cold polar air", "Monsoon winds"], correctAnswer: 1 },
  { id: 31, question: "What is the 'tropical maritime' air mass?", options: ["Dry desert air", "Moist air from the Atlantic (brings rain)", "Arctic air", "Mountain air"], correctAnswer: 1 },
  { id: 32, question: "Why do Northern Nigerian nights get very cold during Harmattan?", options: ["Ocean currents", "Clear skies allow heat to escape rapidly", "Snow formation", "Wind chill from hurricanes"], correctAnswer: 1 },
  { id: 33, question: "What temperature difference can occur between day and night during Harmattan?", options: ["2-3°C", "5-7°C", "15-20°C or more", "No difference"], correctAnswer: 2 },
  { id: 34, question: "How does global warming affect West African monsoons?", options: ["Makes them more predictable", "Causes erratic rainfall patterns", "Stops them completely", "No effect"], correctAnswer: 1 },
  { id: 35, question: "What is the Sahel region?", options: ["A coastal area", "The transition zone between Sahara and savanna", "A mountain range", "A river delta"], correctAnswer: 1 },
  { id: 36, question: "Which Nigerian states are in the Sahel zone?", options: ["Lagos and Ogun", "Borno, Yobe, and Sokoto", "Rivers and Bayelsa", "Enugu and Anambra"], correctAnswer: 1 },
  { id: 37, question: "What role do trade winds play in Nigerian weather?", options: ["No role", "They determine seasonal changes and Harmattan", "They only affect shipping", "They cause earthquakes"], correctAnswer: 1 },
  { id: 38, question: "Why was 2024/2025 winter unusually warm globally?", options: ["Normal variation", "El Niño and climate change effects", "Reduced solar activity", "Oceanic cooling"], correctAnswer: 1 },
  { id: 39, question: "How does deforestation in Nigeria affect local weather?", options: ["Cools the environment", "Increases temperatures and reduces rainfall", "Creates more clouds", "No effect"], correctAnswer: 1 },
  { id: 40, question: "What is the average annual rainfall in Lagos?", options: ["200mm", "800mm", "1,500-2,000mm", "3,500mm"], correctAnswer: 2 },
  { id: 41, question: "What is the average annual rainfall in Kano?", options: ["600-900mm", "2,000mm", "3,000mm", "100mm"], correctAnswer: 0 },
  { id: 42, question: "What causes flooding in Nigerian cities?", options: ["Harmattan", "Heavy rainfall and poor drainage", "Earthquakes", "Cold weather"], correctAnswer: 1 },
  { id: 43, question: "When did Nigeria experience its worst flooding in recent history?", options: ["2005", "2012", "2022", "1990"], correctAnswer: 2 },
  { id: 44, question: "What is the Nigerian Meteorological Agency called?", options: ["NAFDAC", "NiMet", "NNPC", "NEPA"], correctAnswer: 1 },
  { id: 45, question: "How does the Atlantic Ocean influence Nigerian climate?", options: ["No influence", "Provides moisture for the rainy season", "Creates cold winters", "Causes droughts"], correctAnswer: 1 },
  { id: 46, question: "What traditional practice often causes fires during dry season?", options: ["Fishing", "Bush burning for farming", "Mining", "Construction"], correctAnswer: 1 },
  { id: 47, question: "How does urbanization affect local weather in Nigerian cities?", options: ["Cools cities", "Creates urban heat islands", "Increases rainfall", "No effect"], correctAnswer: 1 },
  { id: 48, question: "What is the greenhouse effect's impact on Nigerian weather?", options: ["Cooling temperatures", "Rising temperatures and extreme weather", "More Harmattan", "Stable weather"], correctAnswer: 1 },
  
];






  // I added all 50 questions here


let currentState = "rules";
let currentIndex = 0;
let selectedAnswer = null;
let answers = [];
let score = 0;
let timeLeft = 30;
let isLocked = false;
let timerInterval = null;

const app = document.getElementById("app");

// I Created a floating particles
function createParticles() {
  let html = '<div class="floating-particles">';
  for (let i = 0; i < 20; i++) {
    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 10;
    const duration = Math.random() * 10 + 10;
    html += `<div class="particle" style="width:${size}px;height:${size}px;left:${left}%;top:${top}%;animation-delay:${delay}s;animation-duration:${duration}s"></div>`;
  }
  return html + '</div>';
}

// Render Rules Page
function renderRulesPage() {
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-4 relative">
      ${createParticles()}
      <div class="glass-card rounded-3xl p-8 md:p-12 max-w-2xl w-full fade-in relative z-10">
        <div class="text-center mb-8">
          <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 mb-4">
            <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold mb-2">Quiz Rules</h1>
          <p class="text-muted-foreground">Please read the rules carefully before starting</p>
        </div>
        <div class="space-y-4 mb-8">
          <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">⏱</div>
            <div><h3 class="font-semibold text-lg">Time Limit</h3><p class="text-muted-foreground text-sm">You have 30 seconds to answer each question.</p></div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">📚</div>
            <div><h3 class="font-semibold text-lg">50 Questions</h3><p class="text-muted-foreground text-sm">The quiz contains 50 objective questions about Nigerian weather.</p></div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">🏆</div>
            <div><h3 class="font-semibold text-lg">Scoring</h3><p class="text-muted-foreground text-sm">Each correct answer earns you 1 point. Maximum score is 50.</p></div>
          </div>
          <div class="flex items-start gap-4 p-4 rounded-xl bg-muted/30">
            <div class="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">⚠️</div>
            <div><h3 class="font-semibold text-lg">No Going Back</h3><p class="text-muted-foreground text-sm">Once you select an answer, you cannot change it.</p></div>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row gap-4">
          <button onclick="handleExit()" class="btn-secondary flex-1">Exit Quiz</button>
          <button onclick="handleContinue()" class="btn-primary flex-1">Continue →</button>
        </div>
      </div>
    </div>
  `;
}

// Render Start Page
function renderStartPage() {
  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-4 relative">
      ${createParticles()}
      <div class="glass-card rounded-3xl p-8 md:p-12 max-w-lg w-full fade-in relative z-10 text-center">
        <div class="relative inline-block mb-6">
          <div class="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center pulse-glow">
            <span class="text-4xl">🧠</span>
          </div>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Nigerian Weather Quiz</h1>
        <p class="text-muted-foreground text-lg mb-8">Test your knowledge about Nigerian weather, Harmattan, and why 2025 was different!</p>
        <div class="flex items-center justify-center gap-8 mb-8 text-sm">
          <div class="text-center"><div class="text-3xl font-bold text-primary">50</div><div class="text-muted-foreground">Questions</div></div>
          <div class="w-px h-12 bg-border"></div>
          <div class="text-center"><div class="text-3xl font-bold text-secondary">30s</div><div class="text-muted-foreground">Per Question</div></div>
          <div class="w-px h-12 bg-border"></div>
          <div class="text-center"><div class="text-3xl font-bold text-accent">50</div><div class="text-muted-foreground">Max Score</div></div>
        </div>
        <button onclick="handleStart()" class="btn-primary w-full text-lg py-4">⚡ Start Quiz Now</button>
      </div>
    </div>
  `;
}

// Render Quiz Page
function renderQuizPage() {
  const question = quizQuestions[currentIndex];
  const progress = ((currentIndex + 1) / quizQuestions.length) * 100;
  const labels = ["A", "B", "C", "D"];
  
  let optionsHtml = question.options.map((option, index) => {
    let classes = "quiz-option p-4 rounded-xl flex items-center gap-4";
    let labelClasses = "w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm";
    
    if (isLocked) {
      if (index === question.correctAnswer) {
        classes += " correct";
        labelClasses += " bg-success text-white";
      } else if (index === selectedAnswer) {
        classes += " incorrect";
        labelClasses += " bg-destructive text-white";
      } else {
        labelClasses += " bg-muted";
      }
    } else if (index === selectedAnswer) {
      classes += " selected";
      labelClasses += " bg-primary text-primary-foreground";
    } else {
      labelClasses += " bg-muted";
    }
    
    return `
      <button onclick="handleSelectAnswer(${index})" ${isLocked ? 'disabled' : ''} class="${classes}">
        <div class="${labelClasses}">${labels[index]}</div>
        <span class="flex-1 text-left">${option}</span>
      </button>
    `;
  }).join('');

  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-4 relative">
      ${createParticles()}
      <div class="glass-card rounded-3xl p-6 md:p-8 max-w-3xl w-full fade-in relative z-10">
        <div class="flex items-center justify-between mb-6">
          <div class="text-sm font-medium text-muted-foreground">Question <span class="text-primary">${currentIndex + 1}</span> of ${quizQuestions.length}</div>
          <div class="flex items-center gap-2 px-4 py-2 rounded-full ${timeLeft <= 10 ? 'bg-destructive/20 text-destructive' : 'bg-primary/20 text-primary'}">
            ⏱ <span class="font-bold">${timeLeft}s</span>
          </div>
        </div>
        <div class="progress-bar mb-8"><div class="progress-bar-fill" style="width:${progress}%"></div></div>
        <div class="mb-8"><h2 class="text-xl md:text-2xl font-semibold leading-relaxed">${question.question}</h2></div>
        <div class="space-y-3 mb-6">${optionsHtml}</div>
        <div class="text-center text-sm text-muted-foreground">Current Score: <span class="text-primary font-bold">${score}</span> / ${currentIndex}</div>
      </div>
    </div>
  `;
}

// Render Result Page
function renderResultPage() {
  const percentage = Math.round((score / quizQuestions.length) * 100);
  let message, emoji;
  if (percentage >= 90) { message = "Outstanding!"; emoji = "🏆"; }
  else if (percentage >= 70) { message = "Great Job!"; emoji = "🌟"; }
  else if (percentage >= 50) { message = "Good Effort!"; emoji = "👍"; }
  else { message = "Keep Learning!"; emoji = "📚"; }

  app.innerHTML = `
    <div class="min-h-screen flex items-center justify-center p-4 relative">
      ${createParticles()}
      <div class="glass-card rounded-3xl p-8 md:p-12 max-w-lg w-full fade-in relative z-10 text-center">
        <div class="text-6xl mb-6">${emoji}</div>
        <h1 class="text-3xl md:text-4xl font-bold mb-2">${message}</h1>
        <p class="text-muted-foreground text-lg mb-8">You completed the Nigerian Weather Quiz</p>
        <div class="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
          <span class="text-4xl font-bold text-primary">${score}/${quizQuestions.length}</span>
        </div>
        <p class="text-muted-foreground mb-8">${percentage}% correct answers</p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button onclick="handleHome()" class="btn-secondary flex-1">🏠 Home</button>
          <button onclick="handleRestart()" class="btn-primary flex-1">🔄 Try Again</button>
        </div>
      </div>
    </div>
  `;
}

// Event Handlers
function handleContinue() { currentState = "start"; render(); }
function handleExit() { currentState = "rules"; render(); }
function handleStart() { currentState = "quiz"; startTimer(); render(); }
function handleHome() { resetQuiz(); currentState = "rules"; render(); }
function handleRestart() { resetQuiz(); currentState = "start"; render(); }

function handleSelectAnswer(index) {
  if (isLocked) return;
  selectedAnswer = index;
  isLocked = true;
  clearInterval(timerInterval);
  render();
  
  setTimeout(() => {
    processAnswer();
  }, 1500);
}

function processAnswer() {
  answers.push(selectedAnswer ?? -1);
  if (selectedAnswer === quizQuestions[currentIndex].correctAnswer) {
    score++;
  }
  
  if (currentIndex < quizQuestions.length - 1) {
    currentIndex++;
    selectedAnswer = null;
    timeLeft = 30;
    isLocked = false;
    startTimer();
    render();
  } else {
    currentState = "result";
    render();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    render();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      isLocked = true;
      render();
      setTimeout(() => processAnswer(), 1500);
    }
  }, 1000);
}

function resetQuiz() {
  currentIndex = 0;
  selectedAnswer = null;
  answers = [];
  score = 0;
  timeLeft = 30;
  isLocked = false;
  clearInterval(timerInterval);
}

function render() {
  if (currentState === "rules") renderRulesPage();
  else if (currentState === "start") renderStartPage();
  else if (currentState === "quiz") renderQuizPage();
  else if (currentState === "result") renderResultPage();
}

// Initialize
render();
