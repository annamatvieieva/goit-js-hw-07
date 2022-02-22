import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    let itemMarkup = `<a class="gallery__item" href=${item.original}>
			  <img class="gallery__image" src=${item.preview} alt=${item.description} />
			</a>`;
    return itemMarkup;
  })
  .join("");

gallery.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
