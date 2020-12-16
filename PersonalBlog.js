var date= new Date();
function start()
{
    var pic=document.getElementById("slika1");
    pic.addEventListener( "click", gallery, false );

    var pic1=document.getElementById("slika2");
    pic1.addEventListener("click",gallery1,false);

    var com=document.getElementById("l1");
    com.addEventListener("click",comm,false);

    var com1=document.getElementById("l2");
    com1.addEventListener("click",comm1,false);

    var iconImg=document.getElementById("image");
    document.addEventListener("click",swap,false);


}

function dato()
{
    var d=parseInt(date.getMonth())+1;
    return d;
}

function gallery()
{
    var insta=document.getElementById("gradovi");
    insta.innerHTML="<div class='row'>"+
        "<div class='column'>"+
          "<img class='gallery' src='paris.jpg' alt='Paris' height='300px' style='width:100%'>"+
          "<p id='paris'></p>"+
          "<p id='dparis'></p>"+
        "</div>"+
        "<div class='column'>"+
          "<img class='gallery' src='amsterdam.jpg' alt='Amsterdam' style='width:100%'>"+
          "<p id='amsterdam'></p>"+
          "<p id='damsterdam'></p>"+
        "</div>"+
        "<div class='column'>"+
          "<img class='gallery' src='london.jpg' alt='London' height='300px' style='width:100%'>"+
          "<p id='london'></p>"+
          "<p id='dlondon'></p>"+
        "</div>"+
      "</div>"

}

function gallery1()
{
    var insta1=document.getElementById("zivotni");
    insta1.innerHTML='<div class="row">'+
        '<div class="column">'+
          '<img class="gallery" src="tigar.jpg" alt="Tiger" style="width:100%">'+
          "<p id='tigar'></p>"+
          "<p id='dtigar'></p>"+
        '</div>'+
        '<div class="column">'+
          '<img class="gallery" src="zirafa.jpg" alt="Giraffe" style="width:100%">'+
          "<p id='zirafa'></p>"+
          "<p id='dzirafa'></p>"+
        '</div>'+
        '<div class="column">'+
          '<img class="gallery" src="slon.jpg" alt="Elephant" height="270px" style="width:100%">'+
          "<p id='slon'></p>"+
          "<p id='dslon'></p>"+
        '</div>'+
      '</div>'
}

function comm()
{
   
    var k1=document.getElementById("c");
    k1.innerHTML='<div class="row">'+
    '<div id="pa"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea onfocusin="change(this)" onfocusout="change1(this)" id="ta" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
    
    '<div id="a"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea onfocusin="change(this)" onfocusout="change1(this)" id="ta1" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment1()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like1()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike1()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
   '</label></p>'+
    '</div>'+
    
    '<div id="l"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea onfocusin="change(this)" onfocusout="change1(this)" id="ta2" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment2()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like2()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike2()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
'</div>'

}

function comm1()
{
   
    var k2=document.getElementById("c1");
    k2.innerHTML='<div class="row">'+
    '<div id="t"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea onfocusin="change(this)" onfocusout="change1(this)" id="ta11" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment11()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like11()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike11()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
    
    '<div id="z"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea onfocusin="change(this)" onfocusout="change1(this)" id="ta12" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment12()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like12()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike12()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
   '</label></p>'+
    '</div>'+
    
    '<div id="s"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea onfocusin="change(this)" onfocusout="change1(this)" id="ta13" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment13()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like13()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike13()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
'</div>'

}

function change(x)
{
    x.style.background="gray";
}

function change1(x)
{
    x.style.background="white";
}

function blog()
{
    var b=document.getElementById("knigaime").value;
    var b1=document.getElementById("vnes").value;
    document.getElementById("bl").innerHTML+="<b>"+b+":</b>\t"+b1+"<br>"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";

}
function recenzija()
{
    var r=document.getElementById("blogime").value;
    var r1=document.getElementById("re").value;
    document.getElementById("kn").innerHTML+="<b>"+r+":</b> \t"+r1+"<br>"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}

function comment()
{
  var sl=document.getElementById("ta").value;
  document.getElementById("pa").innerHTML+="<b>"+sl+"</b>"+"\t"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}
function comment1()
{
    var sl=document.getElementById("ta1").value;
    document.getElementById("a").innerHTML+="<b>"+sl+"</b>"+"\t"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}

function comment2()
{
    var sl=document.getElementById("ta2").value;
    document.getElementById("l").innerHTML+="<b>"+sl+"</b>"+"\t"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}
function comment11()
{
    var sl=document.getElementById("ta11").value;
    document.getElementById("t").innerHTML+="<b>"+sl+"</b>"+"\t"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}
function comment12()
{
    var sl=document.getElementById("ta12").value;
    document.getElementById("z").innerHTML+="<b>"+sl+"</b>"+"\t"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}
function comment13()
{
    var sl=document.getElementById("ta13").value;
    document.getElementById("s").innerHTML+="<b>"+sl+"</b>"+"\t"+date.getHours()+":"+date.getMinutes()+"\t"+date.getDate()+"/"+dato()+"/"+date.getFullYear()+"<br>";
}

function like()
{
        if (typeof(Storage) !== "undefined") {
          if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+1;
          } else {
            localStorage.clickcount = 1;
          }
          document.getElementById("paris").innerHTML = "<b>" + localStorage.clickcount + "\t likes</b>";
        } else {
          document.getElementById("paris").innerHTML = "Sorry, your browser does not support web storage...";
        }
   
}

function like1()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount1) {
          localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
        } else {
          localStorage.clickcount1 = 1;
        }
        document.getElementById("amsterdam").innerHTML = "<b>" + localStorage.clickcount1 + "\t likes</b>";
      } else {
        document.getElementById("amsterdam").innerHTML = "Sorry, your browser does not support web storage...";
      }
}


function like2()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount2) {
          localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
        } else {
          localStorage.clickcount2 = 1;
        }
        document.getElementById("london").innerHTML = "<b>" + localStorage.clickcount2 + "\t likes</b>";
      } else {
        document.getElementById("london").innerHTML = "Sorry, your browser does not support web storage...";
      }

}

function like11()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount3) {
          localStorage.clickcount3 = Number(localStorage.clickcount3)+1;
        } else {
          localStorage.clickcount3 = 1;
        }
        document.getElementById("tigar").innerHTML = "<b>" + localStorage.clickcount3 + "\t likes</b>";
      } else {
        document.getElementById("tigar").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function like12()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount4) {
          localStorage.clickcount4 = Number(localStorage.clickcount4)+1;
        } else {
          localStorage.clickcount4 = 1;
        }
        document.getElementById("zirafa").innerHTML = "<b>" + localStorage.clickcount4 + "\t likes</b>";
      } else {
        document.getElementById("zirafa").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function like13()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount5) {
          localStorage.clickcount5 = Number(localStorage.clickcount5)+1;
        } else {
          localStorage.clickcount5 = 1;
        }
        document.getElementById("slon").innerHTML = "<b>" + localStorage.clickcount5 + "\t likes</b>";
      } else {
        document.getElementById("slon").innerHTML = "Sorry, your browser does not support web storage...";
      }
}



function dislike()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount6) {
          localStorage.clickcount6 = Number(localStorage.clickcount6)+1;
        } else {
          localStorage.clickcount6 = 1;
        }
        document.getElementById("dparis").innerHTML = "<b>" + localStorage.clickcount6 + "\t dislikes</b>";
      } else {
        document.getElementById("dparis").innerHTML = "Sorry, your browser does not support web storage...";
      }

}

function dislike1()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount7) {
          localStorage.clickcount7 = Number(localStorage.clickcount7)+1;
        } else {
          localStorage.clickcount7 = 1;
        }
        document.getElementById("damsterdam").innerHTML = "<b>" + localStorage.clickcount7 + "\t dislikes</b>";
      } else {
        document.getElementById("damsterdam").innerHTML = "Sorry, your browser does not support web storage...";
      }


}


function dislike2()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount8) {
          localStorage.clickcount8 = Number(localStorage.clickcount8)+1;
        } else {
          localStorage.clickcount8 = 1;
        }
        document.getElementById("dlondon").innerHTML = "<b>" + localStorage.clickcount8 + "\t dislikes</b>";
      } else {
        document.getElementById("dlondon").innerHTML = "Sorry, your browser does not support web storage...";
      }

}

function dislike11()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount9) {
          localStorage.clickcount9 = Number(localStorage.clickcount9)+1;
        } else {
          localStorage.clickcount9 = 1;
        }
        document.getElementById("dtigar").innerHTML = "<b>" + localStorage.clickcount9 + "\t dislikes</b>";
      } else {
        document.getElementById("dtigar").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function dislike12()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount10) {
          localStorage.clickcount10 = Number(localStorage.clickcount10)+1;
        } else {
          localStorage.clickcount10 = 1;
        }
        document.getElementById("dzirafa").innerHTML = "<b>" + localStorage.clickcount10 + "\t dislikes</b>";
      } else {
        document.getElementById("dzirafa").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function dislike13()
{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount11) {
          localStorage.clickcount11 = Number(localStorage.clickcount11)+1;
        } else {
          localStorage.clickcount11 = 1;
        }
        document.getElementById("dslon").innerHTML = "<b>" + localStorage.clickcount11 + "\t dislikes</b>";
      } else {
        document.getElementById("dslon").innerHTML = "Sorry, your browser does not support web storage...";
      }
}

function swap(id,primary,secondary)
{
    src=document.getElementById(id).src;
    if (src.match(primary)) {
      document.getElementById(id).src=secondary;
    } else {
      document.getElementById(id).src=primary;
    }
}

function anket()
{
    window.alert("Успешно направена анкета!");
}

function belavoda()
{
  window.open("https://www.facebook.com/restoranbelavoda","Restoran Bela Voda");
}

function mari()
{
  window.open("https://www.facebook.com/mariloungeandbar","Lounge and Bar Mari");
}

function gardenia()
{
  window.open("https://www.facebook.com/HotelGardeniaMK","Hotel Gardenia");
}

function serija1()
{
  window.open("https://mk.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D1%98%D0%B0%D1%82%D0%B5%D0%BB%D0%B8_(%D0%A2%D0%92_%D1%81%D0%B5%D1%80%D0%B8%D1%98%D0%B0)","Friends");
}

function serija2()
{
  window.open("https://en.wikipedia.org/wiki/Money_Heist","Money Heist");
}

function serija3()
{
  window.open("https://en.wikipedia.org/wiki/Prison_Break","Prison Break");
}

function fb()
{
  window.open("https://www.facebook.com/dvasileska.14","Facebook");
}

function insta()
{
  window.open("https://www.instagram.com/vasileska_daniela/?hl=en","Instagram");
}


window.addEventListener("load",start,false);