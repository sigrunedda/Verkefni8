import { formatNumber } from './helpers.js';

function deletLineFromCart(event) {
  event.preventDefault();
  const lineToDelete = event.submitter.closest('tr')
  console.log(lineToDelete)

  lineToDelete.parentElement.removeChild(lineToDelete)
}

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
  cartLineElement.appendChild(cartLineTitleElement);

  const cartLineQuantityElement = document.createElement("td");
  cartLineQuantityElement.classList.add("quantity");
  cartLineQuantityElement.textContent = quantity;
  cartLineElement.appendChild(cartLineQuantityElement);

  const cartLinePriceElement = document.createElement('td');
  cartLinePriceElement.classList.add("price")
  cartLinePriceElement.textContent = formatNumber(product.price);
  cartLineElement.appendChild(cartLinePriceElement);

  const cartLineTotalElement = document.createElement('td');
  cartLineTotalElement.classList.add("total")
  cartLineTotalElement.textContent = formatNumber(product.price*quantity);
  cartLineElement.appendChild(cartLineTotalElement);

  const formTdElement = document.createElement('td');

  const formElement = document.createElement('form');
  formElement.addEventListener('submit', deletLineFromCart);
  
  const cartLineRemoveElement = document.createElement('button');
  cartLineRemoveElement.textContent = "Eyða";

  formElement.appendChild(cartLineRemoveElement);
  formTdElement.appendChild(formElement);
  cartLineElement.appendChild(formTdElement);
 
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
  const info = document.querySelector('.cartForm');

  if (!emptyMessage || !cartContent || !info) {
    console.warn('fann ekki element');
    return;
  }


  if (show) {
    emptyMessage.classList.add('hidden');
    cartContent.classList.remove('hidden');
    info.classList.remove('hidden');
  } else {
    emptyMessage.classList.remove('hidden');
    cartContent.classList.add('hidden');
    info.classList.add('hidden');
  }

    
}
