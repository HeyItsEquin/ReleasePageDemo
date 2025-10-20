let downloads = document.getElementsByClassName("download-item");

for(let download of downloads) {
    download.querySelector(".download-item-title").addEventListener("click", function() {
        let btn = download.querySelector(".text-button");
        let dropdown = download.querySelector(".download-item-dropdown");
        btn.classList.toggle("active");
        
        if(btn.classList.contains("active")) {
            dropdown.style.display = "flex";
        } else {
            dropdown.style.display = "none";
        }
    })
}