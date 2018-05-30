

$(document).ready(function () {
    $('.hamburger-menu').click(function () {
        $('.menu-navbar').toggle();
    })

    $("#test").click(function () {
        //$("#figure-spad-tyl").show();
        $("#calc1").show();
       $('html, body').animate({
             scrollTop: $('#calc1').offset().top
      }, 1000);

    })

     $("#btn-header").click(function () {
        $('html, body').animate({
         scrollTop: $('#offert1').offset().top
     }, 1000);
   })




    // $(".target").change(function () {

    //    var wartosc = parseFloat($(this).val());

    //  const pobierzTextTable = $(this).parent().prev().attr('value');

    //  const parsujText = parseFloat(pobierzTextTable);

    // $(this).parent().prev().text(wartosc + parsujText);





    //   });
    /*calculator garage function*/




})

$(document).ready(function () {
    
    /*cennik function*/
   

    $('.bbb').click(function () {
        var x = parseFloat($(this).parent().prev().attr('value'));
        $(this).parent().prev().css('color:red');
        $(this).parent().prev().attr('id', 'tojest');
        tablica.push(x);
        console.log(tablica);
        $(".modal-new").show();
    })




    $('#save-test').click(function () {
        $('.modal-new').hide();
    })
 
$('#color-garage-value ').change(function(){
  
      var sprawdzam=$('#color-garage-value :selected').data('id');
    $('.color-box').css('background',sprawdzam);
   })
})

 

