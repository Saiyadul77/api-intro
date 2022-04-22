function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayUserPost(data))
}
displayPost()

function displayUserPost(posts) {
    const ul = document.getElementById('users');
    console.log(posts)
    for (const user of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        div.innerHTML = `
        <h2>Title: ${user.title}</h2>
        <p>Description: ${user.body}</p>
        `
        ul.appendChild(div);
        console.log(user)
    }
}