document.addEventListener('DOMContentLoaded', function() {
    const summaryItemList = document.getElementById("summary-item-list");
    const summaryContainer = document.getElementById("summary-container");
    // Fetch data.json (puedes usar fetch API o AJAX)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.forEach(function(element) {

                const listItemContainer = document.createElement('div');
                listItemContainer.classList.add('list-item-container');

                const listItem = document.createElement('li');
                listItem.textContent = `${element.category}, ${element.score}/100`;
                
                

                const bulletImg = document.createElement('img');
                bulletImg.src = element.icon;
                bulletImg.alt = element.category;

                listItemContainer.appendChild(bulletImg);
                listItemContainer.appendChild(listItem);
                summaryContainer.appendChild(listItemContainer);
            });

        })
        .catch(error => console.error('Error al obtener datos:', error));
});
