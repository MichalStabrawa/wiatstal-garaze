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
    var select2 = document.getElementById('dlugosc').value;

    var roznicaDlugosc = (parseFloat(select1) - 2) * 2;
    console.log(roznicaDlugosc + "dlugosci");

    var dodajDlugosc = roznicaDlugosc * 150 + 950;

    console.log("cena po dlugosci" + dodajDlugosc);
    var roznica = (parseFloat(select2) - 3) * 2;

    var dodajSzer = roznica * 250 + dodajDlugosc;


    cena1.innerHTML = dodajSzer+"zl";

}



document.getElementById('show-price-now').addEventListener('click', sprawdz);
