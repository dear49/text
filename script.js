document.addEventListener('mousemove', function(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    document.querySelectorAll('span').forEach(function(span) {
        const rect = span.getBoundingClientRect();
        const spanX = rect.left + rect.width / 2;
        const spanY = rect.top + rect.height / 2;

        const distance = Math.sqrt((spanX - mouseX) ** 2 + (spanY - mouseY) ** 2);


        
        // 부드러운 크기 변화를 위한 트랜지션 설정
        span.style.transition = 'transform 0.3s, font-weight 0.3s';

        if (distance < 75) {
            // 애니메이션 활성화 상태를 유지
            span.style.animationPlayState = 'running';
            span.style.fontWeight = 'bold'; // 텍스트를 볼드로 설정
            span.style.transform = 'scale(1)'; // 원래 크기로 설정
            span.setAttribute('data-active', 'true'); // 활성화 상태를 표시
        } else {
            if (!span.hasAttribute('data-active')) { // 'data-active' 속성이 없는 경우에만 애니메이션을 중지
                span.style.animationPlayState = 'paused';
                span.style.fontWeight = 'normal'; // 텍스트 볼드 해제
                span.style.transform = 'scale(0.8)'; // 텍스트를 점점 작게
            }
        }
    });
});