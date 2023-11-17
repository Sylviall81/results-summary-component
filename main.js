document.addEventListener('DOMContentLoaded', function() {
    // Fetch data.json (puedes usar fetch API o AJAX)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {

            console.log(data)
            // Obtén el contenedor de atribución
            // const summaryItemList  = document.getElementById('summary-item-list');

            // // Crea un elemento de anclaje
            // const anchorElement = document.createElement('a');
            // anchorElement.href = data.attributionLink;
            // anchorElement.textContent = data.attributionText;

            // // Agrega el enlace al contenedor de atribución
            // attributionContainer.appendChild(anchorElement);
        })
        .catch(error => console.error('Error al obtener datos:', error));
});
