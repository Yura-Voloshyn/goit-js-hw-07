import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import SimpleLightbox from "simplelightbox";

// let lightbox = new SimpleLightbox({ elements: ".gallery__item a" });
// console.log(lightbox);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

gallery.addEventListener("click", onItemClick);

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>`;
    })
    .join("");
}
// lightbox.on("show.simplelightbox", onItemClick);
// const instance = basicLightbox.create(
//   `<img src="${galleryItems[4].original}" alt="desc"/>`
// );
// console.log(instance);

function onItemClick(event) {
  event.preventDefault();
  const galleryItem = event.target.classList.contains("gallery__image");
  //   console.log(galleryItem.dataset);
  //   console.log(event.target.src);
  //   console.log(event.currentTarget);
  if (!galleryItem) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
  });
}

// lightbox = ".gallery__item".onItemClick();
// let lightbox = SimpleLightbox.open({
//   items: [...galleryItems],
// });
//   console.log(lightbox);
// SimpleLightbox.open(event.target);
// const instance = basicLightbox.create(
//   `<img src="${event.target.dataset.source}" alt="desc"/>`
// );
// instance.show(() => console.log("lightbox now visible"));

// console.log(galleryItems);
