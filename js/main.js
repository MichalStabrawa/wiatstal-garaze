$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.menu-navbar').toggle();
    })

    $("#test").click(function () {
        $("#figure-spad-tyl").show();
    })


})

/*calculator garage function*/
var cena1 = document.getElementById("test2");

function sprawdz() {


    var select1 = document.getElementById('szerokosc').value;
    
    console.log(select1 +"szerokosc");
    var select2 = document.getElementById('dlugosc').value;

    var roznicaSzerokosc = (parseFloat(select1) - 2) * 2;
    console.log(roznicaSzerokosc + "szerokosc roznica");

    var dodajSzerokosc = roznicaSzerokosc * 250 + 950;
    
    console.log("Dodaj szerokosc" + dodajSzerokosc)

   // console.log("cena po dlugosci" + dodajDlugosc);
    var roznica = (parseFloat(select2) - 3) * 2;

    var dodajSzer = roznica * 150 + dodajSzerokosc;


    cena1.innerHTML ="CENA" +" "+ dodajSzer+"zl";

}



document.getElementById('show-price-now').addEventListener('click', sprawdz);
