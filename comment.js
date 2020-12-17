var komentar1;
$(document).ready(function(){
   
    var data = new Date();
    var datum = data.getDate() + "/"
            + (data.getMonth()+1)  + "/" 
            + data.getFullYear() + " "  
            + data.getHours() + ":"  
            + data.getMinutes();

    var $komentari1 = $('#pa'); 
    if(localStorage.getItem("#pa")) { 
        $komentari1.html(localStorage.getItem("#pa"));                
    }

    $('#b1').click(function(){
        komentar1 = document.getElementById("ta").value;
        $("#pa").append("<p>" + komentar1 + "<p>" + datum + "</p></p>");
        localStorage.setItem("#pa", $komentari1.html());
    });

    var $komentari2 = $('#a'); 
    if(localStorage.getItem("#a")) { 
        $komentari2.html(localStorage.getItem("#a"));
    }

    $('#b2').click(function(){
        komentar2 = document.getElementById("ta1").value;
        $("#a").append("<p>" + komentar2 + "<p>" + datum + "</p></p>");
        localStorage.setItem("#a", $komentari2.html());
    });

    var $komentari3 = $('#l'); 
    if(localStorage.getItem("#l")) { 
        $komentari3.html(localStorage.getItem("#l"));
    }

    $('#b3').click(function(){
        komentar3 = document.getElementById("ta2").value;
        $("#l").append("<p>" + komentar3 + "<p>" + datum + "</p></p>");
        localStorage.setItem("#l", $komentari3.html());
    });
    var $komentari4 = $('#t'); 
    if(localStorage.getItem("#t")) { 
        $komentari4.html(localStorage.getItem("#t"));
    }

    $('#b4').click(function(){
        komentar4 = document.getElementById("ta11").value;
        $("#t").append("<p>" + komentar4 + "<p>" + datum + "</p></p>");
        localStorage.setItem("#t", $komentari4.html());
    });
    var $komentari5 = $('#z'); 
    if(localStorage.getItem("#z")) { 
        $komentari5.html(localStorage.getItem("#z"));
    }

    $('#b5').click(function(){
        komentar5 = document.getElementById("ta12").value;
        $("#z").append("<p>" + komentar5 + "<p>" + datum + "</p></p>");
        localStorage.setItem("#z", $komentari5.html());
    });

    var $komentari6 = $('#s'); 
    if(localStorage.getItem("#s")) { 
        $komentari6.html(localStorage.getItem("#s"));
    }

    $('#b6').click(function(){
        komentar6 = document.getElementById("ta13").value;
        $("#s").append("<p>" + komentar6 + "<p>" + datum + "</p></p>");
        localStorage.setItem("#s", $komentari6.html());
    });

    var $recenzija = $('#kn'); 
    if(localStorage.getItem("#kn")) { 
        $recenzija.html(localStorage.getItem("#kn"));
    }

    $('#brec').click(function(){
        rec = document.getElementById("blogime").value;
        rec1 = document.getElementById("re").value;
        $("#kn").append("<p><b>" + rec+":</b>\t"+ rec1+ "<p>" + datum + "</p></p>");
        localStorage.setItem("#kn", $recenzija.html());
    });

    var $sl = $('#kn1'); 
    if(localStorage.getItem("#kn1")) { 
        $sl.html(localStorage.getItem("#kn1"));
    }

    $('#naredna').click(function(){
        b = document.getElementById("knigaime").value;
        b1 = document.getElementById("vnes").value;
        $("#kn1").append("<p><b>" + b+":</b>\t"+ b1+ "<p>" + datum + "</p></p>");
        localStorage.setItem("#kn1", $sl.html());
    });

    
});