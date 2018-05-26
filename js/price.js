var tablica = [];

function testuj() {
        var wartosc1 = parseFloat(document.getElementById('s1').value);

        var pole = document.getElementById('tojest').value;
        pole = tablica[0];
        var poleVal = parseFloat(pole);

        var windowVal = parseFloat(document.getElementById('window-price2').value);

        var gateValue = parseFloat(document.getElementById('gate-price').value);
    var colorValuePrice=parseFloat(document.getElementById('color-garage-value').value);
    
    
        var transportCountry = parseFloat(document.getElementById('transport-country-price').value);

        document.getElementById('tojest').innerHTML = (wartosc1 + poleVal) + windowVal + transportCountry + gateValue+(poleVal*colorValuePrice);
    
        document.getElementById('tojest').style.color = "red";
        document.getElementById('tojest').style.fontSize = "18px";


        tablica.pop();
        console.log(tablica);

        document.getElementById('modal-new-start').style.display = "none";
        var idDoc = document.getElementsByTagName('td');

        for (i = 0; i < idDoc.length; i++) {
            idDoc[i].removeAttribute('id', 'tojest');
        }

}

    document.getElementById('save-btn2').addEventListener('click', testuj);