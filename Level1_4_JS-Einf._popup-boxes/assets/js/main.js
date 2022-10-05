window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");

let alter = window.prompt("Gib mir bitte dein Alter:");
console.log(alter);

let age = prompt("Wie alt bist du?", "100");

let b = 5;
let a = b * 5 - 3;
alert(a);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);

let text;
if (confirm("Press a button!") == true) {
    text = "You pressed OK!";
} else {
    text = "You canceled!";
}
console.log(text);
