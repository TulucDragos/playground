jQuery(document).ready(function($) {
    // $() will work as an alias for jQuery() inside of this function


    $('#selectButton').click(function() {
        var p = "#48D123";
        var n = "#D6371D";
        var centru = "green";
        var sp = "Sector pozitiv";
        var sn = "Sector negativ";
        var selection = document.getElementById('selectDirection');
        var value = selection.options[selection.selectedIndex].value;
        var square1 = document.getElementById('square1');
        var square2 = document.getElementById('square2');
        var square3 = document.getElementById('square3');
        var square4 = document.getElementById('square4');
        var square5 = document.getElementById('square5');
        var square6 = document.getElementById('square6');
        var square7 = document.getElementById('square7');
        var square8 = document.getElementById('square8');
        var square9 = document.getElementById('square9');
        var text1 = document.getElementById('text1');
        var text2 = document.getElementById('text2');
        var text3 = document.getElementById('text3');
        var text4 = document.getElementById('text4');
        var text5 = document.getElementById('text5');
        var text6 = document.getElementById('text6');
        var text7 = document.getElementById('text7');
        var text8 = document.getElementById('text8');
        var text9 = document.getElementById('text9');

        if (value == 1) {
            text1.innerText = "Sector pozitiv";
            text2.innerText = "Sector pozitiv";
            text3.innerText = "Sector negativ";
            text4.innerText = "Sector pozitiv";
            text5.innerText = "CASA KAN";
            text6.innerText = "Sector negativ";
            text7.innerText = "Sector negativ";
            text8.innerText = "Sector pozitiv";
            text9.innerText = "Sector negativ";

            square1.style.background = p;
            square2.style.background = p;
            square3.style.background = n;
            square4.style.background = p;
            square5.style.background = centru;
            square6.style.background = n;
            square7.style.background = n;
            square8.style.background = p;
            square9.style.background = n;

        }
        if (value == 2) {
            text1.innerText = sn;
            text2.innerText = sn;
            text3.innerText = sp;
            text4.innerText = sn;
            text5.innerText = "CASA GEN";
            text6.innerText = sp;
            text7.innerText = sp;
            text8.innerText = sn;
            text9.innerText = sp;

            square1.style.background = n;
            square2.style.background = n;
            square3.style.background = p;
            square4.style.background = n;
            square5.style.background = centru;
            square6.style.background = p;
            square7.style.background = p;
            square8.style.background = n;
            square9.style.background = p
        }

        if (value == 3) {
            text1.innerText = sp;
            text2.innerText = sp;
            text3.innerText = sn;
            text4.innerText = sp;
            text5.innerText = "CASA ZHEN";
            text6.innerText = sn;
            text7.innerText = sn;
            text8.innerText = sp;
            text9.innerText = sn;

            square1.style.background = p;
            square2.style.background = p;
            square3.style.background = n;
            square4.style.background = p;
            square5.style.background = centru;
            square6.style.background = n;
            square7.style.background = n;
            square8.style.background = p;
            square9.style.background = n;
        }

        if (value == 4) {
            text1.innerText = sp;
            text2.innerText = sp;
            text3.innerText = sn;
            text4.innerText = sp;
            text5.innerText = "CASA XUN";
            text6.innerText = sn;
            text7.innerText = sn;
            text8.innerText = sp;
            text9.innerText = sn;

            square1.style.background = p;
            square2.style.background = p;
            square3.style.background = n;
            square4.style.background = p;
            square5.style.background = centru;
            square6.style.background = n;
            square7.style.background = n;
            square8.style.background = p;
            square9.style.background = n;
        }

        if (value == 5) {
            text1.innerText = sp;
            text2.innerText = sp;
            text3.innerText = sn;
            text4.innerText = sp;
            text5.innerText = "CASA LI";
            text6.innerText = sn;
            text7.innerText = sn;
            text8.innerText = sp;
            text9.innerText = sn;

            square1.style.background = p;
            square2.style.background = p;
            square3.style.background = n;
            square4.style.background = p;
            square5.style.background = centru;
            square6.style.background = n;
            square7.style.background = n;
            square8.style.background = p;
            square9.style.background = n;
        }

        if (value == 6) {
            text1.innerText = sn;
            text2.innerText = sn;
            text3.innerText = sp;
            text4.innerText = sn;
            text5.innerText = "CASA KUN";
            text6.innerText = sp;
            text7.innerText = sp;
            text8.innerText = sn;
            text9.innerText = sp;

            square1.style.background = n;
            square2.style.background = n;
            square3.style.background = p;
            square4.style.background = n;
            square5.style.background = centru;
            square6.style.background = p;
            square7.style.background = p;
            square8.style.background = n;
            square9.style.background = p
        }

        if (value == 7) {
            text1.innerText = sn;
            text2.innerText = sn;
            text3.innerText = sp;
            text4.innerText = sn;
            text5.innerText = "CASA DUI";
            text6.innerText = sp;
            text7.innerText = sp;
            text8.innerText = sn;
            text9.innerText = sp;

            square1.style.background = n;
            square2.style.background = n;
            square3.style.background = p;
            square4.style.background = n;
            square5.style.background = centru;
            square6.style.background = p;
            square7.style.background = p;
            square8.style.background = n;
            square9.style.background = p
        }

        if (value == 8) {
            text1.innerText = sn;
            text2.innerText = sn;
            text3.innerText = sp;
            text4.innerText = sn;
            text5.innerText = "CASA QIAN";
            text6.innerText = sp;
            text7.innerText = sp;
            text8.innerText = sn;
            text9.innerText = sp;

            square1.style.background = n;
            square2.style.background = n;
            square3.style.background = p;
            square4.style.background = n;
            square5.style.background = centru;
            square6.style.background = p;
            square7.style.background = p;
            square8.style.background = n;
            square9.style.background = p
        }

        if (value == 0) {
            text1.innerText = '';
            text2.innerText = '';
            text3.innerText = '';
            text4.innerText = '';
            text5.innerText = '';
            text6.innerText = '';
            text7.innerText = '';
            text8.innerText = '';
            text9.innerText = '';

            square1.style.background = "white";
            square2.style.background = "white";
            square3.style.background = "white";
            square4.style.background = "white";
            square5.style.background = "white";
            square6.style.background = "white";
            square7.style.background = "white";
            square8.style.background = "white";
            square9.style.background = "white";
        }

    });
});