language = localStorage.getItem('language')

document.addEventListener("onload", language_set());


function language_set(){
    if (language === "EN"){
        language_en()
    }
    else if (language === "IT"){
        language_it()
    }
    else if (language === "SI"){
        language_si()
    }
    else{
        language_en()
    }
}

function language_en(){
    document.getElementById("landrop").textContent="EN"
    localStorage.setItem('language', "EN");

    document.getElementById("me_card_text").textContent="I am Samuel Fischer, an italian developer with the passion of learning new things!"
    document.getElementById("prog_lan").textContent="Coding skils"
    document.getElementById("project_id").textContent="Projects"
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_type1"), function(t) {t.textContent = "en";});
    document.getElementById("contact").textContent="Contacts"
}

function language_it(){
    document.getElementById("landrop").textContent="IT"
    localStorage.setItem('language', "IT");

    document.getElementById("me_card_text").textContent="Sono Samuel Fischer, un developer italiano con la passione di imparare sempre nuove cose!"
    document.getElementById("prog_lan").textContent="Abilità di coding"
    document.getElementById("project_id").textContent="Progetti"
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_type1"), function(t) {t.textContent = "it";});
    document.getElementById("contact").textContent="Contatti"
}

function language_si(){
    document.getElementById("landrop").textContent="SI"
    localStorage.setItem('language', "SI");

    document.getElementById("me_card_text").textContent="si"
    document.getElementById("prog_lan").textContent="sposobnosti kodiranja"
    document.getElementById("project_id").textContent="Projekti"
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_type1"), function(t) {t.textContent = "si";});
    document.getElementById("contact").textContent="Kontakti"
}


function hover_en(){
    document.getElementById("en").style.color="black"
}

function hover_it(){
    document.getElementById("it").style.color="black"
}

function hover_si(){
    document.getElementById("si").style.color="black"
}

function out_en(){
    document.getElementById("en").style.color="white"
}

function out_it(){
    document.getElementById("it").style.color="white"
}

function out_si(){
    document.getElementById("si").style.color="white"
}