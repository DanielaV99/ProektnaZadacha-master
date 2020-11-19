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
        '<textarea id="ta" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
    
    '<div id="a"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea id="ta1" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment1()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like1()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike1()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
   '</label></p>'+
    '</div>'+
    
    '<div id="l"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea id="ta2" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
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
        '<textarea id="ta11" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment11()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like11()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike11()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
    
    '<div id="z"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea id="ta12" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment12()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like12()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike12()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
   '</label></p>'+
    '</div>'+
    
    '<div id="s"></div>'+
    '<div class="column"><p><label>Comments:<br>'+
        '<textarea id="ta13" name="comments" rows="4" cols="30" placeholder="Enter comment here."></textarea>'+
        '<button type="button" onclick="comment13()"><img src="comment.png" alt="Enter" height="25" width="25"></button>'+
        '<button type="button" onclick="like13()"><img src="like.png" alt="Like" height="25" width="25"></button>'+
        '<button type="button" onclick="dislike13()"><img src="dislike.jpg" alt="Like" height="25" width="25"></button>'+
    '</label></p>'+
    '</div>'+
'</div>'

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

var klikovi=0;
function like()
{
    klikovi+=1;
    document.getElementById("paris").innerHTML="<b>"+klikovi+"\t likes</b>";
}

var klikovi1=0;
function like1()
{
    klikovi1+=1;
    document.getElementById("amsterdam").innerHTML="<b>"+klikovi1+"\t likes</b>";
}

var klikovi2=0;
function like2()
{
    klikovi2+=1;
    document.getElementById("london").innerHTML="<b>"+klikovi2+"\t likes</b>";
}
var klikovi3=0;
function like11()
{
    klikovi3+=1;
    document.getElementById("tigar").innerHTML="<b>"+klikovi3+"\t likes</b>";
}
var klikovi4=0;
function like12()
{
    klikovi4+=1;
    document.getElementById("zirafa").innerHTML="<b>"+klikovi4+"\t likes</b>";
}
var klikovi5=0;
function like13()
{
    klikovi5+=1;
    document.getElementById("slon").innerHTML="<b>"+klikovi5+"\t likes</b>";
}


var dis=0;
function dislike()
{
    dis+=1;
    document.getElementById("dparis").innerHTML="<b>"+dis+"\t dislikes</b>";
}

var dis1=0;
function dislike1()
{
    dis1+=1;
    document.getElementById("damsterdam").innerHTML="<b>"+dis1+"\t dislikes</b>";
}

var dis2=0;
function dislike2()
{
    dis2+=1;
    document.getElementById("dlondon").innerHTML="<b>"+dis2+"\t dislikes</b>";
}
var dis3=0;
function dislike11()
{
    dis3+=1;
    document.getElementById("dtigar").innerHTML="<b>"+dis3+"\t dislikes</b>";
}
var dis4=0;
function dislike12()
{
    dis4+=1;
    document.getElementById("dzirafa").innerHTML="<b>"+dis4+"\t dislikes</b>";
}
var dis5=0;
function dislike13()
{
    dis5+=1;
    document.getElementById("dslon").innerHTML="<b>"+dis5+"\t dislikes</b>";
}

function swap()
{
   var opcii=["kniga","knigazadna"];
   var index=Math.floor(Math.random()*2);
   iconImg=document.getElementById("image")
   iconImg.setAttribute( "src", opcii[index] + ".jpg" );
}

function anket()
{
    window.alert("Успешно направена анкета!");
}


window.addEventListener("load",start,false);