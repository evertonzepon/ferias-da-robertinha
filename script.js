// Array com frases motivacionais para cada dia (sem repetição até o início das férias)
const motivationalPhrases = [
    "Você é mais forte do que pensa! Cada dia é uma vitória! 💪",
    "O descanso está chegando! Mantenha a calma e a esperança! 🌟",
    "Seus méritos justificam esse tempo de lazer que se aproxima! ✨",
    "Dias melhores estão por vir! Respire fundo e siga em frente! 🌬️",
    "Você é capaz de vencer qualquer desafio! Férias te esperam! 🏆",
    "A vida é bela, e suas férias serão ainda mais! 🌈",
    "Cada momento cansativo fica para trás enquanto avança para o descanso! ⏳",
    "Você merece relaxar, descansar e se recarregar! 🔋",
    "Sua paciência é admirável! O repouso está tão próximo! 🙏",
    "Sonhe com suas férias e transforme isso em motivação! 🌙",
    "O final do caminho é o melhor lugar! Siga firme! 🚀",
    "Você está quase lá! Cada dia é um passo mais perto! 👣",
    "Suas férias serão memoráveis! Espere por elas! 📸",
    "O descanso merecia e você vai alcançar! 🎯",
    "Dias de tranquilidade estão prestes a chegar! 🕊️",
    "Você tem força para completar esta jornada! 🔥",
    "O sucesso é sua! E as férias também! 🏅",
    "Cada instante passado é um momento não perdido! ⌚",
    "Acredite em si mesma! Seu tempo chegará! 🌟",
    "Férias não são um luxo, são necessidade! Você merece! 🌺",
    "O cansaço é temporário, mas as memórias são eternas! 🦋",
    "Você está no caminho certo! Não desista agora! 🛤️",
    "Dias incríveis te aguardam! Seja paciente! 🎊",
    "Seu esforço será recompensado com descanso! 💝",
    "O melhor está por vir! Confie no processo! 🌸",
    "Cada amanhecer traz você mais perto das férias! 🌅",
    "Você é inspiradora! Continue assim! 👑",
    "O descanso será doce após o trabalho! 🍯",
    "Tudo passa! Logo estarão suas férias! 🚄",
    "A vida é uma jornada! Aproveite o caminho! 🎢",
    "Você conquistará este período como conquista tudo! 🎪",
    "Férias são promessas de felicidade! Espere! 🎁",
    "Seu bem-estar importa! Descanse em breve! 🧘",
    "Momentos especiais te esperam! Foco! 🎭",
    "Você merece ser feliz todos os dias! 😊",
    "Agora é tempo de trabalho, depois tempo de diversão! 🎨",
    "Sua resiliência é incrível! Vá até o fim! 💎",
    "Férias virão trazer alegria à sua vida! 🎶",
    "Cada dia é um presente! Aproveite a jornada! 🎀",
    "Você consegue! A meta está perto! 🏃",
    "Persistência é a chave do sucesso! Continue avançando! 🔑",
    "Seu corpo e mente merecem descanso! Falta pouco! 🧠",
    "A alegria virá em breve! Mantenha a fé! ✨",
    "Você é guerreira! Conquistará estas últimas semanas! ⚔️",
    "Repouso e diversão estão te esperando! 🎉",
    "Cada dia vencido é uma vitória pessoal! 🏆",
    "Você tem tudo para ser feliz nas férias! 🌟",
    "Trabalho duro é recompensado com descanso merecido! 💼",
    "Inspire-se no objetivo final: férias incríveis! 🎯",
    "Sua determinação te levará até lá! 💫",
    "O tempo passa mais rápido do que você imagina! ⏱️",
    "Felicidade está a poucos dias de distância! 😄",
    "Você superará este período com facilidade! 🚀",
    "Repouso é essencial para sua saúde! Aproveite! 🏥",
    "Sonhe acordada com suas férias lindas! 🌴",
    "Cada noite dormida te aproxima da diversão! 😴",
    "Você é corajosa e consegue tudo que quer! 💪",
    "Férias serão o melhor presente para você! 🎁",
    "Motivação é sua aliada! Use-a bem! 🎖️",
    "Você fará de suas férias momentos inesquecíveis! 📸",
    "O final da jornada é o melhor! Siga em frente! 🌈",
    "Qualidade de vida começa com o descanso! 🧘‍♀️",
    "Você é digna de paz e tranquilidade! ☮️",
    "Cada momento cansativo é uma vitória! 🎊",
    "Férias virão com tudo que você merece! 🌺",
    "Você é capaz de superar qualquer obstáculo! 🏔️",
    "Relaxamento total está quase aqui! 😌",
    "Seu tempo de brilhar se aproxima! ⭐",
    "Dias especiais te aguardam em breve! 🎆",
    "Você conquistará seus objetivos! Continue firme! 🎯",
    "Paciência é uma virtude! Logo você descansa! 🕯️",
    "Seu descanso será absolutamente merecido! 👸",
    "A vida é melhor quando você descansa! 🌸",
    "Você tem força para chegar lá! 🦾",
    "Férias virão trazer luz ao seu dia! 💡",
    "Cada sorriso seu aproxima as férias! 😊",
    "Você é vencedora! Isso é certo! 🥇",
    "Repouso total está chegando! Preparar-se é importante! 🎪",
    "Seus sonhos de férias se tornarão realidade! 🌙",
    "Você merece descanso, diversão e alegria! 🎉",
    "A melhor parte está por vir! Aguarde! 🎬",
    "Cada dia é um passo para a liberdade! 🦅",
    "Você é forte, bela e merece férias! 👸",
    "Férias serão seu oásis de paz! 🏜️",
    "Contar os dias é motivação pura! 📅",
    "Você alcançará suas férias com êxito! 🎊",
    "O melhor dia está chegando para você! ☀️",
    "Sua jornada rumo ao descanso é sagrada! 🕊️",
    "Paciência + determinação = sucesso! 🔢",
    "Você merece um descanso de rei/rainha! 👑",
    "Férias são o prêmio pelo seu trabalho! 🏅",
    "Cada segundo passado é um segundo conquistado! ⏳",
    "Você será feliz nas férias, com certeza! 🌟",
    "O descanso é sagrado! Você o merece! 🙏",
    "Dias inesquecíveis te esperam em breve! 🎆",
    "Você consegue! Acredite em si mesma! 💖",
    "Férias virão preencher seu coração de alegria! 💝",
    "A vida fica melhor após o descanso! 🌈",
    "Você é incrível! Férias serão incríveis também! 🌟",
    "Cada dia é uma chance de se renovar! 🌅",
    "Seu merecimento chegará em breve! ⭐",
    "Férias = felicidade garantida para você! 😊",
    "Você está quase no topo da montanha! 🏔️",
    "Descansa que o descanso vem vindo! 🏖️",
    "Você é a melhor versão de si mesma! 💎",
    "Férias trarão paz e rejuvenescimento! 🌊",
    "Cada dia é uma prova de sua coragem! 🦁",
    "Você merece tudo de bom que a vida oferece! 🌺",
    "O fim da jornada será glorioso! 🎊"
];

function calculateDaysUntilVacation() {
    // Data das férias: 29 de maio de 2026
    const vacationDate = new Date(2026, 4, 29); // Maio é mês 4 (0-indexed)
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Calcular a diferença em milissegundos
    const diffTime = vacationDate - today;
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return daysRemaining > 0 ? daysRemaining : 0;
}

function getMotivationalPhrase(daysRemaining) {
    // Total de dias de 09/02/2026 até 29/05/2026 (aproximadamente 109 dias)
    const startDate = new Date(2026, 1, 9);
    const vacationDate = new Date(2026, 4, 29);
    const totalDays = Math.ceil((vacationDate - startDate) / (1000 * 60 * 60 * 24));
    
    // Calcular qual índice da frase baseado na posição no countdown
    const daysElapsed = totalDays - daysRemaining;
    const index = Math.min(daysElapsed, motivationalPhrases.length - 1);
    
    return motivationalPhrases[index];
}

function getEmoji(daysRemaining) {
    const emojis = ['🎉', '🌟', '✨', '🎊', '🎈', '🏖️', '🌴', '⛱️', '🌊', '😎', '🥳', '🎁'];
    return emojis[daysRemaining % emojis.length];
}

function updateCounter() {
    const daysRemaining = calculateDaysUntilVacation();
    
    // Atualizar o número de dias
    const counterElement = document.getElementById('daysCounter');
    counterElement.textContent = daysRemaining;
    
    // Atualizar label
    const daysLabel = document.getElementById('daysLabel');
    if (daysRemaining === 0) {
        daysLabel.textContent = 'HOJE SÃO AS FÉRIAS!!! 🎉';
    } else if (daysRemaining === 1) {
        daysLabel.textContent = 'dia para férias na europa!';
    } else {
        daysLabel.textContent = 'dias para férias na europa!';
    }
    
    // Calcular tempo restante (horas totais, minutos, segundos)
    const vacationDate = new Date(2026, 4, 29, 0, 0, 0); // 29 de maio à meia-noite
    const now = new Date();
    const totalMilliseconds = vacationDate - now;
    
    if (totalMilliseconds <= 0) {
        // Férias começaram!
        document.getElementById('hoursCounter').textContent = '0000';
        document.getElementById('minutesCounter').textContent = '00';
        document.getElementById('secondsCounter').textContent = '00';
    } else {
        // Calcular horas totais (não apenas 0-23)
        const totalHours = Math.floor(totalMilliseconds / (1000 * 60 * 60));
        // Calcular minutos restantes após as horas
        const minutes = Math.floor((totalMilliseconds / (1000 * 60)) % 60);
        // Calcular segundos restantes após os minutos
        const seconds = Math.floor((totalMilliseconds / 1000) % 60);
        
        document.getElementById('hoursCounter').textContent = String(totalHours).padStart(4, '0');
        document.getElementById('minutesCounter').textContent = String(minutes).padStart(2, '0');
        document.getElementById('secondsCounter').textContent = String(seconds).padStart(2, '0');
    }
    
    // Atualizar frase motivacional
    const phrase = getMotivationalPhrase(daysRemaining);
    document.getElementById('motivationalText').textContent = phrase;
    
    // Atualizar emoji
    document.getElementById('emoji').textContent = getEmoji(daysRemaining);
    
    // Calcular semanas e dias restantes
    const weeks = Math.floor(daysRemaining / 7);
    const remainingDays = daysRemaining % 7;
    document.getElementById('weeks').textContent = weeks;
    document.getElementById('remainingDays').textContent = remainingDays;
    
    // Atualizar barra de progresso
    // Total de dias de 09/02/2026 até 29/05/2026
    const startDate = new Date(2026, 1, 9); // 9 de fevereiro
    const vacationDateForProgress = new Date(2026, 4, 29); // 29 de maio
    const totalDays = Math.ceil((vacationDateForProgress - startDate) / (1000 * 60 * 60 * 24));
    const daysElapsed = totalDays - daysRemaining;
    const progressPercentage = (daysElapsed / totalDays) * 100;
    
    const progressFill = document.getElementById('progressFill');
    progressFill.style.width = progressPercentage + '%';
    document.getElementById('progressText').textContent = 
        Math.round(progressPercentage) + '%';
}

// Atualizar ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    updateCounter();
    
    // Atualizar a cada 1 segundo para o relógio rodar
    setInterval(updateCounter, 1000);
});

