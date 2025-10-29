'use strict';

// zmienne przechowujące klasy/ID elementów html
const glowneMenu = document.getElementById('menuGlowne');
const profil = document.getElementById('profil');
const doswiadczenie = document.getElementById('doswiadczenie');
const wyksztalcenie = document.getElementById('wyksztalcenie');
const umiejetnosci = document.getElementById('umiejetnosci');

function changeDisplayedWindow(showElementID) {
    glowneMenu.classList.remove('hidden');
    glowneMenu.classList.add('hidden');

    profil.classList.remove('hidden');
    profil.classList.add('hidden');

    doswiadczenie.classList.remove('hidden');
    doswiadczenie.classList.add('hidden');

    wyksztalcenie.classList.remove('hidden');
    wyksztalcenie.classList.add('hidden');

    umiejetnosci.classList.remove('hidden');
    umiejetnosci.classList.add('hidden');

    showElementID.classList.remove('hidden');
}