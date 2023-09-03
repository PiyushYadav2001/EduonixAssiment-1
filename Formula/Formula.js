function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}


function Area(){
    let Radius=document.getElementById("Radius").value;
    if(!isNumeric(Radius)){
        alert("Please Enter Correct Value");
        return;
    }
     if(Radius<0){
        alert("Please ENter postive Value");
        return;
     }
    radius=parseFloat(Radius);
    var Area=Math.PI * radius *radius;
    
    document.getElementById("Answer").innerHTML=Area.toFixed(5);
}

function reset(){
    document.getElementById("Radius").value="";
    document.getElementById("Height").value="";
    document.getElementById("Answer").innerHTML="";
}


function VolumeOfCylinder(){
    let Radius=document.getElementById("Radius").value;
    let Height=document.getElementById("Height").value;
    if(!isNumeric(Radius) || !isNumeric(Height)){
        alert("Please Enter Correct Value");
        return;
    }
     if(Radius<0 || Height<0){
        alert("Please ENter postive Value");
        return;
     }
    radius=parseFloat(Radius);
    height=parseFloat(Height);
    var Voc=Math.PI * (radius *radius)*height;
    
    document.getElementById("Answer").innerHTML=Voc.toFixed(5);
}

function SurfaceAreaOfCylinder(){
    let Radius=document.getElementById("Radius").value;
    let Height=document.getElementById("Height").value;
    if(!isNumeric(Radius) || !isNumeric(Height)){
        alert("Please Enter Correct Value");
        return;
    }
     if(Radius<0 || Height<0){
        alert("Please ENter postive Value");
        return;
     }
    radius=parseFloat(Radius);
    height=parseFloat(Height);
    var Soc= 2*Math.PI*radius*height+2*Math.PI*(radius*radius);  
    
    document.getElementById("Answer").innerHTML=Soc.toFixed(5);
}