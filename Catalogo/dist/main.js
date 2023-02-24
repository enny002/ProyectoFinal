const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector(
	'.container-cart-products'
);

btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});

/* ========================= */
const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(/*filter: s un atributo Booleano que indica que el elemento todavía no está , o ya no es relevante .*/
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {/*funcion tipo flecha*/
	if (!allProducts.length) {/*length: se utiliza para manipular series de caracteres de todos los tipos de datos de serie de caracteres (BIT, BLOB y CHARACTER) y devuelve un valor de entero que proporciona el número de elemento de source_string.*/
		cartEmpty.classList.remove('hidden');/*empty: determina si una variable está vacía.*/
		rowProduct.classList.add('hidden');/*hidden:  indica que el elemento todavía no está , o ya no es relevante .*/
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {/*forEach: ejecuta la función callback una vez por cada elemento del array; a diferencia de map() o reduce() este siempre devuelve el valor undefined y no es encadenable. El típico uso es ejecutar los efectos secundarios al final de la cadena.*/
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

/*es una de estas propiedades comunes que podemos utilizar para modificar cualquier instancia de Element. La propiedad innerHTML, 
también conocida como element.innerHTML o nodo.innerHTML, 
recibe el código HTML que el nodo tiene que renderizar. Es decir, es otra manera de crear y ubicar elementos dentro del DOM*/
		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close">
                <path stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>`;/*svg: es un contenedor que define un nuevo sistema de coordenadas y ventana gráfica .*/

		rowProduct.append(containerProduct);/*método inserta un conjunto de Nodeobjetos u objetos de cadena después del último hijo del Element.  */

		total =
			total + parseInt(product.quantity * product.price.slice(1));/*analiza un argumento de cadena y devuelve un número entero de la raíz especificada (la base en los sistemas numéricos matemáticos). */
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;/*La innerTextpropiedad de la HTMLElementinterfaz representa el contenido de texto representado de un nodo y sus descendientes. */
};
  