import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map((item) => {
    let itemMarkup = `<div class = "gallery__item">
		<a class="gallery__link" href=${item.original}>
			<img
				class="gallery__image"
				src=${item.preview}
				data-source=${item.original}
				alt=${item.description}
			/>
		</a>
	</div>`;
    return itemMarkup;
  })
  .join("");

gallery.innerHTML = markup;

let instance;

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName != "IMG") {
    return;
  } else {
    const linkOriginal = event.target.dataset.source;

    instance = basicLightbox.create(`
			<img src="${linkOriginal}">
		`);
    instance.show();
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key != "Escape") return;

  if (instance) {
    instance.close();
  }
});
