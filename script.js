'use strict';

// zmienne przechowujące klasy/ID elementów html
const glowneMenu = document.getElementsByClassName('menuGlowne');
const daneOsobiste = document.getElementsByClassName('daneOsobiste');
const profilZawodowy = document.getElementsByClassName('profilZawodowy');
const doswiadczenie = document.getElementsByClassName('doswiadczenie');
const profesionalnyProfil = document.getElementsByClassName('profesionalnyProfil');
const wyksztalcenie = document.getElementsByClassName('wyksztalcenie');
const Umiejetnosci = document.getElementsByClassName('umiejetnosci');

function changeMainWindow() {
    glowneMenu.classList.add('hidden');
    daneOsobiste.classList.add('hidden');
    profilZawodowy.classList.add('hidden');
    doswiadczenie.classList.add('hidden');
    profesionalnyProfil.classList.add('hidden');
    wyksztalcenie.classList.add('hidden');
    Umiejetnosci.classList.add('hidden');
}