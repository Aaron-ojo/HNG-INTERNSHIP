const timeElement = document.getElementById("test-user-time");
const fileElement = document.getElementById("test-user-avatar");
const fileInput = document.getElementById("file-upload");

function updateTime() {
  timeElement.textContent = Date.now();
}

updateTime();

setInterval(updateTime, 1000);

fileInput.addEventListener("change", function (event) {
  const selectedFile = event.target.files[0];

  if (selectedFile && selectedFile.type.startsWith("image/")) {
    const temporaryImageUrl = URL.createObjectURL(selectedFile);
    fileElement.src = temporaryImageUrl;
  } else {
    alert("Please select a valid image file.");
  }
});
