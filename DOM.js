// Obtém o elemento com o ID "titulo" e armazena na variável 'titulo'
var titulo = document.getElementById("titulo");

// Exibe no console o nome da tag do elemento (por exemplo, "H1", "DIV") e o conteúdo HTML interno
console.log(titulo.tagName + ": " + titulo.innerHTML);
console.log("----------")

// Obtém todos os elementos que possuem o atributo name="categoria" e armazena na variável 'array'
var array = document.getElementsByName("categoria");

// Percorre cada elemento dentro do array de elementos com name="categoria"
for (var i = 0; i < array.length; i++) {
    // Exibe no console o nome da tag e o valor do atributo 'id' de cada elemento
    console.log(array[i].tagName + ": " + array[i].id);
}
console.log("----------")

// Obtém todos os elementos do documento que possuem a tag "label" e armazena na variável 'array'
array = document.getElementsByTagName("label");

// Percorre cada elemento dentro do array de tags "label"
for (var i = 0; i < array.length; i++) {
    // Exibe no console o nome da tag e o valor do atributo "for" (que associa o label a um campo de formulário)
    console.log(array[i].tagName + ": " + array[i].getAttribute("for"));
}
console.log("----------")

// Obtém todos os elementos com a classe "centralizado" e armazena na variável 'array'
array = document.getElementsByClassName("centralizado");

// Percorre cada elemento dentro do array de elementos com a classe "centralizado"
for (var i = 0; i < array.length; i++) {
    // Exibe no console o nome da tag e o valor do atributo 'id' de cada elemento
    console.log(array[i].tagName + ": " + array[i].id);
}
console.log("----------")

// Seleciona todos os elementos do documento que possuem a tag "label" (similar ao getElementsByTagName)
// e armazena na variável 'array' (querySelectorAll retorna uma NodeList)
array = document.querySelectorAll("label");

// Percorre cada elemento dentro do array de labels selecionados
for (var i = 0; i < array.length; i++) {
    // Exibe no console o nome da tag e o valor do atributo "for" (que associa o label a um campo de formulário)
    console.log(array[i].tagName + ": " + array[i].getAttribute("for"));
}
