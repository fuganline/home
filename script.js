
var dfd = new Date()
dfd = dfd.toTimeString()


var j = 0
// addEventListener("")

function op(){
    window.addEventListener("keydown", (event) => {
    if(event.code=='Enter'){
jo()
   
    }})




//     var a = document.getElementById('you').value
//     window.addEventListener("keydown", (event) => {
//   if(event.code==='Enter'){
//     if(document.getElementById('you').value==document.querySelectorAll(`.${a}`))
//         {
//             alert("try")
//         }
//         const ap = document.createElement("p");
        
//         ap.textContent = document.getElementById('you').value
//         ap.className=`${a}`
//         // ap.textContent = document.getElementById('you').value

//         document.getElementById("log").appendChild(ap) 
//         repeat=false
    
    // }
    // else{
    //     j+=1
    // }
    
// } )
   

    // const d = new UIEvent;
    // let h = d.type
    // console.log(h)

}


function hi(){
    document.getElementById('log').innerHTML=''
    j=0
}



function jo(){
    var d = new Date()
    // alert(document.querySelectorAll('.you').length)
    if(dfd <= d.toTimeString()){
    j+=1
dfd = d.toTimeString()
// alert(dfd)
        const ap = document.createElement("p");
        ap.textContent = j+'. '+document.getElementById('you').value
        ap.className=`you${j}`
        ap.className=`you`
        
        ap.style.color = 'blue'
        document.getElementById("log").appendChild(ap)
        
}
else{console.log("stopped")}       
    // var f = new Array()
    // var gj = f.setItem={"Name":"Sushant"}
    // f.push(gj)
    // f=f.flat()
    // alert(f.keys)
}





