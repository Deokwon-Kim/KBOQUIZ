const questions = [
    {
        question: "KBO리그 첫 창단 팀은?",
        options: ["OB베어스(현 두산베어스)", "해태타이거즈(현 기아타이거즈)", "롯데자이언츠", "삼성라이온즈", "삼미슈퍼스타즈(현 SSG랜더스)"],
        answer: "OB베어스(현 두산베어스)",
        explanation: "대한민국에서 최초로 창단된 프로야구단으로 삼성라이온즈 ,롯데자이언츠와 함께 KBO리그 원년부터 팀명이 바뀌지 않은 3구단 중 하나다.",
        wrongExplanation: "정답: OB베어스\n대한민국에서 최초로 창단된 프로야구단으로 삼성라이온즈 ,롯데자이언츠와 함께 KBO리그 원년부터 팀명이 바뀌지 않은 3구단 중 하나다."
    },
    {
        question: "투수로서 22연승을 달성한 선수는?",
        options: ["박철순", "최동원", "선동열", "류현진"],
        answer: "박철순",
        explanation: "1982년 09월18일 박철순이 기록한 22연승",
        wrongExplanation: "정답: 박철순 \n1982년 09월18일 박철순이 기록한 22연승"
    },
    {
        question: "한국시리즈에서 투수로서 4승을 올린 선수는?",
        options: ["류현진", "선동열", "최동원", "박찬호"],
        answer: "최동원",
        explanation: "1984년 한국시리즈에서 최동원은 선발+구원으로 4승을 기록하여 롯데를 한국시리즈 우승으로 이끌었다.",
        wrongExplanation: "정답: 최동원 \n1984년 한국시리즈에서 최동원은 선발+구원으로 4승을 기록하여 롯데를 한국시리즈 우승으로 이끌었다."

    },
    {
        question: "KBO리그 한경기 최다 17탈삼진을 기록한 선수는?",
        options: ["김선우", "니퍼트", "류현진", "임찬규"],
        answer: "류현진",
        explanation: "류현진은 2010년 05월11일 청주 LG전에서 9이닝동안 17개의 삼진을 잡아내며 완투승을 기록하였다\n 이 기록은 현재까지도 깨지지 않은 기록이다.",
        wrongExplanation:"정답: 류현진 \n 2010년 05월11일 청주 LG전에서 17개의 삼진을 기록하였다."
    },
    {
        question: "KBO리그 출범년도는?",
        options: ["1960년", "1968년", "1975년", "1982년"],
        answer: "1982년",
        explanation: "KBO리그는 1982년도에 출범하였다.",
        wrongExplanation:"정답: 1982년 \n KBO리그는 1982년도에 출범하였다. "
    },
    {
        question: "KBO리그 한국시리즈 첫 우승팀은?",
        options: ["롯데자이언츠", "엘지트윈스", "OB베어스(현 두산베어스)", "해태타이거즈(현 기아타이거즈)"],
        answer: "OB베어스(현 두산베어스)",
        explanation: "1982년 10월12일 한국시리즈 6차전에서 삼성을 상대로 승리하며 KBO리그 한국시리즈 첫번째 우승팀이 되었다.",
        wrongExplanation:"정답: OB베어스(현 두산베어스) \n KBO리그 한국시리즈 첫 우승팀은 1982년 OB배어스가 기록하였다."
    },
    {
        question: "KBO리그 한국시리즈 최다 우승팀은?",
        options: ["두산베어스", "SSG랜더스", "한화이글스", "엘지트윈스" , "삼성라이온즈" , "기아타이거즈" , "KT위즈" , "키움히어로즈" ,"롯데자이언츠", "NC다이노스"],
        answer: "기아타이거즈",
        explanation: "기아타이거즈는 1983, 1986, 1987, 1988, 1989, 1991, 1993, 1996, 1997, 2009, 2017, 2024 \n 총12번 한국시리즈에 진출해 12회 모두 우승을 기록했다.",
        wrongExplanation: "정답: 기아타이거즈(12회) \n 기아타이거즈는 총12회 한국시리즈에 진출하여 모두 우승을 기록하였다"
    },
    {
        question: "2024년 KBO리그는 역대 최다관중수를 기록했습니다 몇만관중을 달성했을까요?",
        options: ["900만", "850만", "1000만", "700만", "600만"],
        answer: "1000만",
        explanation: "2024년 09월 15일 이날까지 모두 1002만 758명의 관중이 입장하면서 KBO리그 최초 1000만 관중을 기록하였다.",
        wrongExplanation:"정답:1000만 \n 2024년 09월 15일까지 1002만 758명의 관중이 입장하여 1000만 관중을 기록하였다."
    },
    {
        question: "KBO리그 역대 개인통산 최다홈런 기록 보유선수는?",
        options: ["이승엽", "이대호", "최정", "최형우", "박병호"],
        answer: "최정",
        explanation: "2024년 04월24일 부산 롯데전에서 통산 468호 홈런을 기록하며 종전기록인 467홈런의 이승엽을 넘어 개인통산 최다홈런 기록 보유선수가 되었다.",
        wrongExplanation:"정답: 최정 \n 2024년 04월24일 부산 롯데전에서 통산 468홈런을 기록하였다.(이전기록: 이승엽(467홈런))"
    },
    {
        question: "KBO리그 역대 개인통산 최다안타 기록 보유선수는?",
        options: ["박용택", "김태균", "손아섭", "김현수", "양준혁"],
        answer: "손아섭",
        explanation: "2024년 06월20일 잠실 두산전에서 안타를 기록하며 통산 2505안타를 기록하며 개인통산 최다안타 기록 보유선수가 되었다\n(이전기록:2504안타 박용택)",
        wrongExplanation:"정답: 손아섭 \n 2024년 06월20알 잠실 두산전에서 통산 2505안타를 기록하였다.(이전기록:박용택(2504안타))"
    },
    {
        question: "KBO리그 역대 개인통산 최다탈삼진 기록 보유선수는?",
        options: ["김광현", "니퍼트", "양현종", "류현진", "선동열"],
        answer: "양현종",
        explanation: "2024년 08월21일 광주 롯데전에서 개인통산 2409개의 탈삼잔을 기록하며 개인통산 최다탈삼진 기록 보유선수가 되었다.",
        wrongExplanation:"정답: 양현종 \n 2024년 08월21일 광주 롯데전에서 개인통산 2409 탈삼진을 기록하였다."
    },
    {
        question: "KBO리그 역대 개인통산 최다세이브 기록 보유선수는?",
        options: ["임창용", "오승환", "이용찬", "김택연", "정해영"],
        answer: "오승환",
        explanation: "2024년 04월24일 고척 키움전에서 세이브를 기록하며 개인통산 최다 세이브인 408세이브를 기록하였다.",
        wrongExplanation:"정답: 오승환 \n 2024년 04월24일 고척 키움전에서 개인통산 408세이브를 기록하였다."
    },
    {
        question: "2022년 KBO리그 최초 와이어 투 와이어 우승팀은?",
        options: ["기아타이거즈", "삼성라이온즈", "엘지트윈스", "두산베어스", "KT위즈", "SSG랜더스", "롯데자이언츠", "한화이글스", "NC다이노스", "키움히어로즈"],
        answer: "SSG랜더스",
        explanation: "2022년 SSG랜더스는 시즌 개막때 부터 우승순간까지 1위자리를 놓치지 않아 와이어 투 와이어 우승이라는 KBO리그 최초의 기록을 달성하였다.",
        wrongExplanation:"정답: SSG랜더스 \n 2022년 정규시즌을 시작부터 마지막까지 1위를 기록 후 한국시리즈 우승을 달성하여 와이어 투 와이어 우승 기록을 달성."
    },
    {
        question: "2024년 KBO리그는 판정시비를 줄이기 위해 자동볼판정 시스템인 이것을 도입하였는데 이것은 무엇일까요?",
        options: ["OSB", "USB", "ABS", "AAC"],
        answer: "ABS",
        explanation: "KBO는 2024시즌부터 볼 판정에 대한 정확성을 높이기 위해 자동 볼판정 시스템인 ABS를 도입하였다.",
        wrongExplanation:"정답: ABS \n 2024년 KBO는 볼 판정에 대한 정확성을 높이기 위해 자동 볼판정 시스템인 ABS를 도입하였다."
    }

];

let currentQuestionIndex = 0;
let score = 0;
let correctAnswers = 0;

// 프로그레스바 초기화
function initializeProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const initialPercentage = 0;
    progressBar.style.width = `${initialPercentage}%`;
    progressBar.setAttribute("aria-valuenow", initialPercentage);
    progressBar.textContent = `${Math.round(initialPercentage)}%`;
}

// 프로그레스바 업데이트
function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressBar.setAttribute("aria-valuenow", progressPercentage);
    progressBar.textContent = `${Math.round(progressPercentage)}%`;
}
// 문제 로드
function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');
    const wrongExplanationDiv = document.getElementById('wrexplanation');
    // const nextButton = document.getElementById('next-btn');

    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.innerHTML = `<label><input type='radio' name='answer' value='${option}'> ${option}</label>`;
        optionsElement.appendChild(li);
    });

       // ProgressBar 업데이트
       updateProgressBar();

    resultDiv.textContent = '';
    explanationDiv.style.display = 'none';
    explanationDiv.textContent = '';
    wrongExplanationDiv.style.display = 'none';
    wrongExplanationDiv.textContent = '';
    // nextButton.style.display = 'none';

}

//정답 체크
function checkAnswer() {
    const options = document.getElementsByName('answer');
    let selectedAnswer = '';

    for (const option of options) {
        if (option.checked) {
            selectedAnswer = option.value;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    const explanationDiv = document.getElementById('explanation');
    const wrongExplanationDiv = document.getElementById('wrexplanation');
    // const nextButton = document.getElementById('next-btn');

    if (selectedAnswer === questions[currentQuestionIndex].answer) {
        correctAnswers++; // 정답 수 계산
        score += 100 / questions.length; // 각 문제에 대해 점수부여
        resultDiv.textContent = '정답!';
        resultDiv.style.color = 'green';
        explanationDiv.textContent = questions[currentQuestionIndex].explanation;
        explanationDiv.style.display = 'block';
        setTimeout(loadNextQuestion, 1000);// 정답일 경우 1초 후 다음문제로 넘어감
        // nextButton.style.display = 'inline-block'; // 정답일 경우 다음문제로 넘어갈수 있는 버튼 현재는 자동으로 넘어가게 설정 함 필요시 버튼사용
    } else if (selectedAnswer) {
        resultDiv.textContent = '떙! 오답입니다!';
        resultDiv.style.color = 'red';
        wrongExplanationDiv.textContent = questions[currentQuestionIndex].wrongExplanation;
        wrongExplanationDiv.style.display = 'block'
        setTimeout(loadNextQuestion, 3000);// 오답일 경우 1초 후 다음문제로 넘어감
    } else {
        resultDiv.textContent = '정답을 선택해주세요!';
        resultDiv.style.color = 'orange';
    }

    //정답이 아니여도 버튼을 이용하여 다음문제로 넘어갈수있도록 함 
    // document.getElementById("next-btn").style.display = 'block';
    //오답일 경우 다음문제로 넘어갈수 있는 버튼 현재는 자동으로 넘어가게 설정 함 필요시 버튼사용

    
}

//다음문제로 넘어가기
function loadNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
       showFinalScore();
    }

    //최종점수표시
    function showFinalScore() {
        const scoreContainer = document.getElementById("score-container");
        scoreContainer.innerHTML = `<h2>퀴즈완료! 정답개수: ${correctAnswers} /${questions.length}
        </h2><h3>최종점수: ${score.toFixed(0)}점 / 100점</h3>`;
        document.getElementById("reset-btn").style.display = 'block';
    }
}
    function resetQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        correctAnswers = 0;
        loadQuestion();
        updateProgressBar();
        document.getElementById("score-container").innerHTML = '';
        //처음으로 돌아왔을때 스코어 빈 값을 줘서 안보이게 처리
        document.getElementById("reset-btn").style.display = 'none';
        //처음으로 돌아왔을때 리셋버튼 안보이게 처리
    }

initializeProgressBar();
loadQuestion();