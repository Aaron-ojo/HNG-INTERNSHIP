// Get elements - using both ID and data-testid for reliability
const timeElement = document.getElementById("test-user-time");
const fileElement = document.getElementById("test-user-avatar"); // This is the UPLOAD avatar
const fileInput = document.getElementById("file-upload");

// Function to update time
function updateTime() {
  timeElement.textContent = Date.now();
}

// Initialize time immediately and update every second
updateTime();
setInterval(updateTime, 1000);

// Handle file upload for the avatar
fileInput.addEventListener("change", function (event) {
  const selectedFile = event.target.files[0];

  if (selectedFile && selectedFile.type.startsWith("image/")) {
    const temporaryImageUrl = URL.createObjectURL(selectedFile);
    fileElement.src = temporaryImageUrl;
    console.log("Avatar updated successfully!");
  } else {
    alert("Please select a valid image file (JPEG, PNG, GIF, etc.).");
  }
});

// Optional: Add loading state for better UX
fileInput.addEventListener("click", function () {
  console.log("File selector opened");
});
