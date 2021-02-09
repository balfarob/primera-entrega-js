/// CONSTRUCTOR DE CARRITO Y PRODUCTOS ///
function shoppingCart() {     
    let cart = [];
    let total = 0;

    this.addProduct = function(productToPush) {
        //Buscamos por índice al producto correspondiente para agregar al carrito
        let addIndex = prodUnias.find(product => product.id == productToPush);
        cart.push(addIndex)
        this.update();
    }

    this.update = function() {
        //Actualizamos el div con el detalle del carrito y guardamos en el storage
        carritoDetails.innerHTML = cart.length + ' producto/s - $' + this.getTotal()
        localStorage.setItem('carritoUñas', JSON.stringify(cart))
    }

    this.getStorage = function() {
        //Si encontró algo en el storage lo guarda en la variable cart y actualiza el div
        cart = JSON.parse(localStorage.getItem('carritoUñas'));
        this.update()
    }

    this.getTotal = function() {
        //Actualiza el total
        total = 0;
        cart.forEach(function(product) {
            total += product.precio
        })
        return total;
    }
}

/// NUEVA INSTANCIAS DE CARRITO ///
var myShoppingCart = new shoppingCart();