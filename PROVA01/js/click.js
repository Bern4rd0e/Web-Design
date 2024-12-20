const listItems = document.querySelectorAll('.list-item');

// Adiciona um evento de clique em cada item da lista
listItems.forEach(item => {
    item.addEventListener('click', function() {
        // Remove a classe "selected" de todos os itens
        listItems.forEach(i => i.classList.remove('selected'));

        // Adiciona a classe "selected" no item clicado
        item.classList.add('selected');
    });
});