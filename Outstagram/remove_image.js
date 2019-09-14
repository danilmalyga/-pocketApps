function removeImage(event) {
    const index = event.target.dataset.index;
    index && images.splice(index, 1);  // не ясно как работает оператор
    displayImages(images, imagesList);
    localStorage.setItem('images', JSON.stringify(images));
}
