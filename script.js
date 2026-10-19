// AUDIO
const selectMusic = document.getElementById("selectMusic");
const chooseFighterSound = document.getElementById("chooseFighterSound");
const fightStartSound = document.getElementById("fightStartSound");


const characterSounds = {

    deadpool: document.getElementById("deadpoolSound"),
    goku: document.getElementById("gokuSound"),
    "macho-man": document.getElementById("machoManSound"),
    "kool-aid-man": document.getElementById("koolAidManSound"),
    "metal-sonic": document.getElementById("metalSonicSound"),
    po: document.getElementById("poSound")

};
const winSounds = {

    deadpool: document.getElementById("deadpoolWinSound"),
    goku: document.getElementById("gokuWinSound"),
    "macho-man": document.getElementById("machoManWinSound"),
    "kool-aid-man": document.getElementById("koolAidManWinSound"),
    "metal-sonic": document.getElementById("metalSonicWinSound"),
    po: document.getElementById("poWinSound")

};

function playSound(sound) {

    sound.currentTime = 0;
    sound.play();
}

let audioStarted = false;

document.addEventListener("click", function() {

    if (audioStarted === false) {

        audioStarted = true;

        selectMusic.volume = 0.4;

        selectMusic.play();

        playSound(chooseFighterSound);

    }

}, { once: true });

const fighters = {

    deadpool: {
        name: "Deadpool",
        power: 78,
        speed: 82,
        technique: 84,
        accuracy: 76,
        critical: 82,
        defense: 72,
        endurance: 95,
        durability: 94,
        agility: 85,
        stamina: 90,
        reflex: 87,
        composure: 88,
        determination: 98,
        battleIQ: 86,
        experience: 95
    },

    goku: {
        name: "Goku",
        power: 100,
        speed: 99,
        technique: 100,
        accuracy: 94,
        critical: 96,
        defense: 98,
        endurance: 98,
        durability: 100,
        agility: 99,
        stamina: 97,
        reflex: 100,
        composure: 93,
        determination: 96,
        battleIQ: 100,
        experience: 99
    },

    "macho-man": {
        name: "Macho Man Randy Savage",
        power: 88,
        speed: 72,
        technique: 82,
        accuracy: 78,
        critical: 92,
        defense: 76,
        endurance: 86,
        durability: 85,
        agility: 68,
        stamina: 82,
        reflex: 70,
        composure: 95,
        determination: 97,
        battleIQ: 80,
        experience: 94
    },

    "kool-aid-man": {
        name: "Kool-Aid Man",
        power: 91,
        speed: 52,
        technique: 48,
        accuracy: 55,
        critical: 70,
        defense: 96,
        endurance: 99,
        durability: 100,
        agility: 40,
        stamina: 95,
        reflex: 45,
        composure: 85,
        determination: 92,
        battleIQ: 50,
        experience: 60
    },

    "metal-sonic": {
        name: "Metal Sonic",
        power: 97,
        speed: 100,
        technique: 94,
        accuracy: 91,
        critical: 95,
        defense: 93,
        endurance: 90,
        durability: 94,
        agility: 100,
        stamina: 92,
        reflex: 100,
        composure: 88,
        determination: 89,
        battleIQ: 96,
        experience: 90
    },

    po: {
        name: "Po",
        power: 86,
        speed: 74,
        technique: 96,
        accuracy: 85,
        critical: 88,
        defense: 90,
        endurance: 94,
        durability: 97,
        agility: 78,
        stamina: 93,
        reflex: 80,
        composure: 91,
        determination: 99,
        battleIQ: 92,
        experience: 88
    }

};


const fighterSelect = document.getElementById("fighter");
const opponentSelect = document.getElementById("opponent");

const fighterImage = document.getElementById("fighterImage");
const opponentImage = document.getElementById("opponentImage");


// YOUR FIGHTER
fighterSelect.addEventListener("change", function() {

    const selectedFighter = fighterSelect.value;
if (selectedFighter !== "") {
    playSound(characterSounds[selectedFighter]);
}

    if (selectedFighter === "") {
        fighterImage.src = "images/question-mark.jpg";
    }

    else if (selectedFighter === "deadpool") {
        fighterImage.src = "images/deadpool.jpg";
    }

    else if (selectedFighter === "goku") {
        fighterImage.src = "images/goku.jpg";
    }

    else if (selectedFighter === "macho-man") {
        fighterImage.src = "images/macho-man.jpg";
    }

    else if (selectedFighter === "kool-aid-man") {
        fighterImage.src = "images/kool-aid-man.jpg";
    }

    else if (selectedFighter === "metal-sonic") {
        fighterImage.src = "images/metal-sonic.jpg";
    }

    else if (selectedFighter === "po") {
        fighterImage.src = "images/po.jpg";
    }

});


// OPPONENT
opponentSelect.addEventListener("change", function() {

    const selectedOpponent = opponentSelect.value;
if (selectedOpponent !== "") {
        playSound(characterSounds[selectedOpponent]);
    }

    if (selectedOpponent === "") {
        opponentImage.src = "images/question-mark.jpg";
    }

    else if (selectedOpponent === "deadpool") {
        opponentImage.src = "images/deadpool.jpg";
    }

    else if (selectedOpponent === "goku") {
        opponentImage.src = "images/goku.jpg";
    }

    else if (selectedOpponent === "macho-man") {
        opponentImage.src = "images/macho-man.jpg";
    }

    else if (selectedOpponent === "kool-aid-man") {
        opponentImage.src = "images/kool-aid-man.jpg";
    }

    else if (selectedOpponent === "metal-sonic") {
        opponentImage.src = "images/metal-sonic.jpg";
    }

    else if (selectedOpponent === "po") {
        opponentImage.src = "images/po.jpg";
    }

});


// START FIGHT BUTTON
const startFight = document.getElementById("startFight");
const winner = document.getElementById("winner");
const stats = document.getElementById("stats");

startFight.addEventListener("click", function() {

    const selectedFighter = fighterSelect.value;
    const selectedOpponent = opponentSelect.value;

    if (selectedFighter === "" || selectedOpponent === "") {

        winner.textContent = "Please choose both fighters first!";

        stats.innerHTML = "";

        return;
    }

// PLAY "FIGHT START!"
    playSound(fightStartSound);

    const fighterData = fighters[selectedFighter];
    const opponentData = fighters[selectedOpponent];

    let fighterHP = 100;
    let opponentHP = 100;
let fighterStamina = 100;
let opponentStamina = 100;
let fighterSecondWind = false;
let opponentSecondWind = false;

    winner.textContent =
        fighterData.name + " VS " + opponentData.name;


    stats.innerHTML = `

        <div class="stat-card">

            <h3>${fighterData.name}</h3>

            <div class="hp-bar">
                <div class="hp-fill" id="fighterHP"></div>
            </div>

            <p id="fighterHPText">100 / 100 HP</p>

            <p>Power: ${fighterData.power}</p>
            <p>Speed: ${fighterData.speed}</p>
            <p>Technique: ${fighterData.technique}</p>
            <p>Accuracy: ${fighterData.accuracy}</p>
            <p>Critical: ${fighterData.critical}</p>
            <p>Defense: ${fighterData.defense}</p>
            <p>Endurance: ${fighterData.endurance}</p>
            <p>Durability: ${fighterData.durability}</p>
            <p>Agility: ${fighterData.agility}</p>
            <p>Stamina: ${fighterData.stamina}</p>
            <p>Reflex: ${fighterData.reflex}</p>
            <p>Composure: ${fighterData.composure}</p>
            <p>Determination: ${fighterData.determination}</p>
            <p>Battle IQ: ${fighterData.battleIQ}</p>
            <p>Experience: ${fighterData.experience}</p>

        </div>


        <div class="stat-card">

            <h3>${opponentData.name}</h3>

            <div class="hp-bar">
                <div class="hp-fill" id="opponentHP"></div>
            </div>

            <p id="opponentHPText">100 / 100 HP</p>

            <p>Power: ${opponentData.power}</p>
            <p>Speed: ${opponentData.speed}</p>
            <p>Technique: ${opponentData.technique}</p>
            <p>Accuracy: ${opponentData.accuracy}</p>
            <p>Critical: ${opponentData.critical}</p>
            <p>Defense: ${opponentData.defense}</p>
            <p>Endurance: ${opponentData.endurance}</p>
            <p>Durability: ${opponentData.durability}</p>
            <p>Agility: ${opponentData.agility}</p>
            <p>Stamina: ${opponentData.stamina}</p>
            <p>Reflex: ${opponentData.reflex}</p>
            <p>Composure: ${opponentData.composure}</p>
            <p>Determination: ${opponentData.determination}</p>
            <p>Battle IQ: ${opponentData.battleIQ}</p>
            <p>Experience: ${opponentData.experience}</p>

        </div>

    `;


    // Get the HP bars
    const fighterHPBar = document.getElementById("fighterHP");
    const opponentHPBar = document.getElementById("opponentHP");

    const fighterHPText = document.getElementById("fighterHPText");
    const opponentHPText = document.getElementById("opponentHPText");


    // Fight loop
const fightInterval = setInterval(function() {

// Stamina decreases every round
let fighterStaminaLoss =
    4 - (fighterData.endurance / 100);

let opponentStaminaLoss =
    4 - (opponentData.endurance / 100);


fighterStamina -= fighterStaminaLoss;
opponentStamina -= opponentStaminaLoss;


// Prevent stamina from going below 0
if (fighterStamina < 0) {
    fighterStamina = 0;
}

if (opponentStamina < 0) {
    opponentStamina = 0;
}

    // Decide who attacks first
    let fighterFirst = fighterData.speed >= opponentData.speed;


    // Fighter attacks first
    if (fighterFirst) {

        let fighterAttackRoll = Math.random() * 100;

        let fighterComposureBonus = 0;

if (fighterHP <= 50) {

    fighterComposureBonus =
        (fighterData.composure - 50) * 0.2;

}


let fighterHitChance =
    fighterData.accuracy +
    (fighterData.battleIQ * 0.15) +
    (fighterData.experience * 0.05) +
    (fighterData.technique * 0.1) +
    fighterComposureBonus -
    (opponentData.agility * 0.3) -
    (opponentData.reflex * 0.2);


        if (fighterAttackRoll <= fighterHitChance) {

            let fighterDamage =
    Math.floor(fighterData.power / 10);

let fighterStaminaEffect =
    0.7 + (fighterStamina / 100) * 0.3;

fighterDamage =
    Math.floor(fighterDamage * fighterStaminaEffect);
let fighterTechniqueEffect =
    0.85 + (fighterData.technique / 100) * 0.3;

fighterDamage =
    Math.floor(fighterDamage * fighterTechniqueEffect);

            fighterDamage =
                Math.floor(
                    fighterDamage *
                    (1 - opponentData.defense / 200)
                );

            fighterDamage =
                Math.floor(
                    fighterDamage *
                    (1 - opponentData.durability / 300)
                );


            let fighterCriticalRoll = Math.random() * 100;

            if (fighterCriticalRoll <= fighterData.critical) {

                fighterDamage =
                    Math.floor(fighterDamage * 1.5);

                winner.textContent =
                    fighterData.name +
                    " lands a CRITICAL HIT!";

            }


            opponentHP -= fighterDamage;

        }


        // Opponent attacks second
        if (opponentHP > 0) {

            let opponentAttackRoll = Math.random() * 100;

            let opponentComposureBonus = 0;

if (opponentHP <= 50) {

    opponentComposureBonus =
        (opponentData.composure - 50) * 0.2;

}


let opponentHitChance =
    opponentData.accuracy +
    (opponentData.battleIQ * 0.15) +
    (opponentData.experience * 0.05) +
    (opponentData.technique * 0.1) +
    opponentComposureBonus -
    (fighterData.agility * 0.3) -
    (fighterData.reflex * 0.2);


            if (opponentAttackRoll <= opponentHitChance) {

                let opponentDamage =
    Math.floor(opponentData.power / 10);

let opponentStaminaEffect =
    0.7 + (opponentStamina / 100) * 0.3;

opponentDamage =
    Math.floor(opponentDamage * opponentStaminaEffect);
let opponentTechniqueEffect =
    0.85 + (opponentData.technique / 100) * 0.3;

opponentDamage =
    Math.floor(opponentDamage * opponentTechniqueEffect);

                opponentDamage =
                    Math.floor(
                        opponentDamage *
                        (1 - fighterData.defense / 200)
                    );

                opponentDamage =
                    Math.floor(
                        opponentDamage *
                        (1 - fighterData.durability / 300)
                    );


                let opponentCriticalRoll = Math.random() * 100;

                if (opponentCriticalRoll <= opponentData.critical) {

                    opponentDamage =
                        Math.floor(opponentDamage * 1.5);

                    winner.textContent =
                        opponentData.name +
                        " lands a CRITICAL HIT!";

                }


                fighterHP -= opponentDamage;
		if (fighterHP <= 0) {

    let determinationRoll = Math.random() * 100;

    if (
    determinationRoll <= fighterData.determination * 0.25 &&
    fighterSecondWind === false
) {

    fighterHP = 1;

    fighterSecondWind = true;

    winner.textContent =
        fighterData.name +
        " refuses to go down!";

}

}

            }

        }

    }


    // Opponent attacks first
    else {

        let opponentAttackRoll = Math.random() * 100;

        let opponentHitChance =
            opponentData.accuracy -
            (fighterData.agility * 0.3) -
            (fighterData.reflex * 0.2);


        if (opponentAttackRoll <= opponentHitChance) {

            let opponentDamage =
                Math.floor(opponentData.power / 10);

            opponentDamage =
                Math.floor(
                    opponentDamage *
                    (1 - fighterData.defense / 200)
                );

            opponentDamage =
                Math.floor(
                    opponentDamage *
                    (1 - fighterData.durability / 300)
                );


            let opponentCriticalRoll = Math.random() * 100;

            if (opponentCriticalRoll <= opponentData.critical) {

                opponentDamage =
                    Math.floor(opponentDamage * 1.5);

                winner.textContent =
                    opponentData.name +
                    " lands a CRITICAL HIT!";

            }


            fighterHP -= opponentDamage;
		if (fighterHP <= 0) {

    let determinationRoll = Math.random() * 100;

    if (determinationRoll <= fighterData.determination * 0.25) {

        fighterHP = 1;

        winner.textContent =
            fighterData.name +
            " refuses to go down!";

    }

}

        }


        // Fighter attacks second
        if (fighterHP > 0) {

            let fighterAttackRoll = Math.random() * 100;

            let fighterHitChance =
                fighterData.accuracy -
                (opponentData.agility * 0.3) -
                (opponentData.reflex * 0.2);


            if (fighterAttackRoll <= fighterHitChance) {

                let fighterDamage =
                    Math.floor(fighterData.power / 10);

                fighterDamage =
                    Math.floor(
                        fighterDamage *
                        (1 - opponentData.defense / 200)
                    );

                fighterDamage =
                    Math.floor(
                        fighterDamage *
                        (1 - opponentData.durability / 300)
                    );


                let fighterCriticalRoll = Math.random() * 100;

                if (fighterCriticalRoll <= fighterData.critical) {

                    fighterDamage =
                        Math.floor(fighterDamage * 1.5);

                    winner.textContent =
                        fighterData.name +
                        " lands a CRITICAL HIT!";

                }


                opponentHP -= fighterDamage;
		if (opponentHP <= 0) {

    let determinationRoll = Math.random() * 100;

    if (
    determinationRoll <= opponentData.determination * 0.25 &&
    opponentSecondWind === false
) {

    opponentHP = 1;

    opponentSecondWind = true;

    winner.textContent =
        opponentData.name +
        " refuses to go down!";

}

}

            }

        }

    }


        // Prevent HP from going below 0
        if (fighterHP < 0) {
            fighterHP = 0;
        }

        if (opponentHP < 0) {
            opponentHP = 0;
        }


        // Update HP bars
        fighterHPBar.style.width = fighterHP + "%";
        opponentHPBar.style.width = opponentHP + "%";


        // Update HP text
        fighterHPText.textContent =
            fighterHP + " / 100 HP";

        opponentHPText.textContent =
            opponentHP + " / 100 HP";


        // Check winner
        if (fighterHP <= 0 || opponentHP <= 0) {

            clearInterval(fightInterval);


            if (fighterHP <= 0 && opponentHP <= 0) {

    winner.textContent = "DOUBLE KNOCKOUT!";

}

else if (fighterHP <= 0) {

    winner.textContent =
        opponentData.name + " WINS!";

    playSound(winSounds[selectedOpponent]);

}

else {

    winner.textContent =
        fighterData.name + " WINS!";

    playSound(winSounds[selectedFighter]);

}

        }

    }, 1000);

});