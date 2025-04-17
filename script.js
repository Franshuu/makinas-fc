
document.getElementById('logoInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '200px';
            img.style.marginTop = '10px';
            document.getElementById('logoPreview').innerHTML = '';
            document.getElementById('logoPreview').appendChild(img);
        };
        reader.readAsDataURL(file);
    }
});
