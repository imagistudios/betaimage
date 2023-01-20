function generateImage() {
    document.getElementById("text-input").submit();
}

document.getElementById("text-input").addEventListener("submit", function(event) {
    event.preventDefault();
    var imageContainer = document.getElementById("image-container");
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var img = document.createElement("img");
            img.src = xhr.responseText;
            imageContainer.appendChild(img);
        }
    }
    xhr.send(new FormData(this));
});
