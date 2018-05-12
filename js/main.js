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

    console.log(select1 + "szerokosc");
    var select2 = document.getElementById('dlugosc').value;

    var roznicaSzerokosc = (parseFloat(select1) - 2) * 2;
    console.log(roznicaSzerokosc + "szerokosc roznica");

    var dodajSzerokosc = roznicaSzerokosc * 250 + 950;

    var roznica = (parseFloat(select2) - 3) * 2;

    var dodajSzer = roznica * 150 + dodajSzerokosc;
    
    
    //transport value
    var transportSelect=parseFloat(document.getElementById('transport').value);
    
    console.log(transportSelect);
    


    cena1.innerHTML = "CENA" + " " + (dodajSzer+ transportSelect)  +"zł";
    
    document.getElementById("price-szer").innerHTML="szerokość" +" "+ select1+"m";
    
    document.getElementById("price-wys").innerHTML= "wysokość" +" "+ select2+"m";
    
if(transportSelect=="0"){
    document.getElementById('price-transport').innerHTML="TRANSPORT:malopolskie";
}else if(transportSelect=="50"){
     document.getElementById('price-transport').innerHTML= "TRANSPORT:śląskie"
}



}



document.getElementById('show-price-now').addEventListener('click', sprawdz);


