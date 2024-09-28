const questions = {
    global: [
        { question: "Quelle est la capitale de la France ?", answer: "Paris" },
        { question: "Combien font 2 + 2 ?", answer: "4" },
        { question: "Combien font 10 x 10 ?", answer: "100" },
        { question: "Quelle est la racine carrée de 16 ?", answer: "4" },
        { question: "Quel est le symbole chimique de l'eau ?", answer: "H2O" },
        { question: "Quel est l'élément le plus léger ?", answer: "Hydrogène" },
        { question: "Qui a été le premier empereur de France ?", answer: "Napoléon" },
        { question: "En quelle année a commencé la Seconde Guerre mondiale ?", answer: "1939" },
        // Questions de maths
        { question: "Quelle est la valeur de x si 3x - 5 = 16 ?", answer: "7" },
        { question: "Un article coûte 80€ avec une réduction de 15 %. Quel est le prix après réduction ?", answer: "68" },
        { question: "Si un triangle a des côtés de 3cm, 4cm et 5cm, est-il rectangle ?", answer: "Oui" },
        { question: "Quelle est la longueur de l’hypoténuse d’un triangle rectangle dont les côtés mesurent 6cm et 8cm ?", answer: "10" },
        { question: "Quelle est la valeur de x si 2x + 5 = 17 ?", answer: "6" },
        { question: "Quelle est la valeur de x si 5x + 3 = 2x + 9 ?", answer: "2" },
        { question: "Si la base d'un triangle mesure 10cm et la hauteur 5cm, quelle est son aire ?", answer: "25" },
        { question: "Combien y a-t-il de faces dans un cube ?", answer: "6" },
        { question: "Quelle est la valeur de x si 4x - 7 = 2x + 5 ?", answer: "6" },
        { question: "Si un produit coûte 50€ et augmente de 20 %, quel est le nouveau prix ?", answer: "60" },
        { question: "Quelle est la valeur de x si 7x + 4 = 3x + 28 ?", answer: "6" },
        { question: "Quelle est l'aire d'un rectangle de 12cm de longueur et 5cm de largeur ?", answer: "60" },
        { question: "Calcule la hauteur d'un triangle isocèle dont la base mesure 8cm et les deux autres côtés mesurent 10cm", answer: "6" },
        { question: "Quelle est l'aire d'un carré dont le côté mesure 9cm ?", answer: "81" },
        { question: "Si un billet de train coûte 30€ et subit une augmentation de 10 %, quel est le nouveau prix ?", answer: "33" },
        { question: "Quelle est la valeur de x si 6x - 8 = 4x + 12 ?", answer: "10" },
        { question: "Si un rectangle a une aire de 48cm et une largeur de 6cm, quelle est sa longueur ?", answer: "8" },
        { question: "Calcule l'aire d'un triangle de base 12cm et de hauteur 7cm", answer: "42" },
        { question: "Quelle est la valeur de x si 9x + 5 = 32 ?", answer: "3" },
        { question: "Un triangle équilatéral a un côté de 5. Quelle est la somme de ses angles intérieurs ?", answer: "180" },
        { question: "Calcule le périmètre d'un carré de côté 15", answer: "60" },
        { question: "Quel est le volume d'un cube de côté 3 ?", answer: "27" },
        { question: "Quelle est la valeur de x si 2x + 7 = 21 ?", answer: "7" },
        { question: "Quelle est la valeur de x si 6x - 7 = 17 ?", answer: "4" },
        { question: "Quelle est la valeur de x si 7x - 9 = 19 ?", answer: "4" },
        { question: "Calcule la longueur d'un rectangle dont l'aire est 72cm et la largeur 8cm", answer: "9" },
        { question: "Quelle est la valeur de x si 8x - 7 = 25 ?", answer: "4" },
        { question: "Si un triangle a des angles de 30°, 60° et 90°, comment s'appelle-t-il ?", answer: "Triangle rectangle" },
        { question: "Quelle est la valeur de x si 2x - 6 = 8 ?", answer: "7" },
        { question: "Calcule l'aire d'un triangle dont la base mesure 9cm et la hauteur 4cm", answer: "18" },
        { question: "Quelle est la valeur de x si 8x - 7 = 25 ?", answer: "4" },
        { question: "Quelle est la valeur de x si 5x - 3 = 17 ?", answer: "4" },
        { question: "Quel est le volume d'un cube de côté 6cm ?", answer: "216" },
        { question: "Quelle est la valeur de x si 7x - 8 = 20 ?", answer: "4" },
        { question: "Quelle est l'aire d'un rectangle dont la longueur est 10cm et la largeur 6cm ?", answer: "60" },
        { question: "Quelle est la valeur de x si 6x - 4 = 32 ?", answer: "6" },
        { question: "Calcule l'aire d'un trapèze dont les bases mesurent 10cm et 6cm, et la hauteur 4cm", answer: "32" },
        { question: "Quelle est la valeur de x si 6x - 7 = 17 ?", answer: "4" },
        { question: "Quel est le périmètre d'un rectangle dont la longueur est 10cm et la largeur 6cm ?", answer: "32" },
        { question: "Quelle est l'aire d'un carré dont le côté mesure 7 ?", answer: "49" },
        { question: "Quelle est la valeur de x si 4x + 7 = 31 ?", answer: "6" },
        { question: "Quelle est la valeur de x si 5x + 4 = 29 ?", answer: "5" },
        { question: "Je veux faire une vinaigrette de 100 mL, le ratio huile/vinaigre est de 3:1, de combien de ml d'huile vais-je avoir besoin ? ", answer: "75" },
        { question: "Je veux faire une vinaigrette de 500 mL, le ration huile/vinaigre/moutarde est de 2:1:1, de combien de mL de vinaigre vais-je avoir besoin ?", answer: "125" },
        //qestions de sciences
        { question: "De quoi est formée la matière ?", answer: "atome" },
        { question: "Combien y a-t-il d'atomes différents ?", answer: "118" },
        { question: "Quel est le symbole du Carbone ?", answer: "C" },
        { question: "Quel est le symbole de l'Hydrogène ?", answer: "H" },
        { question: "Quel est le symbole chimique de l'eau ?", answer: "H2O" },
        { question: "Quel est l'élément le plus léger ?", answer: "Hydrogène" },
        { question: "Quel est le symbole de l'Azote ?", answer: "N" },
        { question: "De combien de % le dioxygène est présent dans l'air ?", answer: "21" },
        { question: "De quoi est composée une molécule ?", answer: "Atomes" },
        { question: "Quelle est la formule du Méthane ?", answer: "CH4" },
        { question: "Quel est le nom du processus où un liquide devient un gaz ?", answer: "Evaporation" },
        { question: "Quel est le nom du processus où un gaz devient un liquide ?", answer: "Condensation" },
        { question: "Quel est le nom du processus où un solide se transforme directement en gaz ?", answer: "Sublimation" },
        { question: "Quel est le nom du processus où un liquide passe à l'état solide ?", answer: "Congélation" },
        { question: "Quel est l'état de la matière avec une forme définie et un volume défini ?", answer: "Solide" },
        { question: "Quelle est la température à laquelle l'eau gèle en degrés Celsius ?", answer: "0" },
        { question: "Quelle est la température à laquelle l'eau bout en degrés Celsius ?", answer: "100" },
        { question: "Quel est l'état de la matière où les molécules bougent librement ?", answer: "Gaz" },
        { question: "Quel est l'état de la matière où les molécules sont moins proches que dans un solide, mais plus proches que dans un gaz ?", answer: "Liquide" },
        { question: "Quel est l'unité de mesure du volume ?", answer: "Litre" },
        { question: "Quel est l'unité de mesure de la force ?", answer: "Newton" },
        { question: "Quel est l'unité de mesure de l'énergie ?", answer: "Joule" },
        { question: "Quel est l'unité de mesure de la pression ?", answer: "Pascal" },
        { question: "Quel est l'unité de mesure de la température ?", answer: "Celsius" },
        { question: "Quel est l'unité de mesure de l'intensité lumineuse ?", answer: "Candela" },
        { question: "Quel est l'état de la matière où les molécules sont les plus proches les unes des autres ?", answer: "Solide" },
        { question: "Quel est le nom du processus où un gaz passe à l'état liquide ?", answer: "Condensation" },
        //questions d'Histoire
        { question: "En quelle année la Première Guerre mondiale éclate-t-elle ?", answer: "1914" },
        { question: "À quelle date l’Allemagne déclare-t-elle la guerre à la Russie (donner dans le format JJ/MM/AAAA) ?", answer: "01/08/1914" },
        { question: "Quand a été assassiné l'héritier du trône austro-hongrois (donner dans le format JJ/MM/AAAA) ?", answer: "28/06/1914" },
        { question: "Quand est-ce que l'Allemagne a-t-elle déclaré la guerre (1GM) à la France (donner dans le format JJ/MM/AAAA) ?", answer: "03/08/1914" },
        { question: "En quoi étaient faits les lits des soldats dans les tranchées pendant la Première Guerre mondiale ?", answer: "Paille" },
        { question: "Combien de millions d'hommes ont été mobilisés au début de la Grande Guerre ?", answer: "3" },
        { question: "Comment appelle-t-on les courtes pauses où les soldats ont le droit d'aller voir leur famille durant la Première Guerre mondiale ?", answer: "Permissions" },
        { question: "Quel général de la Seconde Guerre mondiale était un officier prisonnier pendant la Première Guerre mondiale ?", answer: "De Gaulle" },
        { question: "Quand est-ce que la bataille de Verdun a-t-elle débuté (donner dans le format JJ/MM/AAAA) ?", answer: "21/02/1916" },
        { question: "Quand est-ce que la bataille de Verdun a-t-elle été terminée (donner dans le format JJ/MM/AAAA) ?", answer: "18/12/1916" },
        { question: "En quel moi de l'année 1916 commença le génocide Arménien", answer: "Avril" },
        { question: "En quel moi de l'année 1916 fini le génocide Arménien", answer: "Juillet" },
        { question: "Quand est-ce que l'Allemagne et la France signe l'Armistice de la 1ère Guerre Mondiale (donner dans le format JJ/MM/AAAA) ?", answer: "11/11/1918" },
        { question: "Quand est-ce que la Russie se retire t-elle de la Grande Guerre (donner dans le format JJ/MM/AAAA) ?", answer: "15/12/1917" },
    ],
    sciences: [
        { question: "De quoi est formée la matière ?", answer: "atome" },
        { question: "Combien y a-t-il d'atomes différents ?", answer: "118" },
        { question: "Quel est le symbole du Carbone ?", answer: "C" },
        { question: "Quel est le symbole de l'Hydrogène ?", answer: "H" },
        { question: "Quel est le symbole chimique de l'eau ?", answer: "H2O" },
        { question: "Quel est l'élément le plus léger ?", answer: "Hydrogène" },
        { question: "Quel est le symbole de l'Azote ?", answer: "N" },
        { question: "De combien de % le dioxygène est présent dans l'air ?", answer: "21" },
        { question: "De quoi est composée une molécule ?", answer: "Atomes" },
        { question: "Quelle est la formule du Méthane ?", answer: "CH4" },
        { question: "Quel est le nom du processus où un liquide devient un gaz ?", answer: "Evaporation" },
        { question: "Quel est le nom du processus où un gaz devient un liquide ?", answer: "Condensation" },
        { question: "Quel est le nom du processus où un solide se transforme directement en gaz ?", answer: "Sublimation" },
        { question: "Quel est le nom du processus où un liquide passe à l'état solide ?", answer: "Congélation" },
        { question: "Quel est l'état de la matière avec une forme définie et un volume défini ?", answer: "Solide" },
        { question: "Quelle est la température à laquelle l'eau gèle en degrés Celsius ?", answer: "0" },
        { question: "Quelle est la température à laquelle l'eau bout en degrés Celsius ?", answer: "100" },
        { question: "Quel est l'état de la matière où les molécules bougent librement ?", answer: "Gaz" },
        { question: "Quel est l'état de la matière où les molécules sont moins proches que dans un solide, mais plus proches que dans un gaz ?", answer: "Liquide" },
        { question: "Quel est l'unité de mesure du volume ?", answer: "Litre" },
        { question: "Quel est l'unité de mesure de la force ?", answer: "Newton" },
        { question: "Quel est l'unité de mesure de l'énergie ?", answer: "Joule" },
        { question: "Quel est l'unité de mesure de la pression ?", answer: "Pascal" },
        { question: "Quel est l'unité de mesure de la température ?", answer: "Celsius" },
        { question: "Quel est l'unité de mesure de l'intensité lumineuse ?", answer: "Candela" },
        { question: "Quel est l'état de la matière où les molécules sont les plus proches les unes des autres ?", answer: "Solide" },
        { question: "Quel est le nom du processus où un gaz passe à l'état liquide ?", answer: "Condensation" }
    ],
    maths: [
        { question: "Quelle est la valeur de x si 3x - 5 = 16 ?", answer: "7" },
        { question: "Un article coûte 80€ avec une réduction de 15 %. Quel est le prix après réduction ?", answer: "68" },
        { question: "Si un triangle a des côtés de 3cm, 4cm et 5cm, est-il rectangle ?", answer: "Oui" },
        { question: "Quelle est la longueur de l’hypoténuse d’un triangle rectangle dont les côtés mesurent 6cm et 8cm ?", answer: "10" },
        { question: "Quelle est la valeur de x si 2x + 5 = 17 ?", answer: "6" },
        { question: "Quelle est la valeur de x si 5x + 3 = 2x + 9 ?", answer: "2" },
        { question: "Si la base d'un triangle mesure 10cm et la hauteur 5cm, quelle est son aire ?", answer: "25" },
        { question: "Combien y a-t-il de faces dans un cube ?", answer: "6" },
        { question: "Quelle est la valeur de x si 4x - 7 = 2x + 5 ?", answer: "6" },
        { question: "Si un produit coûte 50€ et augmente de 20 %, quel est le nouveau prix ?", answer: "60" },
        { question: "Quelle est la valeur de x si 7x + 4 = 3x + 28 ?", answer: "6" },
        { question: "Quelle est l'aire d'un rectangle de 12cm de longueur et 5cm de largeur ?", answer: "60" },
        { question: "Calcule la hauteur d'un triangle isocèle dont la base mesure 8cm et les deux autres côtés mesurent 10cm", answer: "6" },
        { question: "Quelle est l'aire d'un carré dont le côté mesure 9cm ?", answer: "81" },
        { question: "Si un billet de train coûte 30€ et subit une augmentation de 10 %, quel est le nouveau prix ?", answer: "33" },
        { question: "Quelle est la valeur de x si 6x - 8 = 4x + 12 ?", answer: "10" },
        { question: "Si un rectangle a une aire de 48cm et une largeur de 6cm, quelle est sa longueur ?", answer: "8" },
        { question: "Calcule l'aire d'un triangle de base 12cm et de hauteur 7cm", answer: "42" },
        { question: "Quelle est la valeur de x si 9x + 5 = 32 ?", answer: "3" },
        { question: "Un triangle équilatéral a un côté de 5. Quelle est la somme de ses angles intérieurs ?", answer: "180" },
        { question: "Calcule le périmètre d'un carré de côté 15", answer: "60" },
        { question: "Quel est le volume d'un cube de côté 3 ?", answer: "27" },
        { question: "Quelle est la valeur de x si 2x + 7 = 21 ?", answer: "7" },
        { question: "Quelle est la valeur de x si 6x - 7 = 17 ?", answer: "4" },
        { question: "Quelle est la valeur de x si 7x - 9 = 19 ?", answer: "4" },
        { question: "Calcule la longueur d'un rectangle dont l'aire est 72cm et la largeur 8cm", answer: "9" },
        { question: "Quelle est la valeur de x si 8x - 7 = 25 ?", answer: "4" },
        { question: "Si un triangle a des angles de 30°, 60° et 90°, comment s'appelle-t-il ?", answer: "Triangle rectangle" },
        { question: "Quelle est la valeur de x si 2x - 6 = 8 ?", answer: "7" },
        { question: "Calcule l'aire d'un triangle dont la base mesure 9cm et la hauteur 4cm", answer: "18" },
        { question: "Quelle est la valeur de x si 8x - 7 = 25 ?", answer: "4" },
        { question: "Quelle est la valeur de x si 5x - 3 = 17 ?", answer: "4" },
        { question: "Quel est le volume d'un cube de côté 6cm ?", answer: "216" },
        { question: "Quelle est la valeur de x si 7x - 8 = 20 ?", answer: "4" },
        { question: "Quelle est l'aire d'un rectangle dont la longueur est 10cm et la largeur 6cm ?", answer: "60" },
        { question: "Quelle est la valeur de x si 6x - 4 = 32 ?", answer: "6" },
        { question: "Calcule l'aire d'un trapèze dont les bases mesurent 10cm et 6cm, et la hauteur 4cm", answer: "32" },
        { question: "Quelle est la valeur de x si 6x - 7 = 17 ?", answer: "4" },
        { question: "Quel est le périmètre d'un rectangle dont la longueur est 10cm et la largeur 6cm ?", answer: "32" },
        { question: "Quelle est l'aire d'un carré dont le côté mesure 7 ?", answer: "49" },
        { question: "Quelle est la valeur de x si 4x + 7 = 31 ?", answer: "6" },
        { question: "Quelle est la valeur de x si 5x + 4 = 29 ?", answer: "5" },
        { question: "Je veux faire une vinaigrette de 100 mL, le ratio huile/vinaigre est de 3:1, de combien de ml d'huile vais-je avoir besoin ? ", answer: "75" },
        { question: "Je veux faire une vinaigrette de 500 mL, le ration huile/vinaigre/moutarde est de 2:1:1, de combien de mL de vinaigre vais-je avoir besoin ?", answer: "125" },
        
    ],
    histoire: [
        { question: "En quelle année la Première Guerre mondiale éclate-t-elle ?", answer: "1914" },
        { question: "À quelle date l’Allemagne déclare-t-elle la guerre à la Russie (donner dans le format JJ/MM/AAAA) ?", answer: "01/08/1914" },
        { question: "Quand a été assassiné l'héritier du trône austro-hongrois (donner dans le format JJ/MM/AAAA) ?", answer: "28/06/1914" },
        { question: "Quand est-ce que l'Allemagne a-t-elle déclaré la guerre (1GM) à la France (donner dans le format JJ/MM/AAAA) ?", answer: "03/08/1914" },
        { question: "En quoi étaient faits les lits des soldats dans les tranchées pendant la Première Guerre mondiale ?", answer: "Paille" },
        { question: "Combien de millions d'hommes ont été mobilisés au début de la Grande Guerre ?", answer: "3" },
        { question: "Comment appelle-t-on les courtes pauses où les soldats ont le droit d'aller voir leur famille durant la Première Guerre mondiale ?", answer: "Permissions" },
        { question: "Quel général de la Seconde Guerre mondiale était un officier prisonnier pendant la Première Guerre mondiale ?", answer: "De Gaulle" },
        { question: "Quand est-ce que la bataille de Verdun a-t-elle débuté (donner dans le format JJ/MM/AAAA) ?", answer: "21/02/1916" },
        { question: "Quand est-ce que la bataille de Verdun a-t-elle été terminée (donner dans le format JJ/MM/AAAA) ?", answer: "18/12/1916" },
        { question: "En quel moi de l'année 1916 commença le génocide Arménien", answer: "Avril" },
        { question: "En quel moi de l'année 1916 fini le génocide Arménien", answer: "Juillet" },
        { question: "Quand est-ce que l'Allemagne et la France signe l'Armistice de la 1ère Guerre Mondiale (donner dans le format JJ/MM/AAAA) ?", answer: "11/11/1918" },
        { question: "Quand est-ce que la Russie se retire t-elle de la Grande Guerre (donner dans le format JJ/MM/AAAA) ?", answer: "15/12/1917" },

    ]
};


let currentQuestionIndex = 0;
let currentQuiz = new URLSearchParams(window.location.search).get('type');
let quizContainer = document.getElementById('quiz-container');
let questionElement = document.getElementById('question');
let feedbackElement = document.getElementById('feedback');
let setupContainer = document.getElementById('setup-container');
let selectedQuestionCount;
let correctAnswers = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Vérifie si le type de quiz est valide
if (!questions[currentQuiz]) {
    alert("Type de quiz invalide. Veuillez sélectionner un quiz valide.");
    window.location.href = 'questions.html'; // Redirige vers la page des questions
}

function startQuiz() {
    selectedQuestionCount = parseInt(document.getElementById('question-count').value);
    setupContainer.style.display = 'none';
    quizContainer.style.display = 'block';

    // Mélange les questions avant de commencer le quiz
    shuffleArray(questions[currentQuiz]);

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < selectedQuestionCount && currentQuestionIndex < questions[currentQuiz].length) {
        questionElement.innerText = questions[currentQuiz][currentQuestionIndex].question;
        feedbackElement.textContent = '';
        document.getElementById('answer').value = '';
    } else {
        endQuiz();
    }
}

function checkAnswer() {
    if (currentQuestionIndex >= selectedQuestionCount || currentQuestionIndex >= questions[currentQuiz].length) {
        return;
    }

    let userAnswer = document.getElementById('answer').value.trim().toLowerCase();
    let correctAnswer = questions[currentQuiz][currentQuestionIndex].answer.toLowerCase();

    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Bonne réponse !";
        feedbackElement.style.color = "green";
        correctAnswers++;
    } else {
        feedbackElement.textContent = `Mauvaise réponse. La bonne réponse est : ${questions[currentQuiz][currentQuestionIndex].answer}.`;
        feedbackElement.style.color = "red";
    }

    currentQuestionIndex++;
    setTimeout(loadQuestion, 1500);
}

function endQuiz() {
    questionElement.innerText = "Quiz terminé !";
    feedbackElement.innerHTML = `Vous avez répondu correctement à ${correctAnswers} sur ${selectedQuestionCount} questions.<br>Votre note finale est : ${(correctAnswers / selectedQuestionCount * 20).toFixed(2)}/20.`;

    // Ajouter un bouton pour revenir à l'accueil
    const returnButton = document.createElement("button");
    returnButton.innerText = "Retour à l'accueil";
    returnButton.onclick = () => window.location.href = 'index.html';
    feedbackElement.appendChild(returnButton);

    document.getElementById('answer').style.display = 'none';
    document.querySelector('button').style.display = 'none';
}
