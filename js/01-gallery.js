import { galleryItems } from "./gallery-items.js";
// Change code below this line
// лайтбокс
// import * as basicLightbox from "../node_modules/basiclightbox/src/scripts/main.js";
// document.querySelector(".gallery__item").onclick = () => {
//   basicLightbox
//     .create(
//       `
// 		<img width="1400" height="900" src="https://placehold.it/1400x900">
// 	`
//     )
//     .show();
// };

// const asd = document.querySelector("galleryMarkup");
// console.log(asd);
// лайтбокс

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onItemClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`;
    })
    .join("");
}

// const instance = basicLightbox.create(
//   `<img src="${galleryItems[4].original}" alt="desc"/>`
// );
// console.log(instance);

function onItemClick(event) {
  const galleryItem = event.target.classList.contains("gallery__image");
  //   console.log(galleryItem.dataset);
  //   console.log(event.target);
  //   console.log(event.currentTarget);
  if (!galleryItem) {
    return;
  } else {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" alt="desc"/>`
    );
    instance.show(() => console.log("lightbox now visible"));
  }
}

console.log(galleryItems);
