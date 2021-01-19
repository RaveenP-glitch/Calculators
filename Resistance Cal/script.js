
//document.getElementById("start").addEventListener("click",changeColor);

function changeColor(){
    const R = document.getElementById("resistance");
    const l = document.getElementById("leftline");
    const m = document.getElementById("middleline");
    const r = document.getElementById("rightline");
    const Lval = l.options[l.selectedIndex].value;
    const Mval = m.options[m.selectedIndex].value;
    const Rval = r.options[r.selectedIndex].value;

   

    let sum = 0;
    sum=Lval+Mval;
    let result =0;
    result =  sum*Rval;
    R.innerHTML = result; 

  

    document.getElementById("hide").innerHTML = "Your resistance is...";
    
   
    //slog = `linear-gradient() ${Mtext}`
 
    const slog= document.getElementById("slog");
    const Ltext=l.options[l.selectedIndex].text;
    const Mtext=m.options[m.selectedIndex].text;
    const Rtext=r.options[r.selectedIndex].text;

     slog.style.backgroundImage = "linear-gradient(" + "to right" + "," + "tan 20%" + "," +
         Ltext + "20% 23%" + "," + "tan 23% 40%" + "," + Mtext + "40% 43%" + "," + "tan 43% 60%" + "," +
         Rtext + "60% 63%" + "," + "tan 63% 87%" + "," + "gold 87% 90%" + "," + "tan 90%" + ")";
    


}