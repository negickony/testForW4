const quiz = [
  {
    question: 'YMOのメンバーでないのはだれ？',
    answers: [ '細野晴臣', '坂本龍一', '高橋幸宏', '大瀧詠一'],
    correct: '大瀧詠一'
  }, {
    question: 'WANDSの結成当初のメンバーでないのはだれ？',
    answers: [ '上杉昇', '柴崎浩', '木村真也', '大島こうすけ'],
    correct: '木村真也'
  }, {
    question: 'くるりの結成当初のメンバーでないのはだれ？',
    answers: [ '岸田繁', '大村達身', '佐藤征史', '森信行'],
    correct: '大村達身'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
    // $window.alert('クイズ終了！');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解!');
    score++;
  } else {
    $window.alert('不正解!');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}