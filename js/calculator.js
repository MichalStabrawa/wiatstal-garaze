    var cena1 = document.getElementById("test2");

var garageType=[];

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
        
        var doorValueShow=document.getElementById('door').value;
        var doorShowNow=document.getElementById('door-new-show');
        if(doorValueShow>="150"){
            
            doorShowNow.style.display= "block";
        }
        
        var windowValueShow=document.getElementById("window-price").value;
        var  windowShowNow=document.getElementById("window-new-show");
        if(windowValueShow>=150){
            windowShowNow.style.display= "block";
        }
        
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


        var priceSubmitShow = document.getElementById('priceSubmit')
        priceSubmitShow.style.display = "block";

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
        
        
        var stringBorder=""
        var widthGarage1=document.getElementById('garage-animation2').style.width;
        widthGarage1 =parseInt("300px",10);
        var widthGarage1Value = parseFloat((select2) - 3) / 3;
        console.log("Dlugosc testowa:"+widthGarage1Value);
        
        document.getElementById('garage-animation2').style.width=widthGarage1+(widthGarage1*widthGarage1Value)+ "px";
      


        var colorGarageChange = document.getElementById('colorGarage').value;

        document.getElementById('garage-animation2').style.background = colorGarageChange;
        document.getElementById('garage-animation').style.background = colorGarageChange;

    }



    document.getElementById('show-price-now').addEventListener('click', sprawdz);


    /*functio priceSend*/
    function priceSend() {

        const objectDoor = {
            valZero: "brak",
            valOne: "1szt",
            valTwo: "2szt",
            valThree: "3szt",

        }


        var longVal = document.getElementById('dlugosc').value;
        var widthVal = document.getElementById('szerokosc').value;
        var heightValPrice = document.getElementById('podwyzszenie').value;
        // var doorValPrice = document.getElementById('door').value;
        //  var windowValPrice=document.getElementById('window-price').value;

        //
        var priceSubmitOne = document.getElementById('inputOne');
        var priceSubmitTwo = document.getElementById('inputTwo');
        var priceSubmitThree = document.getElementById('inputThree');
        var priceSubmitFour = document.getElementById('inputFour');
        var priceSubmitFive = document.getElementById('inputFive');
        var priceSubmitSix = document.getElementById('inputSix');
        var priceSubmitSeven = document.getElementById('inputSeven');
        var priceSubmitEight=document.getElementById('inputEight');
        var priceSubmitNine=document.getElementById('inputNine');
        

        priceSubmitOne.value = longVal + "m";
        priceSubmitTwo.value = widthVal + "m"

        if (heightValPrice == "0") {
            priceSubmitThree.value = "0" + "cm";
        } else if (heightValPrice == "55") {
            priceSubmitThree.value = "10" + "cm";
        } else if (heightValPrice == "110") {
            priceSubmitThree.value = "20" + "cm";
        } else if (heightValPrice == "165") {
            priceSubmitThree.value = "30" + "cm";
        } else if (heightValPrice == "220") {
            priceSubmitThree.value = "40" + "cm";
        } else if (heightValPrice == "275") {
            priceSubmitThree.value = "50" + "cm";
        }


        //  if(doorValPrice=="0"){
        //    priceSubmitFour.value=objectDoor.valZero;
        // }else if(doorValPrice=="150"){
        //    priceSubmitFour.value=objectDoor.valOne;
        // }else if(doorValPrice="300"){
        //     priceSubmitFour.value=objectDoor.valTwo;
        // }
        if (arrayDor.length == 0) {
            priceSubmitFour.value = "brak"
        } else {
            for (i = 0; i < arrayDor.length; i++) {
                priceSubmitFour.value = arrayDor[i];
            }
        }

        if (arrayWindow.length == 0) {
            priceSubmitFive.value = "brak"
        } else {
            for (i = 0; i < arrayWindow.length; i++) {
                priceSubmitFive.value = arrayWindow[i];

            }

        }

        if (arrayGateShow.length == 0) {
            priceSubmitSix.value = "dwuskrzydłowa";
        } else {
            for (i = 0; i < arrayGateShow.length; i++) {
                priceSubmitSix.value = arrayGateShow[i];
            }
        }

        if (arrayColor.length == 0) {
            priceSubmitSeven.value = "ocynk";
        } else {
            for (i = 0; i < arrayColor.length; i++) {
                priceSubmitSeven.value = arrayColor[i];
            }
        }
        
        if(arrayTransport.length == 0){
            priceSubmitEight.value = "małopolskie";
        }else{
            for(i=0; i<arrayTransport.length; i++){
                priceSubmitEight.value = arrayTransport[i];
            }
        }
        
        priceSubmitNine.value=garageType;



    }
    document.getElementById('show-price-now').addEventListener('click', priceSend);

    //array data

    var arrayDor = [];
    var arrayWindow = [];
    var arrayGateShow = [];
    var arrayColor = [];
var arrayTransport=[];

    document.getElementById('door').addEventListener('change', function () {
        arrayDor.pop(arrayDor[0]);
        arrayDor.push(this.options[this.selectedIndex].getAttribute('data'));


    })

    document.getElementById('window-price').addEventListener('change', function () {
        arrayWindow.pop(arrayWindow[0]);
        arrayWindow.push(this.options[this.selectedIndex].getAttribute('data'));

    });

    document.getElementById('gate-change-date').addEventListener('change', function () {
        arrayGateShow.pop(arrayGateShow[0]);

        arrayGateShow.push(this.options[this.selectedIndex].getAttribute('data'));

    })

    document.getElementById('colorGarage').addEventListener('change', function () {
        arrayColor.pop(arrayColor[0]);
        arrayColor.push(this.options[this.selectedIndex].getAttribute('data'));
    })

document.getElementById('transport').addEventListener('change',function(){
    arrayTransport.pop(arrayTransport[0]);
    arrayTransport.push(this.options[this.selectedIndex].getAttribute('data'));
    console.log(arrayTransport);
})



