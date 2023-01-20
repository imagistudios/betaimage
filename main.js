// Get elements from the HTML
const promptInput = document.getElementById("prompt-input");
const generateButton = document.getElementById("generate-button");
const generatedImage = document.getElementById("generated-image");
const loadingMessage = document.getElementById("loading-message");

// Add an event listener to the generate button
generateButton.addEventListener("click", function() {
    // Show the loading message
    loadingMessage.style.display = "block";

    // Prepare the data for the API call
    const data = {
        prompt: promptInput.value,
        width: 512,
        height: 512,
        steps: 50,
        numberOfImages: 1,
        seed: 123456789
    };
    const jsonData = JSON.stringify(data);

    // Prepare the headers for the API call
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer 0903eef6-72a5-4a7c-803f-11e3086cc1f5");

    // Prepare the fetch options
    const options = {
        method: "POST",
        headers: headers,
        body: jsonData
    };

    // Make the API call
    fetch("https://api.leapml.dev/api/v1/images/models/8b1b897c-d66d-45a6-b8d7-8e32421d02cf/inferences", options)
    .then(response => response.json())
    .then(data => {
        // Get the image URL from the API response
        const imageUrl = data.url;

        // Update the src of the generated image
        generatedImage.src = imageUrl;

        // Hide the loading message
        loadingMessage.style.display = "none";

        // Show the generated image
        generatedImage.style.display = "block";
    })
    .catch(error => {
        // Handle any errors that occurred
        console.log(error);
    });
});
