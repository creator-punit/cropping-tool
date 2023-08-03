let cropper = null;
const previewImage = document.getElementById('image');
const cropDiv = document.getElementById('cropper');

function handleImageChange(event) {
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageDataURL = e.target.result;
      previewImage.src = imageDataURL;

      if (cropper !== null) {
        cropper.destroy();
      }

      cropper = new Cropper(previewImage, {
        viewMode: 3
      });
    };

    reader.readAsDataURL(file);
  } else {
    alert('Please select a valid image file.');
  }
}

const imageInput = document.getElementById('input_img');
imageInput.addEventListener('change', handleImageChange);

document.getElementById('CropImageBtn').addEventListener('click', function (e) {
  e.preventDefault();
  const croppedImage = cropper.getCroppedCanvas().toDataURL();
  document.getElementById('output_img').src = croppedImage;
});
