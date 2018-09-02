
function concrete_tmt_func(a) {

    var size_rod = [];
     size_rod["8mm_tmt_cost"]=window.sessionStorage.getItem("8mms");
     size_rod["10mm_tmt_cost"]=window.sessionStorage.getItem("10mms");
     size_rod["12mm_tmt_cost"]=window.sessionStorage.getItem("12mms");
    
     size_rod["16mm_tmt_cost"]=window.sessionStorage.getItem("16mms");
     size_rod["20mm_tmt_cost"]=window.sessionStorage.getItem("20mms");
     size_rod["25mm_tmt_cost"]=window.sessionStorage.getItem("25mms");
     
     size_rod["28mm_tmt_cost"]=window.sessionStorage.getItem("28mms");
     size_rod["32mm_tmt_cost"]=window.sessionStorage.getItem("32mms");     
     size_rod["36mm_tmt_cost"]=window.sessionStorage.getItem("36mms");     
     size_rod["40mm_tmt_cost"]=window.sessionStorage.getItem("40mms");     
    
    
    var x = document.getElementById(a).value;
    var tns = parseFloat(x);
    
    if(tns>300 && tns <0){
    
    document.getElementById("8mm_span").innerHTML="please enter valid email id"
       return false;
   }
   
    var price = size_rod[a+'_cost']*tns;
    
    if(isNaN(price)){
        document.getElementById(a+'_cost').value = '0';
    }
    
    else{    
    document.getElementById(a+'_cost').value = Math.round(price);
    }
    
    total();
}

    
function total(){
        
 var total_tns = parseFloat('0'+document.getElementById("8mm_tmt").value) + parseFloat('0'+document.getElementById("10mm_tmt").value) + parseFloat('0'+document.getElementById("12mm_tmt").value) + parseFloat('0'+document.getElementById("16mm_tmt").value) + parseFloat('0'+document.getElementById("20mm_tmt").value) + parseFloat('0'+document.getElementById("25mm_tmt").value) + parseFloat('0'+document.getElementById("28mm_tmt").value) + parseFloat('0'+document.getElementById("32mm_tmt").value) + parseFloat('0'+document.getElementById("36mm_tmt").value) + parseFloat('0'+document.getElementById("40mm_tmt").value);    
  
 var total_price = parseInt(document.getElementById("8mm_tmt_cost").value) + parseInt(document.getElementById("10mm_tmt_cost").value) + parseInt(document.getElementById("12mm_tmt_cost").value) + parseInt(document.getElementById("16mm_tmt_cost").value) + parseInt(document.getElementById("20mm_tmt_cost").value) + parseInt(document.getElementById("25mm_tmt_cost").value) + parseInt(document.getElementById("28mm_tmt_cost").value) + parseInt(document.getElementById("32mm_tmt_cost").value) + parseInt(document.getElementById("36mm_tmt_cost").value) + parseInt(document.getElementById("40mm_tmt_cost").value);  

    var total_price = total_price;
document.getElementById("kgs").value =total_tns;
document.getElementById("sizet_rods_price").value = total_price;


}

  