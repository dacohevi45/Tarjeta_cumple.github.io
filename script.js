/* =========================================================
   FELIZ CUMPLEAÑOS FREIMAN
   EXPERIENCIA INTERACTIVA
========================================================= */


const $ = (selector, root = document) =>
    root.querySelector(selector);


const $$ = (selector, root = document) =>
    [...root.querySelectorAll(selector)];


/* =========================================================
   ELEMENTOS
========================================================= */

const welcomeScreen =
    $("#welcomeScreen");

const countdownScreen =
    $("#countdownScreen");

const countdownNumber =
    $("#countdownNumber");

const startButton =
    $("#startButton");

const confettiLayer =
    $("#confettiLayer");

const toast =
    $("#toast");

const modal =
    $("#giftModal");

const giftBox =
    $("#giftBox");

const giftMessage =
    $("#giftMessage");

const giftTitle =
    $("#giftTitle");

const giftInstruction =
    $("#giftInstruction");

const soundBtn =
    $("#soundBtn");

const musicState =
    $("#musicState");

const musicCta =
    $("#musicCta");

const year =
    $("#year");

const freimanPhoto =
    $("#freimanPhoto");

const photoPlaceholder =
    $("#photoPlaceholder");

const videoContainer =
    $("#videoContainer");

const specialVideo =
    $("#specialVideo");

const showVideoBtn =
    $("#showVideoBtn");


year.textContent =
    new Date().getFullYear();


/* =========================================================
   PANTALLA INICIAL
========================================================= */

let celebrationStarted = false;


startButton.addEventListener(
    "click",
    startExperience
);


function startExperience() {

    if (celebrationStarted)
        return;

    celebrationStarted = true;

    welcomeScreen.classList.add("hide");

    setTimeout(() => {

        countdownScreen.classList.remove("hidden");

        runCountdown();

    }, 800);

}


/* =========================================================
   CUENTA REGRESIVA
========================================================= */

function runCountdown() {

    const numbers = [
        "3",
        "2",
        "1"
    ];

    let index = 0;


    countdownNumber.textContent =
        numbers[index];


    const timer =
        setInterval(() => {

            index++;


            if (index < numbers.length) {

                countdownNumber.textContent =
                    numbers[index];

                countdownNumber.style.animation =
                    "none";


                void countdownNumber.offsetWidth;


                countdownNumber.style.animation =
                    "countdownPop .9s ease";

            }

            else {

                clearInterval(timer);

                countdownNumber.textContent =
                    "🎉";


                setTimeout(() => {

                    countdownScreen.style.opacity =
                        "0";


                    setTimeout(() => {

                        countdownScreen.classList.add(
                            "hidden"
                        );


                        launchConfetti(180);

                        showToast(
                            "🎉 ¡Feliz cumpleaños, Freiman!"
                        );


                    }, 500);

                }, 900);

            }

        }, 1000);

}


/* =========================================================
   CONFETI
========================================================= */

function launchConfetti(amount = 120) {

    const emojis = [
        "🎉",
        "✨",
        "🎊",
        "💖",
        "⭐",
        "🎈"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti-piece";


        piece.style.left =
            `${Math.random() * 100}vw`;


        piece.style.setProperty(
            "--drift",
            `${(Math.random() - .5) * 60}vw`
        );


        piece.style.setProperty(
            "--rotate",
            `${(Math.random() - .5) * 1600}deg`
        );


        piece.style.setProperty(
            "--duration",
            `${2 + Math.random() * 3}s`
        );


        piece.style.background =
            `hsl(
                ${Math.random() * 360}
                100%
                ${55 + Math.random() * 20}%
            )`;


        if (Math.random() > .75) {

            piece.textContent =
                emojis[
                    Math.floor(
                        Math.random() *
                        emojis.length
                    )
                ];


            piece.style.background =
                "transparent";


            piece.style.fontSize =
                `${12 + Math.random() * 15}px`;

        }


        confettiLayer.appendChild(
            piece
        );


        setTimeout(
            () => piece.remove(),
            5500
        );

    }

}


/* =========================================================
   PARTICULAS
========================================================= */

function createParticles() {

    const container =
        $("#particles");


    for (
        let i = 0;
        i < 50;
        i++
    ) {

        const particle =
            document.createElement("i");


        particle.className =
            "particle";


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.top =
            `${Math.random() * 100}%`;


        particle.style.animation =
            `floatParticle
             ${3 + Math.random() * 6}s
             ease-in-out
             infinite
             alternate`;


        particle.style.animationDelay =
            `${Math.random() * 5}s`;


        container.appendChild(
            particle
        );

    }

}


createParticles();


/* =========================================================
   VELAS
========================================================= */

$$(".candle").forEach(
    candle => {

        candle.addEventListener(
            "click",
            () => {

                if (
                    candle.classList.contains(
                        "blown"
                    )
                ) {

                    return;

                }


                candle.classList.add(
                    "blown"
                );


                showToast(
                    "🕯️ ¡Vela apagada! Pide un deseo..."
                );


                launchConfetti(15);


                const remaining =
                    $$(".candle:not(.blown)").length;


                if (remaining === 0) {

                    setTimeout(
                        () => {

                            launchConfetti(150);


                            showToast(
                                "🎉 ¡Todas las velas! Que se cumpla tu deseo, Freiman."
                            );

                        },
                        300
                    );

                }

            }
        );

    }
);


/* =========================================================
   DESEOS
========================================================= */

$$(".wish").forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                showToast(
                    button.dataset.wish
                );


                launchConfetti(20);

            }
        );

    }
);


/* =========================================================
   SORPRESAS
========================================================= */

$$(".surprise-card").forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                showToast(
                    card.dataset.surprise
                );


                launchConfetti(30);

            }
        );

    }
);


/* =========================================================
   REGALO
========================================================= */

$("#giftBtn").addEventListener(
    "click",
    openGiftModal
);


function openGiftModal() {

    modal.classList.add(
        "open"
    );


    document.body.classList.add(
        "modal-open"
    );


    giftBox.classList.remove(
        "opened"
    );


    giftMessage.hidden =
        true;


    giftTitle.textContent =
        "Hay un regalo esperando...";


    giftInstruction.textContent =
        "Haz clic sobre la caja para abrirla 🎁";

}


function closeGiftModal() {

    modal.classList.remove(
        "open"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


$$("[data-close='true']")
.forEach(
    element => {

        element.addEventListener(
            "click",
            closeGiftModal
        );

    }
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            modal.classList.contains("open")
        ) {

            closeGiftModal();

        }

    }
);


/* =========================================================
   ABRIR REGALO
========================================================= */

giftBox.addEventListener(
    "click",
    openGift
);


giftBox.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            openGift();

        }

    }
);


function openGift() {

    if (
        giftBox.classList.contains(
            "opened"
        )
    ) {

        return;

    }


    giftBox.classList.add(
        "opened"
    );


    giftTitle.textContent =
        "¡Regalo desbloqueado!";


    giftInstruction.textContent =
        "Porque hoy el protagonista eres tú 💖";


    giftMessage.hidden =
        false;


    launchConfetti(250);


    setTimeout(
        () => launchConfetti(100),
        900
    );

}


/* =========================================================
   MÁS CONFETI
========================================================= */

$("#moreConfetti")
.addEventListener(
    "click",
    () => {

        launchConfetti(250);

    }
);


$("#bottomConfetti")
.addEventListener(
    "click",
    () => {

        launchConfetti(180);

    }
);


/* =========================================================
   FOTO
========================================================= */

freimanPhoto.addEventListener(
    "error",
    () => {

        freimanPhoto.style.display =
            "none";


        photoPlaceholder.style.display =
            "grid";

    }
);


freimanPhoto.addEventListener(
    "load",
    () => {

        photoPlaceholder.style.display =
            "none";

        freimanPhoto.style.display =
            "block";

    }
);


/* =========================================================
   VIDEO
========================================================= */

showVideoBtn.addEventListener(
    "click",
    () => {

        videoContainer.classList.toggle(
            "hidden"
        );


        if (
            !videoContainer.classList.contains(
                "hidden"
            )
        ) {

            videoContainer.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });


            specialVideo.play()
                .catch(() => {});


        }

    }
);


/* =========================================================
   MUSICA
========================================================= */

let audioContext = null;

let masterGain = null;

let musicPlaying = false;

let musicTimer = null;


const melody = [

    [261.63, .24],
    [329.63, .24],
    [392.00, .24],
    [523.25, .42],

    [392.00, .24],
    [329.63, .24],
    [293.66, .24],
    [392.00, .42],

    [349.23, .24],
    [440.00, .24],
    [523.25, .24],
    [587.33, .42],

    [523.25, .24],
    [440.00, .24],
    [392.00, .24],
    [523.25, .52]

];


function initAudio() {

    if (!audioContext) {

        audioContext =
            new (
                window.AudioContext ||
                window.webkitAudioContext
            )();


        masterGain =
            audioContext.createGain();


        masterGain.gain.value =
            .045;


        masterGain.connect(
            audioContext.destination
        );

    }


    if (
        audioContext.state ===
        "suspended"
    ) {

        audioContext.resume();

    }

}


function playNote(
    frequency,
    duration,
    start
) {

    const oscillator =
        audioContext.createOscillator();


    const gain =
        audioContext.createGain();


    oscillator.type =
        "sine";


    oscillator.frequency.value =
        frequency;


    gain.gain.setValueAtTime(
        .0001,
        start
    );


    gain.gain.exponentialRampToValueAtTime(
        .18,
        start + .025
    );


    gain.gain.exponentialRampToValueAtTime(
        .0001,
        start + duration
    );


    oscillator.connect(
        gain
    );


    gain.connect(
        masterGain
    );


    oscillator.start(
        start
    );


    oscillator.stop(
        start + duration + .04
    );

}


function scheduleMelody() {

    if (!musicPlaying)
        return;


    const now =
        audioContext.currentTime + .08;


    let time =
        now;


    melody.forEach(
        ([frequency, duration]) => {

            playNote(
                frequency,
                duration,
                time
            );


            time +=
                duration + .035;

        }
    );


    musicTimer =
        setTimeout(
            scheduleMelody,
            (time -
                audioContext.currentTime) *
                1000 -
                40
        );

}


function updateMusicUI() {

    soundBtn.textContent =
        musicPlaying
            ? "🔊"
            : "🔇";


    musicState.textContent =
        musicPlaying
            ? "ON"
            : "OFF";


    musicCta.textContent =
        musicPlaying
            ? "🔇 Desactivar"
            : "🎵 Activar";

}


function toggleMusic() {

    if (!musicPlaying) {

        initAudio();

        musicPlaying =
            true;


        scheduleMelody();


        showToast(
            "🎵 Música activada"
        );

    }

    else {

        musicPlaying =
            false;


        clearTimeout(
            musicTimer
        );


        if (masterGain) {

            masterGain.gain.setTargetAtTime(
                .0001,
                audioContext.currentTime,
                .04
            );

        }


        showToast(
            "🔇 Música desactivada"
        );

    }


    updateMusicUI();

}


soundBtn.addEventListener(
    "click",
    toggleMusic
);


$("#bottomMusic")
.addEventListener(
    "click",
    toggleMusic
);


musicCta.addEventListener(
    "click",
    toggleMusic
);


updateMusicUI();


/* =========================================================
   NAVEGACIÓN
========================================================= */

const sections =
    $$("main section[id]");


const navLinks =
    $$(".nav a");


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        navLinks.forEach(
                            link => {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${entry.target.id}`
                                );

                            }
                        );

                    }

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    section =>
        observer.observe(section)
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================================
   CONFETI AUTOMÁTICO AL CARGAR
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                launchConfetti(40);

            },
            1000
        );

    }
);