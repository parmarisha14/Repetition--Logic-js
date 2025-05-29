document.addEventListener('DOMContentLoaded', () => {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    let container = document.getElementById('productCardContainer');

    function renderProducts() {
        container.innerHTML = "";

        if (products.length === 0) {
            container.innerHTML = `
                <div class="col-12">
                    <div class="alert alert-warning text-center">No products found.</div>
                </div>
            `;
            return;
        }

        products.forEach(prod => {
            let card = document.createElement('div');
            card.className = 'col-md-4 mb-4';
            card.innerHTML = `
                <div class="card h-100 shadow">
                    <img src="${prod.img_url}" class="card-img-top" alt="${prod.pname}" style="height: 300px; object-fit: cover;">
                    <div class="card-body">
                        <h5 class="card-title">${prod.pname}</h5>
                        <p class="card-text">Price: ₹${prod.price}</p>
                        <p class="card-text">Quantity: ${prod.qty}</p>
                        <button class="btn btn-danger delete-btn mt-2" data-id="${prod.id}">Delete</button>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    }

    
    renderProducts();

   
    container.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-btn')) {
            let idToDelete = e.target.getAttribute('data-id');
            products = products.filter(p => p.id != idToDelete);
            localStorage.setItem('products', JSON.stringify(products));
            renderProducts(); 
        }
    });
});
