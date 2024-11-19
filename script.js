function verify() {
    var a = document.getElementById("01").value;
    if (a == true){
        document.getElementById("especify").display ="visible";
    }
}

var select =1;

 var style = "rounded-md hover:scale-105 hover: transition-all duration-300 ease-in-out w-60 h-[35px]  backdrop-blur-sm bg-white/60 invisible mt-4";
function mais(){
    ++select
    var a = document.createElement("input");
    a.class= style;
    a.placeholder="Comorbidade";
    a.id=select;
    a.type="text";
    a.name="informações";
    document.getElementById('ab').appendChild(a);
}

function menos(){
 
    if (select>0) {
       var q=  document.getElementById(select);
       q.remove()
       --select
       
      }

}
 
 