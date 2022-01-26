// For image preview
const imageInput = document.getElementById('imageInput');
imageInput.addEventListener('change', (event) => {
  var imagePreview = document.getElementById('imagePreview')
  imagePreview.innerHTML = '';
  Array.from(imageInput.files).forEach(file => {
    var div = document.createElement('div');
    div.classList.add('col-lg-6');
    div.classList.add('m-1');
    div.classList.add('align-middle');
    div.style.backgroundImage = `url('${URL.createObjectURL(file)}')`;
    div.classList.add('img-thumbnail-preview');
    imagePreview.appendChild(div);
  })
})