const firstname = "Luiz";
const anothername = 1;
const x = true;

function greeting(name:string | number | boolean){
    console.log("olá " + name)
}

greeting(firstname);
greeting(anothername);
greeting(x);