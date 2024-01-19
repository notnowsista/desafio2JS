    const img = document.getElementById("imagen");
   
    img.onclick = function() {
        if (img.classList.contains("clicked")) {
            img.classList.remove("clicked");
        } else {
            img.classList.add("clicked");
        }
    };

