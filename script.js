var Mercearia = [];
var Padaria = [];
var Laticinios = [];
var Carnes = [];
var Bebidas = [];
var Limpeza = [];
var Hortifruti = [];
var Outros =[];

pergunta = prompt("Você deseja adicionar um item na sua lista de compras? Digite S ou N");
while (pergunta !== "S" && pergunta !== "N") {
  alert("Informação inválida. Digite apenas S ou N.");
  pergunta = prompt("Você deseja adicionar um item na sua lista de compras? Digite S ou N");
}

if (pergunta == "S"){
  while(pergunta == "S") {  
  addItem = prompt("Qual item você deseja inserir na lista?");
  categoria = prompt("As categorias são: Mercearia, Padaria, Laticínios, Carnes, Bebidas, Limpeza, Hortifruti e Outros. Qual categoria você quer adicionar esse item?");
  while (categoria !== "Mercearia" && categoria !== "Padaria" && categoria !== "Laticínios" && categoria !== "Carnes" && categoria !== "Limpeza" && categoria !== "Bebidas" && categoria !== "Hortifruti" && categoria !== "Outros") {
  alert("Categoria inválida. Digite uma opção válida.");
  categoria = prompt("As categorias são: Mercearia, Padaria, Laticínios, Carnes, Bebidas, Limpeza, Hortifruti e Outros. Qual categoria você quer adicionar esse item?");
  } if (categoria == "Mercearia") {
    var add = Mercearia.push(" " + addItem);
  } if (categoria == "Padaria") {
    var add = Padaria.push(" " + addItem);
  } if (categoria == "Laticínios") {
    var add = Laticinios.push(" " + addItem);
  } if (categoria == "Carnes") {
    var add = Carnes.push(" " + addItem);
  } if (categoria == "Bebidas") {
    var add = Bebidas.push(" " + addItem);
  } if (categoria == "Limpeza") {
    var add = Limpeza.push(" " + addItem);
  } if (categoria == "Hortifruti") {
    var add = Hortifruti.push(" " + addItem);
  } if (categoria == "Outros") {
    var add = Outros.push(" " + addItem);
  } 
    pergunta = prompt("Você deseja adicionar mais algum item na lista de compras? Digite S ou N");
    while (pergunta !== "S" && pergunta !== "N") {
  alert("Informação inválida. Digite apenas S ou N.");
  pergunta = prompt("Você deseja adicionar um item na sua lista de compras? Digite S ou N");
} if (pergunta == "N") {
  alert("Lista de compras: \n Mercearia: " + Mercearia + "\n Padaria: " + Padaria + "\n Laticínios: " + Laticinios + "\n Carnes: " + Carnes + "\n Hortifruti: " + Hortifruti + "\n Bebidas: " + Bebidas + "\n Limpeza: " + Limpeza + "\n Outros: " + Outros);
}}} else if (pergunta == "N") {
  alert("Lista de compras: \n Mercearia: " + Mercearia + "\n Padaria: " + Padaria + "\n Laticínios: " + Laticinios + "\n Carnes: " + Carnes + "\n Hortifruti: " + Hortifruti + "\n Bebidas: " + Bebidas + "\n Limpeza: " + Limpeza + "\n Outros: " + Outros);
}