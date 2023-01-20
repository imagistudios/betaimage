function generateImage() {
    var text = document.getElementById("text-area").value;
    var imageContainer = document.getElementById("image-container");

    var data = {
        "prompt": text,
    }
    var headers = new Headers({
        'Content-Type': 'application/json',
    });
    var options = {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
    }
    fetch('generate-image.php', options)
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
                throw new Error('Request failed');
            }
        })
        .then(imageUrl => {
            var img = document.createElement("img");
            img.src = imageUrl;
            imageContainer.appendChild(img);
        })
        .catch(error => {
            console.log(error);
            alert('Request failed. Please check the console for more details.');
        });
}
