let handle = {
  toggleLike: function (event) {
    let likeButton = event.target.closest("#like");
    if (likeButton) {
      let isLiked = likeButton.classList.contains("liked");

      if (isLiked) {
        likeButton.classList.remove("liked");
        likeButton.classList.add("like");
      } else {
        likeButton.classList.remove("like");
        likeButton.classList.add("liked");
      }
    }
  },
  addFavoris: function () {
    let likeButtons = document.querySelectorAll(".film_container #like");
    likeButtons.forEach((button) => {
      button.addEventListener("click", handle.toggleLike);
      button.addEventListener("click", function (event) {
        let card = event.target.closest(".card"); // Récupérer la carte parente du bouton like
        if (card) {
          let filmTitle = card.querySelector(".details_title").innerText;
          let filmImage = card.querySelector(".poster img").getAttribute("src");
          let filmGenre = card.querySelector(".details_genre").innerText;
          let filmYear = card.querySelector(".details_date").innerText;

          let filmDetails = {
            title: filmTitle,
            image: filmImage,
            genre: filmGenre,
            year: filmYear,
          };

          // Récupérer les films existants du cookie
          let existingValue = document.cookie.replace(
            /(?:(?:^|.*;\s*)favorisList\s*\=\s*([^;]*).*$)|^.*$/,
            "$1"
          );
          let existingObject = existingValue ? JSON.parse(existingValue) : [];

          const findedIndex = existingObject.findIndex(
            (obj) =>
              obj.title === filmDetails.title && obj.image === filmDetails.image
          );
          console.log(existingObject);
          if (findedIndex === -1) {
            existingObject.push(filmDetails);
          } else {
            existingObject.splice(findedIndex,1);
          }

          let filmDetailsString = JSON.stringify(existingObject);
          document.cookie = "favorisList=" + filmDetailsString;
        }
      });
    });
  },
  init: function () {
    handle.addFavoris();
  },
};

document.addEventListener("DOMContentLoaded", handle.init);
