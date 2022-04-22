function userPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => userPhotoUpdate(data))
}
userPhotos()

function userPhotoUpdate(photo) {
    const userPhoto = document.getElementById('users');
    for (const user of photo) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>Title: ${user.title}</h1>
        <img src="${user.url}" alt="">
        <img src="${user.thumbnailUrl}" alt="">
        `
        userPhoto.appendChild(div);
        // console.log(user)
    }
}