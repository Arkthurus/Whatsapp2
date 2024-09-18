console.log("O arquivo scrypt foi lido!");
var num1=10;
// alert("o valor de num1 eh: " + num1 + " e seu tipo eh: " + typeof num1);
console.log("o valor de num1 eh: " + num1 + " e seu tipo eh: " + typeof num1);

let num2=5;
var resultado= num1+num2;
console.log(resultado);




function pedir(){
    // let nome = prompt("Informe seu nome");
    let nome = document.getElementById ("nome").value; 
    // alert("O nome digitado foi: ", nome);
    let comando="<p>O nome é: " + nome + "!<p>";
    document.getElementById('form2').innerHTML=comando;

    // let email = document.getElementById("email").value;
    // let comando="<p>O email é: " + email + "!<p>";
    // document.getElementById('form2').innerHTML=comando;

}

// let x = parseInt(prompt("Digite um inteiro: "));
// console.log ( num1 + x + " " + typeof x);

// a=10;
// b=5;
// a++;
// b--;

// console.log("a=", a, "b=", b);
// console.log("a=", a++, "b=", b--);
// console.log("a=", a, "b=", b);
// console.log("a=", a++, "b=", b--);
// console.log("a=", a, "b=", b);


