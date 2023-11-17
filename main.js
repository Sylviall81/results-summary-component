document.addEventListener('DOMContentLoaded', function() {
    const summaryItemList = document.getElementById("summary-item-list");
    // Fetch data.json (puedes usar fetch API o AJAX)
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)

            data.forEach(function(element) {
                
                const bulletImg = document.createElement('img');
                bulletImg.src = element.icon;
                bulletImg.alt = element.category;

                const listItem = document.createElement('li');
                listItem.textContent = `${element.category}, ${element.score}/100`;
                
                
                listItem.appendChild(bulletImg)
                summaryItemList.appendChild(listItem);
            });

        })
        .catch(error => console.error('Error al obtener datos:', error));
});
