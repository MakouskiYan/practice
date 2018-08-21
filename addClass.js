var obj = {
    className : "open menu"
}
function addClass(obj,cls){
    var clsNames = obj["className"].split(" ");
    if(clsNames.indexOf(cls) ===-1){
    obj["className"] = obj["className"] + " " + cls;
    }else{
        console.log("You already have this class") ;
    }
    return obj;
}
console.log(addClass(obj,"menu"));
