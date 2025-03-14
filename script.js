document.addEventListener('DOMContentLoaded', function() {
  setupModal("modal01", "img01", "modalImg01");
  setupModal("modal02", "img02", "modalImg02"); 
  setupModal("modal03", "img03", "modalImg03");
  setupModal("modal04", "img04", "modalImg04");
  setupModal("modal05", "img05", "modalImg05");
  setupModal("modal06", "img06", "modalImg06");                
  setupModal("modal07", "img07", "modalImg07");
  setupModal("modal08", "img08", "modalImg08");
  setupModal("modal09", "img09", "modalImg09");
  setupModal("modal10", "img10", "modalImg10");
  setupModal("modal11", "img11", "modalImg11");
  setupModal("modal12", "img12", "modalImg12");
  setupModal("modal13", "img13", "modalImg13");
  setupModal("modal14", "img14", "modalImg14");
  setupModal("modal15", "img15", "modalImg15");
  setupModal("modal16", "img16", "modalImg16");
  setupModal("modal17", "img17", "modalImg17");
});

function setupModal(modalId, imgId, modalImgId) {

    // Get the modal
  var modal = document.getElementById(modalId);

  // Get the image and insert it inside the modal
  var img = document.getElementById(imgId);
  var modalImg = document.getElementById(modalImgId);

  if (img && modal && modalImg) {
        img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        };
        
        // Get the <span> element that closes the modal
        var span = modal.querySelector(".close");
        if (span){
            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
            modal.style.display = "none";
            };
        }

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
        };
    } 
    else {
    console.error("One or more elements not found:", modalId, imgId, modalImgId);
  }
}
