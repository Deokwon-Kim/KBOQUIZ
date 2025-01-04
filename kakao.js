//카카오톡 공유하기
function shareKakao() {
    //kakao sdk가 로드되었는지 확인
    if (window.Kakao) {
        Kakao.Link.sendDefault({
            objectType: 'text',
            text: `KBO리그 퀴즈점수: ${score.toFixed(0)}점 / 100점 도전해보세요!`,
            link: {
                mobileWebUrl: 'https://deokwon-kim.github.io/KBOQUIZ/',
                webUrl: 'https://deokwon-kim.github.io/KBOQUIZ/',
            }
        });
    } else {
        alert('카카오톡 공유하기를 사용할 수 없는 환경입니다.');
    }
}

document.getElementById('shareKt').addEventListener('click', shareKakao);