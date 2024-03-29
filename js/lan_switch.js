language = localStorage.getItem('language')

document.addEventListener("onload", language_set());


function language_set() {
    if (language === "EN") {
        language_en()
    }
    else if (language === "IT") {
        language_it()
    }
    else if (language === "SI") {
        language_si()
    }
    else {
        language_en()
    }
}

function language_en() {
    document.getElementById("landrop").textContent = "EN"
    localStorage.setItem('language', "EN");
    language = "EN"

    document.getElementById("nav-home").textContent = "Home"
    document.getElementById("nav-about").textContent = "About Me"
    document.getElementById("nav-pictures").textContent = "Pictures"
    document.getElementById("nav-skils").textContent = "Skils"
    document.getElementById("nav-projects").textContent = "Projects"
    document.getElementById("nav-contacts").textContent = "Contacts"

    document.getElementById("me_card_text").textContent = "I am Samuel Fischer, an italian developer with the passion of learning new things!"
    document.getElementById("AboutMe").textContent = "About Me"
    document.getElementById("AboutMe_text").textContent = "I am a coder from triest that loves web development and taking pictures, in my free tim i play minecraft with my friends on my private server."
    document.getElementById("pictures_id").textContent = "Pictures"
    document.getElementById("prog_lan").textContent = "Coding skils"
    document.getElementById("project_id").textContent = "Projects"
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_try"), function (t) { t.textContent = "View the site!"; });
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_repo"), function (t) { t.textContent = "Repo on GitHub"; });
    document.getElementById("contact").textContent = "Contact me on:"
    document.getElementById("form_text").textContent = "Or fill this form:"

    document.getElementById("c1_des").textContent = "The OpenSource project of this website!"
    document.getElementById("c2_des").textContent = "The project of how i installed mac os 10.13 high sierra on my Lenovo Thinkpad T420."
    document.getElementById("c3_des").textContent = "The project of my 8th grade exam in slovenian."
    document.getElementById("c4_des").textContent = "Croxsplit44 my custom mechanical keyboard with qmk, via and alps switches."
    document.getElementById("c5_des").textContent = "Squorari is a simpla web page made with html and javascript using node.js that enables me, too se the temporary school class calendar for every day in a practical way."
}

function language_it() {
    document.getElementById("landrop").textContent = "IT"
    localStorage.setItem('language', "IT");
    language = "IT"

    document.getElementById("nav-home").textContent = "Casa"
    document.getElementById("nav-about").textContent = "Di me"
    document.getElementById("nav-pictures").textContent = "Foto"
    document.getElementById("nav-skils").textContent = "Abilità"
    document.getElementById("nav-projects").textContent = "Progetti"
    document.getElementById("nav-contacts").textContent = "Contatti"

    document.getElementById("me_card_text").textContent = "Sono Samuel Fischer, un developer italiano con la passione di imparare sempre nuove cose!"
    document.getElementById("AboutMe").textContent = "Qualcosa di me"
    document.getElementById("AboutMe_text").textContent = "Sono un programmatore di trieste con la passione per il web development e la fotografia, nel tempo libero adoro fare siti web e giocare a minecraft sul mio server privato dove gioco con dei miei amici."
    document.getElementById("pictures_id").textContent = "Fotografie"
    document.getElementById("prog_lan").textContent = "Abilità di coding"
    document.getElementById("project_id").textContent = "Progetti"
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_try"), function (t) { t.textContent = "Visita il sito!"; });
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_repo"), function (t) { t.textContent = "Repo su GitHub"; });
    document.getElementById("contact").textContent = "Contatami qui:"
    document.getElementById("form_text").textContent = "O riempi questo:"

    document.getElementById("c1_des").textContent = "Il progetto open source di questo sito!"
    document.getElementById("c2_des").textContent = "Il progetto di come ho installato mac os 10.13 high sierra sul mio Lenovo Thinkpad T420."
    document.getElementById("c3_des").textContent = "Il progetto della mia tesina di terza media sull' internet in lingua slovena."
    document.getElementById("c4_des").textContent = "Croxsplit44 la mia tastiera mechanica OpenSource con qmk, via e tasti alps."
    document.getElementById("c5_des").textContent = "Squorari e una semplice web app che pesca in automatico gli ultimi orari della mia scuola."
}

function language_si() {
    document.getElementById("landrop").textContent = "SI"
    localStorage.setItem('language', "SI");
    language = "SI"

    document.getElementById("nav-home").textContent = "Dom"
    document.getElementById("nav-about").textContent = "O meni"
    document.getElementById("nav-pictures").textContent = "Fotografije"
    document.getElementById("nav-skils").textContent = "Sposobnosti"
    document.getElementById("nav-projects").textContent = "Projekti"
    document.getElementById("nav-contacts").textContent = "Kontakti"

    document.getElementById("me_card_text").textContent = "Jaz sem Samuel Fischer, italjansk coder z voljo se vedno učiti nekaj novega!"
    document.getElementById("AboutMe").textContent = "Nekaj o meni"
    document.getElementById("AboutMe_text").textContent = "Jaz sem en coder iz trsta, ki ljubi izdelati spletne strani in fotografirati, v prostem času pa igram minecraft na moj server z mojmi prijatelji."
    document.getElementById("pictures_id").textContent = "Fotografije"
    document.getElementById("prog_lan").textContent = "sposobnosti kodiranja"
    document.getElementById("project_id").textContent = "Projekti"
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_try"), function (t) { t.textContent = "Oglej si stran!"; });
    Array.prototype.map.call(document.querySelectorAll(".lang_card_but_repo"), function (t) { t.textContent = "Repo na GitHub"; });
    document.getElementById("contact").textContent = "Pišimi tukaj"
    document.getElementById("form_text").textContent = "Ali izpolni to:"

    document.getElementById("c1_des").textContent = "Project OpenSource od te spletne strani!"
    document.getElementById("c2_des").textContent = "Projekt o kako sem installiral mac os 10.13 high sierra na moj Lenovo Thinkpad T420."
    document.getElementById("c3_des").textContent = "Projekt od moje končne raziskave 3 srednje o spletu v slovenščini."
    document.getElementById("c4_des").textContent = "Croxsplit44 je moja mehanska timkovnica z qmk, via in alps tipke."
    document.getElementById("c5_des").textContent = "Squorari je ena spletna applikacja za ogledanje urnikov moje šole."
}


function hover_en() {
    document.getElementById("en").style.color = "black"
}

function hover_it() {
    document.getElementById("it").style.color = "black"
}

function hover_si() {
    document.getElementById("si").style.color = "black"
}

function out_en() {
    document.getElementById("en").style.color = "white"
}

function out_it() {
    document.getElementById("it").style.color = "white"
}

function out_si() {
    document.getElementById("si").style.color = "white"
}