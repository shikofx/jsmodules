function third(str){
    return str + 'Morgan';
}

function second(str){
    return(third('Dexter'));
}

function first(){
    var name = second();
    console.log("My name is: " + name);
}

first();