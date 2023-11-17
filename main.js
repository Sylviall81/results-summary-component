document.addEventListener('DOMContentLoaded', function() {
    const summaryItemList = document.getElementById("summary-item-list");
    const summaryContainer = document.getElementById("summary-container");
    // Fetch data.json (puedes usar fetch API o AJAX)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.forEach(function(element) {

                const itemContainer = document.createElement('div');
                itemContainer.classList.add('list-item-container');

                const bulletImg = document.createElement('img');
                bulletImg.src = element.icon;
                bulletImg.alt = element.category;

                itemContainer.textContent = `${element.category}    ${element.score}/100`;
                itemContainer.style.backgroundColor = element.color
                // itemContainer.style.color = element.color
                

                

                itemContainer.appendChild(bulletImg);
                summaryItemList.appendChild(itemContainer);
                
            });

        })
        .catch(error => console.error('Error al obtener datos:', error));
});
