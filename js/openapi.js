const artworkSelect = document.getElementById("artwork-select");
const btnArtist = document.getElementById("btn-artist");
const btnImage = document.getElementById("btn-image");
const results = document.getElementById("results");

fetch("https://api.artic.edu/api/v1/artworks?limit=10&fields=id,title")
    .then(response => response.json())
    .then(data => {
        const artworks = data.data;

        for (let i=0; i < artworks.length; i++){
            const option = document.createElement("option");
                option.value = artworks[i].id;
                option.innerText = artworks[i].title;
                artworkSelect.appendChild(option);
        }
    })
    .catch(error => console.error(error));

btnArtist.addEventListener("click", function(){
    const id = artworkSelect.value
    results.innerHTML ="";

    if (!id){
        results.innerText = "Please select an artwork first.";
        return;
    }

    fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=artist_display`)
        .then(response => response.json())
        .then(data => {
            const artist = document.createElement("p");
            artist.innerText = `Artist: ${data.data.artist_display}`;
            results.appendChild(artist);
        })
        .catch(error => console.error(error));
});

btnImage.addEventListener("click", function(){
    const id = artworkSelect.value;
    results.innerHTML = "";

    if (!id){
        results.innerText = "Please select an artwork first."
        return;
    }

fetch(`https://api.artic.edu/api/v1/artworks/${id}?fields=image_id`)
    .then(response => response.json())
    .then(data => {
        const imageId = data.data.image_id;

        if(imageId){
            const img = document.createElement("img");
            img.src = `https://www.artic.edu/iiif/2/${imageId}/full/400,/0/default.jpg`;
            img.alt = "Artwork Image";
            results.appendChild(img);
        } else{
            results.innerText = "No image available for this artwork."
        }
})
    .catch(error => console.error(error));
});
