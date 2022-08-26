// it can be a template for multiple product cards for the future,
//but there are so many npm modules for temlpating, like "handelbars" an others.

import productsData from './productsData';
export const productsList = productsData
  .map(
    ({ img, title, text, buttonText }) => `<li><article class="box">
    <div class="box_picture">
      <img
        class="box_image"
        src=${img}
        alt=${title}
      />
    </div>
    <div class="box_label">
      <h2 class="box_title">${title}</h2>
      <p class="box_text">
        ${text}
      </p>
      <button class="button"> 
        <span class="button_text">${buttonText}</span>
      </button>
    </div>
  </article><li>`
  )
  .join('');
