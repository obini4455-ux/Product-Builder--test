const questions = [
    { id: 1, text: '나는 혼자보다 여러 사람과 함께 있을 때 에너지를 얻는다.', dimension: 'EI', direction: 'E' },
    { id: 2, text: '나는 주말에 친구들을 만나서 시간을 보내는 것이 좋다.', dimension: 'EI', direction: 'E' },
    { id: 3, text: '나는 새로운 사람을 만나는 일이 즐겁다.', dimension: 'EI', direction: 'E' },
    { id: 4, text: '나는 깊은 대화보다 가벼운 잡담이 더 편하다.', dimension: 'EI', direction: 'E' },
    { id: 5, text: '혼자 있는 시간이 많아지면 금방 지루함을 느낀다.', dimension: 'EI', direction: 'E' },
    { id: 6, text: '나는 상상력보다는 현실적인 사실에 더 관심이 간다.', dimension: 'SN', direction: 'S' },
    { id: 7, text: '나는 세부적인 것에 주의를 기울이는 편이다.', dimension: 'SN', direction: 'S' },
    { id: 8, text: '나는 미래의 가능성보다 현재의 현실에 더 집중한다.', dimension: 'SN', direction: 'S' },
    { id: 9, text: '나는 상징이나 은유보다는 명확한 사실을 선호한다.', dimension: 'SN', direction: 'S' },
    { id: 10, text: '나는 오감을 통한 경험을 더 중요하게 생각한다.', dimension: 'SN', direction: 'S' },
    { id: 11, text: '나는 결정을 내릴 때 논리와 이성을 우선시한다.', dimension: 'TF', direction: 'T' },
    { id: 12, text: '나는 공정함보다는 조화와 관계를 중요시한다.', dimension: 'TF', direction: 'F' },
    { id: 13, text: '나는 다른 사람의 감정을 잘 고려하는 편이다.', dimension: 'TF', direction: 'F' },
    { id: 14, text: '나는 문제를 분석할 때 객관적인 사실을 중요시한다.', dimension: 'TF', direction: 'T' },
    { id: 15, text: '나는 논쟁에서 상대방의 감정을 상하게 하지 않으려고 노력한다.', dimension: 'TF', direction: 'F' },
    { id: 16, text: '나는 계획을 세우고 그대로 따르는 것을 좋아한다.', dimension: 'JP', direction: 'J' },
    { id: 17, text: '나는 즉흥적인 상황에 잘 적응하는 편이다.', dimension: 'JP', direction: 'P' },
    { id: 18, text: '나는 물건을 제자리에 정리정돈하는 것을 좋아한다.', dimension: 'JP', direction: 'J' },
    { id: 19, text: '나는 일정표에 따라 생활하는 것이 편하다.', dimension: 'JP', direction: 'J' },
    { id: 20, text: '나는 결정을 내릴 때 여러 선택지를 열어두고 싶어한다.', dimension: 'JP', direction: 'P' },
];

const typeInfo = {
    'ISTJ': { title: '신뢰할 수 있는 현실주의자', desc: '꼼꼼하고 책임감 강하며 전통을 중요하게 여깁니다.', emoji: '📋', color: '#4a90d9', aromaOil: '라벤더 + 시더우드. 클래식하고 안정적입니다. 시간이 지나도 변하지 않는 향입니다.', perfume: 'Jo Malone — Lime Basil & Mandarin. 깔끔하고 클래식합니다. 오랫동안 사랑받는 이유가 있습니다.' },
    'ISFJ': { title: '따뜻한 수호자', desc: '헌신적이고 배려 깊으며 조화를 중요시합니다.', emoji: '🛡️', color: '#50b8a0', aromaOil: '로만 캐모마일 + 바닐라. 달콤하고 포근합니다. 곁에 있으면 편안한 사람의 향기입니다.', perfume: 'Jo Malone — Peony & Blush Suede. 부드러운 모란꽃과 스웨이드가 만나는 향입니다. 따뜻하고 우아합니다.' },
    'INFJ': { title: '희귀한 옹호자', desc: '깊고 신비로우며 직관적입니다.', emoji: '🔮', color: '#9b59b6', aromaOil: '샌달우드 + 스모키 바닐라. 느리게 타오르는 깊은 향입니다. 조용하지만 존재감 있습니다.', perfume: 'Diptyque — Tam Dao. 샌달우드 중심의 따뜻하고 깊은 향입니다. 처음엔 낯설지만 알면 알수록 좋아집니다.' },
    'INTJ': { title: '전략가', desc: '독립적이고 분석적이며 목표 지향적입니다.', emoji: '🧠', color: '#2c3e50', aromaOil: '베르가못 + 버티버 + 시더. 화려하지 않지만 강인합니다. 가까이 다가섰을 때 비로소 압도됩니다.', perfume: 'Le Labo — Santal 33. 샌달우드와 아이리스의 건조하고 중성적인 향입니다. 뉴욕의 지성적인 공간에서 자주 맡을 수 있는 향입니다.' },
    'ISTP': { title: '만능 재주꾼', desc: '실용적이고 독립적이며 논리적입니다.', emoji: '🔧', color: '#e67e22', aromaOil: '유칼립투스 + 페퍼민트. 군더더기 없이 선명하고 맑습니다.', perfume: 'Aesop — Hwyl. 침엽수와 스모키 우드의 조용하고 깊은 향입니다. 존재감을 드러내지 않지만 분명히 기억됩니다.' },
    'ISFP': { title: '호기심 많은 예술가', desc: '감각적이고 유연하며 현재를 즐깁니다.', emoji: '🎨', color: '#e74c3c', aromaOil: '로즈 + 파출리. 플로럴하지만 달콤하지 않고 개성 있습니다.', perfume: 'Diptyque — L\'Ombre dans l\'Eau. 장미 잎과 블랙커런트의 싱그럽고 독특한 향입니다. 예술적이고 자연스럽습니다.' },
    'INFP': { title: '열정적인 중재자', desc: '시적이고 감수성 풍부하며 이상을 꿈꿉니다.', emoji: '🌸', color: '#c0392b', aromaOil: '라벤더 + 네롤리 + 로즈. 시를 쓰는 새벽 같은 향입니다. 감성적이고 로맨틱합니다.', perfume: 'Frederic Malle — En Passant. 비 온 뒤 열린 창문으로 들어오는 라일락 향기입니다. 그리운 감정을 불러옵니다.' },
    'INTP': { title: '논리적인 사색가', desc: '분석적이고 창의적이며 독창적입니다.', emoji: '💡', color: '#2980b9', aromaOil: '카다몸 + 그린티 + 샌달우드. 생각하게 만드는 향입니다. 처음엔 낯설지만 시간이 지날수록 깊어집니다.', perfume: 'Escentric Molecules — Molecule 01. 이소 이 수퍼 단 하나의 성분으로 만든 향수입니다. 피부마다 다르게 발향됩니다. 분석하기 좋아하는 분들이 매혹되는 향입니다.' },
    'ESTP': { title: '모험을 즐기는 사업가', desc: '대담하고 현실적이며 활동적입니다.', emoji: '🚀', color: '#f39c12', aromaOil: '블랙 페퍼 + 시트러스. 강렬하고 에너지 넘칩니다. 처음 만나는 순간 기억에 남습니다.', perfume: 'Byredo — Gypsy Water. 베르가못과 솔잎, 샌달우드의 유랑하는 듯한 향입니다. 활동적이고 자유롭습니다.' },
    'ESFP': { title: '자유로운 연예인', desc: '즉흥적이고 열정적이며 사교적입니다.', emoji: '🎉', color: '#e84393', aromaOil: '만다린 + 자스민 + 화이트 머스크. 밝고 달콤하며 사랑스럽습니다.', perfume: 'Jo Malone — Wood Sage & Sea Salt. 바다 소금과 세이지의 청량하고 자유로운 향입니다. 어디서나 환영받는 향입니다.' },
    'ENFP': { title: '재기발랄한 활동가', desc: '창의적이고 열정적이며 사람을 좋아합니다.', emoji: '🌈', color: '#fd79a8', aromaOil: '베르가못 + 그레이프프루트 + 자스민 + 바닐라. 에너지 넘치고 감성적입니다.', perfume: 'Maison Margiela Replica — Flower Market. 봄 꽃시장의 싱그럽고 밝은 향입니다. 보는 사람을 웃게 만드는 향입니다.' },
    'ENTP': { title: '논쟁을 즐기는 변론가', desc: '독창적이고 기발하며 도전을 즐깁니다.', emoji: '⚡', color: '#6c5ce7', aromaOil: '베르가못 + 라벤더 + 블랙페퍼 + 버티버. 처음엔 가볍다가 시간이 지날수록 복잡해집니다.', perfume: 'Vilhelm Parfumerie — Basilico & Fellini. 바질과 레몬 버베나의 예상을 벗어나는 향입니다. 처음 맡는 사람이 반드시 묻게 되는 향입니다.' },
    'ESTJ': { title: '엄격한 경영자', desc: '체계적이고 책임감 강하며 리더십이 있습니다.', emoji: '📊', color: '#00b894', aromaOil: '로즈마리 + 시더우드 + 앰버. 정돈되고 격식 있습니다.', perfume: 'Hermès — Terre d\'Hermès. 흙과 나무, 자몽의 균형 잡힌 향입니다. 흐트러짐이 없고 신뢰감을 줍니다.' },
    'ESFJ': { title: '사교적인 외교관', desc: '친절하고 배려 깊으며 조화를 중요시합니다.', emoji: '🤝', color: '#00cec9', aromaOil: '피오니 + 화이트 머스크. 밝고 따뜻하며 누구에게나 편안합니다.', perfume: 'Chloé — Nomade Naturelle. 미모사와 샌달우드의 부드럽고 자연스러운 향입니다. 어디서나 잘 어울립니다.' },
    'ENFJ': { title: '정의로운 사회운동가', desc: '카리스마 있고 공감 능력이 높으며 사람을 이끕니다.', emoji: '🌟', color: '#0984e3', aromaOil: '로즈 오토 + 프랑킨센스 + 샌달우드. 깊고 따뜻하며 신뢰감을 줍니다.', perfume: 'Byredo — Bal d\'Afrique. 베르가못과 아프리카 마리골드, 머스크의 따뜻하고 포용력 있는 향입니다.' },
    'ENTJ': { title: '대담한 통솔자', desc: '결단력 있고 자신감 넘치며 목표를 향해 달립니다.', emoji: '👑', color: '#d63031', aromaOil: '우드 앰버 + 블랙페퍼 + 로즈. 방에 들어서는 순간 존재감이 느껴집니다.', perfume: 'Maison Francis Kurkdjian — Baccarat Rouge 540. 자스민과 사프란, 앰버그리스의 강렬하고 관능적인 향입니다. 기억에 남는 존재감을 원하는 분에게 맞습니다.' },
};

let currentQuestion = 0;
let scores = { EI: 0, SN: 0, TF: 0, JP: 0 };

const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const shareBtn = document.getElementById('share-btn');
const questionText = document.getElementById('question-text');
const questionNumber = document.getElementById('question-number');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const options = document.getElementById('options');
const questionCard = document.getElementById('question-card');

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initQuiz() {
    currentQuestion = 0;
    scores = { EI: 0, SN: 0, TF: 0, JP: 0 };
    shuffleArray(questions);
    showQuestion();
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function showQuestion() {
    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQuestion];
    questionNumber.textContent = `Q${currentQuestion + 1}.`;
    questionText.textContent = q.text;
    progressBar.style.width = `${((currentQuestion) / questions.length) * 100}%`;
    progressText.textContent = `${currentQuestion + 1} / ${questions.length}`;

    options.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    questionCard.classList.remove('active');
    void questionCard.offsetWidth;
    questionCard.classList.add('active');
}

function selectOption(value) {
    const q = questions[currentQuestion];
    const optionBtns = options.querySelectorAll('.option-btn');

    optionBtns.forEach(btn => {
        btn.classList.remove('selected');
        if (parseInt(btn.dataset.value) === value) {
            btn.classList.add('selected');
        }
    });

    setTimeout(() => {
        const score = parseInt(value);
        if (q.direction === 'E' || q.direction === 'S' || q.direction === 'T' || q.direction === 'J') {
            scores[q.dimension] += score;
        } else {
            scores[q.dimension] -= score;
        }
        currentQuestion++;
        showQuestion();
    }, 250);
}

function calculateType() {
    const ei = scores.EI >= 0 ? 'E' : 'I';
    const sn = scores.SN >= 0 ? 'S' : 'N';
    const tf = scores.TF >= 0 ? 'T' : 'F';
    const jp = scores.JP >= 0 ? 'J' : 'P';
    return { type: ei + sn + tf + jp, scores };
}

function showResult() {
    const { type, scores } = calculateType();
    const info = typeInfo[type];

    showScreen('result-screen');

    const badge = document.getElementById('result-badge');
    badge.textContent = type;
    badge.style.background = `linear-gradient(135deg, ${info.color}, ${info.color}88)`;

    document.getElementById('result-title').textContent = info.emoji + ' ' + info.title;
    document.getElementById('result-subtitle').textContent = type + '형';

    const desc = document.getElementById('result-description');
    desc.textContent = info.desc;

    document.getElementById('result-aroma').innerHTML =
        `<strong>🌿 아로마오일 추천</strong><br><span style="color:#f0f0f5">${info.aromaOil}</span>`;
    document.getElementById('result-perfume').innerHTML =
        `<strong>🧴 시중 향수 추천</strong><br><span style="color:#f0f0f5">${info.perfume}</span>`;

    const totalEI = Math.max(Math.abs(scores.EI), 1);
    const totalSN = Math.max(Math.abs(scores.SN), 1);
    const totalTF = Math.max(Math.abs(scores.TF), 1);
    const totalJP = Math.max(Math.abs(scores.JP), 1);

    const eiPercent = scores.EI >= 0
        ? { left: Math.round((totalEI / (totalEI + 1)) * 100), right: Math.round((1 / (totalEI + 1)) * 100) }
        : { left: Math.round((1 / (totalEI + 1)) * 100), right: Math.round((totalEI / (totalEI + 1)) * 100) };

    const snPercent = scores.SN >= 0
        ? { left: Math.round((totalSN / (totalSN + 1)) * 100), right: Math.round((1 / (totalSN + 1)) * 100) }
        : { left: Math.round((1 / (totalSN + 1)) * 100), right: Math.round((totalSN / (totalSN + 1)) * 100) };

    const tfPercent = scores.TF >= 0
        ? { left: Math.round((totalTF / (totalTF + 1)) * 100), right: Math.round((1 / (totalTF + 1)) * 100) }
        : { left: Math.round((1 / (totalTF + 1)) * 100), right: Math.round((totalTF / (totalTF + 1)) * 100) };

    const jpPercent = scores.JP >= 0
        ? { left: Math.round((totalJP / (totalJP + 1)) * 100), right: Math.round((1 / (totalJP + 1)) * 100) }
        : { left: Math.round((1 / (totalJP + 1)) * 100), right: Math.round((totalJP / (totalJP + 1)) * 100) };

    document.getElementById('bar-e').style.width = eiPercent.left + '%';
    document.getElementById('percent-ei').textContent = `${eiPercent.left}% / ${eiPercent.right}%`;

    document.getElementById('bar-s').style.width = snPercent.left + '%';
    document.getElementById('percent-sn').textContent = `${snPercent.left}% / ${snPercent.right}%`;

    document.getElementById('bar-t').style.width = tfPercent.left + '%';
    document.getElementById('percent-tf').textContent = `${tfPercent.left}% / ${tfPercent.right}%`;

    document.getElementById('bar-j').style.width = jpPercent.left + '%';
    document.getElementById('percent-jp').textContent = `${jpPercent.left}% / ${jpPercent.right}%`;
}

startBtn.addEventListener('click', () => {
    showScreen('quiz-screen');
    initQuiz();
});

restartBtn.addEventListener('click', () => {
    showScreen('home-screen');
});

options.addEventListener('click', (e) => {
    const btn = e.target.closest('.option-btn');
    if (btn) {
        selectOption(parseInt(btn.dataset.value));
    }
});

shareBtn.addEventListener('click', () => {
    const { type } = calculateType();
    const info = typeInfo[type];
    const text = `🧠 나의 MBTI 유형은 ${type} (${info.title})입니다!\n\n${info.desc}\n🌿 추천 아로마오일: ${info.aromaOil}\n🧴 추천 향수: ${info.perfume}\n\n지금 나도 테스트해보세요!`;
    if (navigator.share) {
        navigator.share({ title: 'MBTI 성격유형 테스트', text });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            shareBtn.textContent = '✅ 복사 완료!';
            setTimeout(() => { shareBtn.textContent = '결과 공유하기'; }, 2000);
        });
    }
});
