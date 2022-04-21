var arr=[0,1,2];
var r= Math.floor((Math.random())*256);
var g= Math.floor((Math.random())*256);
var b= Math.floor((Math.random())*256);

document.getElementById("Nameofcolor").innerHTML="( "+r+" , "+g+" , "+b+")";

var index=Math.floor((Math.random())*3);

document.getElementById(index).style.backgroundColor="rgb("+r+","+g+","+b+")";

arr.splice(index,1);

var r1= Math.floor((Math.random())*256);
var g1= Math.floor((Math.random())*256);
var b1= Math.floor((Math.random())*256);
document.getElementById(index).style.backgroundColor="rgb("+r1+","+g1+","+b1+")";

var r2= Math.floor((Math.random())*256);
var g2= Math.floor((Math.random())*256);
var b2= Math.floor((Math.random())*256);
document.getElementById(index).style.backgroundColor="rgb("+r2+","+g2+","+b2+")";


function guess(){
    if(document.activeElement.id==index){
        document.getElementById("Nameofcolor").innerHTML="CORRECT !!";
        document.getElementById("Nameofcolor").style.color="darkgreen";
    }
  else{
      document.getElementById("Nameofcolor").innerHTML="WRONG !!";
      document.getElementById("Nameofcolor").style.color="red";

    }

    document.getElementsByClassName("btn")[0].removeAttribute("onclick");
    document.getElementsByClassName("btn")[1].removeAttribute("onclick");
    document.getElementsByClassName("btn")[2].removeAttribute("onclick");
}

function replay(){
    window.location.reload();
}