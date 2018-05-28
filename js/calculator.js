    var cena1 = document.getElementById("test2");

    function sprawdz() {


        var select1 = document.getElementById('szerokosc').value;

        console.log(select1 + "szerokosc");
        var select2 = document.getElementById('dlugosc').value;

        var roznicaSzerokosc = (parseFloat(select1) - 2) * 2;


        var dodajSzerokosc = roznicaSzerokosc * 75 + 950;

        var roznica = (parseFloat(select2) - 3) * 2;

        var dodajSzer = roznica * 75 + dodajSzerokosc;


        //transport value
        var transportSelect = parseFloat(document.getElementById('transport').value);

        var garageHeight = parseFloat(document.getElementById("podwyzszenie").value);

        if ( /*select1 > "2" & select1 < "3" & */ garageHeight != "0") {
            garageHeight += 10;
        }

        //door variables

        var doorValue = parseFloat(document.getElementById('door').value);
        //window variables
        windowValue = parseFloat(document.getElementById('window-price').value);





        cena1.innerHTML = "CENA" + " " + (dodajSzer + transportSelect + garageHeight + doorValue + windowValue) + "zł";

        document.getElementById("price-szer").innerHTML = "szerokość" + " " + select1 + "m";

        document.getElementById("price-wys").innerHTML = "wysokość" + " " + select2 + "m";

        if (transportSelect == "0") {
            document.getElementById('price-transport').innerHTML = "TRANSPORT:malopolskie";
        } else if (transportSelect == "50") {
            document.getElementById('price-transport').innerHTML = "TRANSPORT:śląskie"
        }

       // var divCena = document.getElementById('cenaDiv1');
     //   divCena.style.display = "block";
        
        
           var priceSubmitShow= document.getElementById('priceSubmit')
       priceSubmitShow.style.display="block";

       var element = document.getElementById('priceSubmit');
         element.scrollIntoView();
        
    


        //////// //animation gaarage-
        var animacja = document.querySelector('#garage-animation').offsetWidth;
        console.log(animacja + roznicaSzerokosc);

        //width img value
        var widthGarageValue = parseFloat((select1) - 2) / 2;
        console.log("szerokość garazu obrazek" + widthGarageValue);

        var garageImgWidth = document.getElementById('garage-animation').style.width;
        garageImgWidth = "200px";

        document.getElementById('garage-animation').style.width = parseInt(garageImgWidth, 10) + ((parseInt(garageImgWidth, 10) * widthGarageValue)) + 'px';


        //height value img
        var heightGarage1 = document.getElementById('garage-animation').style.height;
        heightGarage1 = parseInt("200px", 10);
        var heightGarageValue = ((garageHeight - 10) / 55) * 0.05;


        console.log("podwyzszenie " + " " + heightGarageValue);
        document.getElementById('garage-animation').style.height = heightGarage1 + (heightGarage1 * heightGarageValue) + "px";


        /*height value img garage-animation2*/
        var heightGarage1 = document.getElementById('garage-animation2').style.height;
        heightGarage1 = parseInt("200px", 10);
        var heightGarageValue = ((garageHeight - 10) / 55) * 0.05;

        document.getElementById('garage-animation2').style.height = heightGarage1 + (heightGarage1 * heightGarageValue) + "px";


        var colorGarageChange = document.getElementById('colorGarage').value;

        document.getElementById('garage-animation2').style.background = colorGarageChange;
        document.getElementById('garage-animation').style.background = colorGarageChange;

    }



  document.getElementById('show-price-now').addEventListener('click', sprawdz);

function priceSend(){
    var longVal=document.getElementById('dlugosc').value;
    var widthVal=document.getElementById('szerokosc').value;
    
    var heightValPrice=document.getElementById('podwyzszenie').value;
    var priceSubmitOne=document.getElementById('inputOne');
    var priceSubmitTwo=document.getElementById('inputTwo');
    var priceSubmitThree=document.getElementById('inputThree');
    
    
    
    priceSubmitOne.value=longVal+"m";
    priceSubmitTwo.value=widthVal+"m"
   
    if(heightValPrice=="0"){
         priceSubmitThree.value="0"+"cm";
    }else if(heightValPrice=="55"){
        priceSubmitThree.value="10"+"cm";
    }else if(heightValPrice=="110"){
        priceSubmitThree.value="20"+"cm";
    }else if(heightValPrice=="165"){
        priceSubmitThree.value="30"+"cm";
    }else if(heightValPrice=="220"){
        priceSubmitThree.value="40"+"cm";
    }else if(heightValPrice=="275"){
        priceSubmitThree.value="50"+"cm";
    }
   
    
    
}
document.getElementById('show-price-now').addEventListener('click',priceSend);