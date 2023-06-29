let cel = document.getElementById("cel");
let cel1 = document.getElementById("cel1");
let fah = document.getElementById("fah");
let kel = document.getElementById("kel");
let fah1 = document.getElementById("fah1");
let kel1 = document.getElementById("kel1");

cel.addEventListener('input',function(e){
    let c =this.value;
    let f= ( c * 9/5) + 32;
//    let k= c+273.15;
    fah.value =f;
//    kel.value=k;

});

cel1.addEventListener('input',function(e){
    let c1 =this.value;
    
   let k= parseFloat(c1*1 +273.15).toFixed(3);
   
   kel.value=k;

});

fah.addEventListener('input',function(e){
    
    let f=this.value;
    let c= parseFloat((f - 32) * 5/9).toFixed(3);
    cel.value =c;
});

kel.addEventListener('input',function(e){
    
    let k=this.value;
    let c1= parseFloat(k*1-273.15).toFixed(3);
    cel1.value =c1;
});

fah1.addEventListener('input',function(e){
    
    let f1=this.value;
    let k1= parseFloat((f1 - 32) * 5/9 + 273.15).toFixed(3);
    kel1.value =k1;
});

kel1.addEventListener('input',function(e){
    
    let k1=this.value;
    let f1= parseFloat((k1 - 273.15) * 9/5 + 32).toFixed(3) ;
    fah1.value =f1;
});