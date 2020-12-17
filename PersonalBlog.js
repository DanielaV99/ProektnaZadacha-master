
function start()
{
    var iconImg=document.getElementById("image");
    document.addEventListener("click",swap,false);
}

function change(x)
{
    x.style.background="gray";
}

function change1(x)
{
    x.style.background="white";
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

