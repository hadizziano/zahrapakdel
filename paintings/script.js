let currentArtwork = 1; // Keeps track of the currently displayed artwork
let currentScale = 1.0; // Keeps track of the current scale

function openModal(imageSrc, caption) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImage.src = imageSrc;
  captionText.innerHTML = caption;
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "none";
  modalImage.style.transform = "scale(1.0)"; // Reset the scale on modal close
  currentScale = 1.0; // Reset the scale value
}

function zoomIn() {
  currentScale += 0.2;
  updateZoom();
}

function zoomOut() {
  currentScale -= 0.2;
  updateZoom();
}

function updateZoom() {
  const modalImage = document.getElementById("modalImage");
  modalImage.style.transform = "scale(" + currentScale + ")";
}

function panLeft() {
  changeArtwork(-1);
}

function panRight() {
  changeArtwork(1);
}

function changeArtwork(direction) {
  currentArtwork += direction;

  if (currentArtwork < 1) {
    currentArtwork = 3; // Wrap around to the last artwork
  } else if (currentArtwork > 3) {
    currentArtwork = 1; // Wrap around to the first artwork
  }

  const artworkElement = document.getElementById(`artwork${currentArtwork}`);
  const artworkImg = artworkElement.querySelector("img");
  const artworkCaption = artworkElement.querySelector(".artwork-name");

  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modalImage.src = artworkImg.src;
  captionText.innerHTML = artworkCaption.innerHTML;
}
function closeModal() {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "none";
  modalImage.style.transform = "scale(1.0)"; // Reset the scale on modal close
  currentScale = 1.0; // Reset the scale value
}
