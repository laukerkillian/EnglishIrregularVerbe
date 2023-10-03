/*
Name : Kerlau Killian
Date : 24/2/2022
Contact : kerlau.killian@outlook.fr
-------------------------------------
Verbe irrégulier :
Forme:
    Array: liste de tous les verbes irréguliers
        Array: liste de la traduction et collones du tableau des verbes irréguliers
            "traduction", "base verbale", "prétérit", "Participe passé"
*/
let modalRate = new bootstrap.Modal(document.getElementById('modalRate'));
let irregular_verbs = [
    ["se conformer à/respecter", "abide", "abode", "abode"],
    ["survenir", "arise", "arose", "arisen"],
    ["se réveiller", "awake", "awoke", "awoken"],
    ["porter/supporter/naitre", "bear", "bore", "borne/born"],
    ["être", "be", "was/were", "been"],
    ["battre", "beat", "beat", "beaten"],
    ["devenir", "become", "became", "become"],
    ["engendrer", "beget", "begat/begot", "begotten"],
    ["commencer", "begin", "began", "begun"],
    ["plier/se courber", "bend", "bent", "bent"],
    ["parier", "bet", "bet", "bet"],
    ["ordonner-commander", "bid", "bid/bade", "bidden"],
    ["mordre", "bite", "bit", "bitten"],
    ["saigner", "bleed", "bled", "bled"],
    ["souffler/gonfler", "blow", "blew", "blown"],
    ["casser", "break", "broke", "broken"],
    ["apporter", "bring", "brought", "brought"],
    ["diffuser/émettre", "broadcast", "broadcast", "broadcast"],
    ["construire", "build", "built", "built"],
    ["brûler", "burn", "burnt/burned", "burnt/burned"], // 1er page
    ["éclater", "burst", "burst", "burst"],
    ["acheter", "buy", "bought", "bought"],
    ["pouvoir", "can", "could", "could"],
    ["jeter/distribuer", "cast", "cast", "cast"],
    ["attraper", "catch", "caught", "caught"],
    ["gronde", "chide", "chid/chode", "chid/chidden"],
    ["choisir", "chose", "chose", "chosen"],
    ["s'accrocher", "cling", "clung", "clung"],
    ["habiller/recouvrir", "clothe", "clad/clothed", "clad/clothed"],
    ["venir", "come", "came", "come"],
    ["couter", "cost", "cost", "cost"],
    ["ramper", "creep", "crept", "crept"],
    ["couper", "cut", "cut", "cut"],
    ["distribuer", "deal", "dealt", "dealt"],
    ["creuser", "dig", "dug", "dug"],
    ["plonger", "dive", "dived", "dived/dove"],
    ["faire", "do", "did", "done"],
    ["dessiner/tirer", "draw", "drew", "drawn"],
    ["rever", "dream", "dreamt/dreamed", "dreamt/dreamed"],
    ["boire", "drink", "drunk", "drunk"],
    ["conduire", "drive", "drove", "driven"],
    ["habiter", "dwell", "dwelt", "dwelt/dwelled"],
    ["manger", "eat", "ate", "eaten"],
    ["tomber", "fall", "fell", "fallen"],
    ["nourrir", "feed", "fed", "fed"],
    ["se sentir/ressentir", "feel", "felt", "felt"], // page 2
    ["se battre", "fight", "fought", "fought"],
    ["trouver", "find", "found", "found"],
    ["s'enfuir", "flee", "fled", "fled"],
    ["lancer", "fling", "flung", "flung"],
    ["voler", "fly", "flew", "flown"],
    ["interdit", "forbid", "forbade", "forbidden"],
    ["prévoir", "forecast", "forecast", "forecast"],
    ["prévoir/présentier", "foresee", "foresaw", "foreseen"],
    ["oublier", "forget", "forgot", "forgotten/forgot"],
    ["pardonner", "forgive", "forgave", "forgiven"],
    ["abandonner", "forsake", "forsook", "forsaken"],
    ["geler", "freeze", "froze", "frozen"],
    ["obtenir", "get", "got", "gotten/got"],
    ["donner", "give", "gave", "given"],
    ["aller", "go", "went", "gone"],
    ["moudre/opprimer", "grind", "ground", "ground"],
    ["grandir/pousser", "grow", "grew", "grown"],
    ["tenir/pendre", "hang", "hung", "hung"],
    ["avoir", "have/has", "had", "had"],
    ["entendre", "head", "heard", "heard"],
    ["cacher", "hide", "hid", "hidden"],
    ["taper/appuyer", "hit", "hit", "hit"],
    ["tenir", "hold", "held", "held"],
    ["blesser", "hurt", "hurt", "hurt"],
    ["s'agenouiller", "kneel", "knelt/knelled", "knelt/knelled"], // page 3
    ["connaître/savoir", "know", "knew", "known"],
    ["poser", "lay", "laid", "laid"],
    ["mener/guider", "lead", "led", "led"],
    ["s'incliner/se pencher", "lean", "leant/leaned", "leant/leaned"],
    ["sauter/bondir", "leap", "leapt/leaped", "leapt/leaped"],
    ["apprendre", "learn", "learnt", "learnt"],
    ["laisser/quitter/partir", "leave", "left", "left"],
    ["prêter", "lend", "lent", "lent"],
    ["permettre/louer", "let", "let", "let"],
    ["s'allonger/mentir", "lie", "lay", "lain"],
    ["allumer", "light", "lit/lighted", "lit/lighted"],
    ["perdre", "lose", "lost", "lost"],
    ["fabriquer", "make", "made", "made"],
    ["signifier", "mean", "meant", "meant"],
    ["rencontrer", "meet", "met", "met"],
    ["tondre", "mow", "mowed", "mowed/mown"],
    ["compenser", "offset", "offset", "offset"],
    ["garder", "keep", "kept", "kept"],
    ["surmonter", "overcome", "overcome", "overcome"],
    ["prendre part à", "partake", "partook", "partaken"],
    ["payer", "pay", "paid", "paid"],
    ["supplier/plaider", "plead", "pled/pleaded", "pled/pleaded"],
    ["programmer", "preset", "preset", "preset"],
    ["prouver", "prove", "proved", "proven/proved"],
    ["mettre", "put", "put", "put"],
    ["quitter", "quit", "quit", "quit"],
    ["lire", "read", "read", "read"], // page 4
    ["relayer", "relay", "relaid", "relaid"],
    ["déchirer", "rend", "rent", "rent"],
    ["débarrasser", "rid", "rid", "rid"],
    ["sonner/téléphoner", "rise", "rose", "risen"],
    ["courir", "run", "ran", "run"],
    ["scier", "saw", "saw/sawed", "sawn/sawed"],
    ["dire", "say", "said", "said"],
    ["voir", "see", "saw", "seen"],
    ["chercher", "seek", "sought", "sought"],
    ["vendre", "sell", "sold", "sold"],
    ["envoyer", "send", "sent", "sent"],
    ["fixer", "set", "set", "set"],
    ["secouer", "shake", "shook", "shaken"],
    ["répandre/laisser tomber", "shed", "shed", "shed"],
    ["briller", "shine", "shone", "shone"],
    ["chausser", "shoe", "shod", "shod"],
    ["tirer/fusiller", "shoot", "shot", "shot"],
    ["montrer", "show", "showed", "shown"],
    ["fermer", "shut", "shut", "shut"],
    ["chanter", "sing", "sang", "sung"],
    ["couler", "sink", "sank/sunk", "sunk/sunken"],
    ["s'asseoir", "sit", "sat", "sat"],
    ["tuer", "slay", "slew", "slain"],
    ["dormir", "sleep", "slept", "slept"],
    ["glisser", "slide", "slid", "slid"], // page 5
    ["fendre", "slit", "slit", "slit"],
    ["sentir", "smell", "smelt", "smelt"],
    ["semer", "sow", "sowed", "sown/sowed"],
    ["parler", "speak", "spoke", "spoken"],
    ["aller vite", "speed", "sped", "sped"],
    ["épeler/orthographier", "spell", "spelt", "spelt"],
    ["dépenser/passer du temps", "spend", "spent", "spent"],
    ["renverser", "spill", "spilt/spilled", "spilt/spilled"],
    ["tourner/faire tourner", "spin", "spun", "spun"],
    ["cracher", "spit", "spat/spit", "spat/spit"],
    ["couper/fendre", "split", "split", "split"],
    ["gâcher/gâter", "spoil", "spoilt", "spoilt"],
    ["répandre", "spread", "spread", "spread"],
    ["surgir/jaillir/bondir", "spring", "sprang", "sprung"],
    ["être debout", "stand", "stood", "stood"],
    ["voler/dérober", "steal", "stole", "stolen"],
    ["coller", "stick", "stuck", "stuck"],
    ["piquer", "sting", "stung", "stung"],
    ["puer", "stink", "stank", "stunk"],
    ["éparpiller", "strew", "strewed", "strewn/strewed"],
    ["frapper", "strike", "struck", "stricken/struck"],
    ["s'efforcer", "strive", "strove", "striven"],
    ["jurer", "swear", "swore", "sworn"],
    ["suer", "sweat", "sweat/sweated", "sweat/sweated"],
    ["balayer", "sweep", "swept", "swept"],
    ["gonfler/enfler", "swell", "swelled/sweated", "swollen"], // page 6
    ["nager", "swim", "swam", "swum"],
    ["se balancer", "swing", "swung", "swung"],
    ["tuer", "slay", "slew", "slain"],
    ["prendre", "take", "took", "taken"],
    ["enseigner", "teach", "taught", "taught"],
    ["déchirer", "tear", "tore", "torn"],
    ["tuer", "slay", "slew", "slain"],
    ["dire/raconter", "tell", "told", "told"],
    ["penser", "think", "tought", "tought"],
    ["prospérer", "thrive", "throve/thrived", "thriven/thrived"],
    ["jeter", "throw", "threw", "thrown"],
    ["enfoncer", "thrust", "thrust", "thrust"],
    ["composer", "typeset", "typeset", "typeset"],
    ["enfoncer", "thrust", "thrust", "thrust"],
    ["subir", "undergo", "underwent", "undergone"],
    ["comprendre", "understand", "understood", "understood"],
    ["réveiller", "wake", "woke", "woken"],
    ["pleurer", "weep", "wept", "wept"],
    ["mouiller", "wet", "wet/wetted", "wet/wetted"],
    ["gagner", "win", "won", "won"],
    ["enrouler/remonter", "wind", "wound", "wound"],
    ["se retirer", "withdraw", "withdrew", "withdrawn"],
    ["tordre", "wring", "wrung", "wrung"],
    ["écrire", "write", "wrote", "written"], // page 7
]

let score = 0;
let checked_anwser = 0;

window.addEventListener("load", (e) => {
    irregular_verbs.forEach(verbs => {
        let el = `
        <tr>
            <td class="fw-bold">${verbs[0]}</td>
            <td>${verbs[1]}</td>
            <td>${verbs[2]}</td>
            <td>${verbs[3]}</td>
        </tr>
        `;
        document.getElementById("verbs_tbody").insertAdjacentHTML("beforeend", el);
    })
})

window.addEventListener("beforeunload", (e) => {
    modalRate.show();

    e.preventDefault();
    return event.returnValue = "Please rate my app before leaving !";
})

let rate_actived = false;

document.getElementById("rating_area").addEventListener("mouseenter", () => {
    rate_actived = true;
})

document.getElementById("rating_area").addEventListener("mousemove", (e) => {
    if(rate_actived) {
        if(e.target.tagName === "I") {
            let val = e.target.getAttribute("data-rating");
            Array.from(document.getElementById("rating_area").children).forEach( (child, index) => {
                child.classList.remove("fas");
                child.classList.remove("far");
                if(index < val) {
                    child.classList.add("fas");
                }else {
                    child.classList.add("far");
                }
            })
        }
    }
})

document.getElementById("rating_area").addEventListener("click", (e) => {
    rate_actived = false;
})

document.getElementById("rating_area").addEventListener("mouseleave", (e) => {
    rate_actived = false;
})

document.getElementById("verbs_search").addEventListener("keyup", e => {
    filter_verbs()
})

function filter_verbs() {
    let filter = document.getElementById("verbs_search").value.trim().toUpperCase();
    let trs = document.getElementById("verbs_tbody").querySelectorAll("tr");
    trs.forEach(tr => {
        tr.classList.remove("d-none");
        tds = tr.querySelectorAll("td");
        let findSmthInSearch = false;
        
        tds.forEach(td => {
            txtValue = td.textContent || td.innerText;
            if (txtValue.trim().toUpperCase().indexOf(filter) > -1) {
                findSmthInSearch = true;
            }
        })
        if(!findSmthInSearch) {
            tr.classList.add("d-none");
        }
    })
}

function toggle_verbs() {
    if(document.getElementById("verbs").classList.contains("d-none")) {
        show_verbs()
    }else{
        hide_verbs();
    }
}

function hide_buttons_game() {
    document.getElementById("game_buttons").classList.add("d-none");
}

function show_button_game() {
    document.getElementById("game_buttons").classList.remove("d-none");
}

function show_verbs() {
    document.getElementById("verbs_search").value = "";
    filter_verbs();
    document.getElementById("verbs").classList.remove("d-none");
    hide_buttons_game();
}

function hide_verbs() {
    document.getElementById("verbs").classList.add("d-none");
    show_button_game();
}

function thanks_for_rating() {
    modalRate.hide();

    let modalThanks = new bootstrap.Modal(document.getElementById('thanks_for_rating'));
    modalThanks.show();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function check_anwser() {
    let parent =  window.event.target.parentNode.parentNode;
    let random_number = parent.getAttribute("random-nb");
    let index = parent.getAttribute("check-id");

    let anwsers = [];
    let inputs = [];
    for(let i = 0; i < 4; i++) {
        if(i !== random_number) {
            let child = parent.querySelector(`input[anwser-id="${i}"]`);
            inputs[i] = child;
            if(child !== null) {
                child.setAttribute("disabled", true);
                if(child.value !== null) {
                    anwsers[i] = child.value.trim();
                }else{
                    anwsers[i] = "";
                }
            }
        }else{
            anwsers[i] = undefined;
        }
    }

    let responses = irregular_verbs[index];

    anwsers.forEach( (anwser, index) => {
        let reponse = responses[index].split("/");
        let anwser_splited = anwser.split("/");
        let nb_correct = 0;

        reponse.forEach( rep => {
            if(anwser_splited.includes(rep.trim())){
                nb_correct++;
            }
        })

        if(nb_correct == reponse.length) {
            inputs[index].classList.add("is-valid")
            score += 1;
        }else if(nb_correct > 0) {
            inputs[index].classList.add("is-medium")
            score += 0.5;
        }else{
            inputs[index].classList.add("is-invalid")
            score += 0;
        }

        checked_anwser++;
    })
}  

function show_train_all_verbs() {
    score = 0;
    checked_anwser = 0;
    hide_buttons_game();

    irregular_verbs.forEach( (verbs, index) => {
        let random = getRandomInt(4);
        let el = `
        <tr check-id="${index}" random-nb="${random}">
            <td class="fw-bold">${ random == 0 ? verbs[0] : `<input type="text" class="anwser w-100" anwser-id="0"></input>`}</td>
            <td>${ random == 1 ? verbs[1] : `<input type="text" class="anwser w-100" anwser-id="1"></input>`}</td>
            <td>${ random == 2 ? verbs[2] : `<input type="text" class="anwser w-100" anwser-id="2"></input>`}</td>
            <td>${ random == 3 ? verbs[3] : `<input type="text" class="anwser w-100" anwser-id="3"></input>`}</td>
            <td><button class="btn btn-success" onclick="check_anwser()">Check !</button></td>
        </tr>
        `;
        document.getElementById("verbs_train_all_verbs_tbody").insertAdjacentHTML("beforeend", el);
    })

    document.getElementById("train_verbs_all_verbs").classList.remove("d-none");
}

function hide_train_all_verbs() {
    show_buttons_game();
    document.getElementById("train_verbs_all_verbs").classList.add("d-none");
}