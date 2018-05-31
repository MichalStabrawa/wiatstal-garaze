/*calculator DogHouse*/

arrayDogTransport=[];

function dogPriceHouse(){
    var floorPrice=parseFloat(document.getElementById('floor').value);
    var dogBowlPrice=parseFloat(document.getElementById('dogBowl').value);
    var colorDogPrice=parseFloat(document.getElementById('colorDog').value);
    var transportDogPrice=parseFloat(document.getElementById('transportDog').value);
    
   var showPriceDog= document.getElementById('priceDogEnd');
    
    showPriceDog.innerHTML="CENA"+":"+(780+floorPrice+dogBowlPrice+colorDogPrice+transportDogPrice)+"zł";
    
   if(arrayDogTransport.length==0) {document.getElementById('priceDogText').innerHTML="Dostawa woj. małopolskie";}else{
       document.getElementById('priceDogText').innerHTML="Dostawa woj."+" "+ arrayDogTransport[0];
   }
    
    var elementScroll = document.getElementById('dogHousePrice');
        elementScroll.scrollIntoView();
    
    
}

document.getElementById('show-price-dog').addEventListener('click',dogPriceHouse)


document.getElementById('transportDog').addEventListener('change',function(){
    arrayDogTransport.pop(arrayDogTransport[0]);
    arrayDogTransport.push(this.options[this.selectedIndex].getAttribute('data'));

})
