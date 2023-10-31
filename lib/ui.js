import { formatNumber } from './helpers.js';

export function createCartLine(product, quantity) {
  // TODO útfæra þannig að búin sé til lína í körfu á forminu:

  /*
  <tr data-cart-product-id="1">
    <td>HTML húfa</td>
    <td>1</td>
    <td><span class="price">5.000 kr.-</span></td>
    <td><span class="price">5.000 kr.-</span></td>
    <td>
      <form class="remove" method="post">
        <button>Eyða</button>
      </form>
    </td>
  </tr>
  */
 
  const cartLineElement = document.createElement('tr');
  
  const cartLineTitleElement = document.createElement('td');
  cartLineTitleElement.classList.add("title");
  cartLineTitleElement.textContent = product.title;

  const cartLineQuantityElement = document.createElement("tr");
  cartLineQuantityElement.classList.add("quantity");
  cartLineQuantityElement.textContent = product.quantity;

  const cartLinePriceElement = document.createElement('td');
  cartLinePriceElement.classList.add("price")
  cartLinePriceElement.textContent = formatNumber(product.price);

  const cartLineTotalElement = document.createElement('td');
  cartLineTotalElement.classList.add("total")
  cartLineTotalElement.textContent = formatNumber(product.price*quantity);

  

  cartLineElement.appendChild(cartLineTitleElement);
  cartLineElement.appendChild(cartLineQuantityElement);
  cartLineElement.appendChild(cartLinePriceElement);
  cartLineElement.appendChild(cartLineTotalElement);
  

  // TODO hér þarf að búa til eventListener sem leyfir að eyða línu úr körfu

  return cartLineElement;
}

/**
 * Sýna efni körfu eða ekki.
 * @param {boolean} show Sýna körfu eða ekki
 */
export function showCartContent(show = true) {
  // Finnum element sem inniheldur körfuna
  const cartElement = document.querySelector('.cart');

  if (!cartElement) {
    console.warn('fann ekki .cart');
    return;
  }

  const emptyMessage = cartElement.querySelector('.empty-message');
  const cartContent = cartElement.querySelector('.cart-table');

  if (!emptyMessage || !cartContent) {
    console.warn('fann ekki element');
    return;
  }

  if (show) {
    emptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');
  } else {
    emptyMessage.classList.remove('hidden');
    cartContent.classList.add('hidden');
  }
}
