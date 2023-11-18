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
                itemContainer.style.backgroundColor = element.color

                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container');
                const bulletImg = document.createElement('img');
                bulletImg.src = element.icon;
                bulletImg.alt = element.category;

                const itemText = document.createElement('h6');
                itemText.textContent = `${element.category}  ${element.score}/100`;
                
                // itemContainer.style.color = element.color
                

                
                summaryItemList.appendChild(itemContainer);
                imgContainer.appendChild(bulletImg);
                itemContainer.appendChild(imgContainer);
                itemContainer.appendChild(itemText);
               
                
            });

        })
        .catch(error => console.error('Error al obtener datos:', error));
});
