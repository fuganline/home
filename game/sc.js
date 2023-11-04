var a=0

function s(nu){
    var yt =3*Math.random();
    yt = Math.round(yt);


    if (nu==yt) {
       scd(`${yt}`,nu,`This game is draw`);
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
    }

    else if (nu==1 && yt==3) {
         scd(yt,nu,"You won this game");
         var ap = parseInt(document.getElementById('pt').innerText)
         document.getElementById('pt').innerText=ap+1;
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      } 
    else if (nu==1 && yt>=3) {
      yt=3
         scd(yt,nu,"You won this game");
         var ap = parseInt(document.getElementById('pt').innerText)
         document.getElementById('pt').innerText=ap+1;
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      } 
      else if(nu==2 && yt==1) {
         scd(yt,nu,"You won this game");
         
         var ap = parseInt(document.getElementById('pt').innerText)
         document.getElementById('pt').innerText=ap+1;
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      } 
      else if(nu==2 && yt==0) {
        yt+=1
         scd(yt,nu,"You won this game");
         
         var ap = parseInt(document.getElementById('pt').innerText)
         document.getElementById('pt').innerText=ap+1;
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      } 
      else if(nu==3 && yt==0) {
        yt+=1
         scd(yt,nu,"You lose this game");
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      } 
      else if(nu==1 && yt==0) {
        yt+=1
         scd(yt,nu,"This game is draw");
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      } 
      else if(nu==3 && yt==2) {
         scd(yt,nu,"You won this game")
         var ap = parseInt(document.getElementById('pt').innerText)
         document.getElementById('pt').innerText=ap+1;
         
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
      }
else {
          scd(yt,nu,"You lose this game");
          
       var av = parseInt(document.getElementById('at').innerText)
       av+=1
       document.getElementById('at').innerText=av
        
      }
    }

function scd(f,y,r){
  var b = document.createElement('tr')
  a+=1
  b.id=a
b.textContent=""
document.getElementById('screen').appendChild(b)


  var d = document.createElement('td')
  if(f==1){
    f="Stone"
    d.textContent=f
  }
  else if(f==2){
    f="Paper"
    d.textContent=f
  }
  else if(f==3){
    f="Scissor"
    d.textContent=f
  }
  else{
    d.textContent=f
    
  }
document.getElementById(a).appendChild(d)

  var e = document.createElement('td')

if(y==1){
  y="Stone"
  e.textContent=y
}
else if(y==2){
  y="Paper"
  e.textContent=y
}
else if(y==3){
  y="Scissor"
  e.textContent=y
}
else{
  e.textContent=y
  
}
document.getElementById(a).appendChild(e)

  var o = document.createElement('td')
o.textContent=r
document.getElementById(a).appendChild(o)
var c = b.id
// document.location.href=document.location.host+document.location.pathname+`#`+c


}


document.getElementById("fg").addEventListener("mouseover",(f)=>{console.log("hi")})

