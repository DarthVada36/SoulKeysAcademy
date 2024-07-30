let previewContainer = document.querySelector('scores-preview');
let previewBox = previewContainer.querySelectorAll('preview-s');

document.querySelectorAll('scores-container .score').forEach(product =>{
product.onclick = () =>{
    previewContainer.computedStyleMap.display = 'flex';
let name = product.getAttribute('data-name');
previewBox.forEach(preview =>{
    let target = preview.getAttribute('data-target');
    if(name == target){
        preview.classList.add('active');
    }
});
};
});

previewBox.forEach(close =>{
close.querySelector('ri-close-fill').onclick = () =>{
    close.classList.remove('active');
    previewContainer.computedStyleMap.display = 'none';
};
});