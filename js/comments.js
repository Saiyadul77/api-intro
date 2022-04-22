function userComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => userCommentsDisplayed(data))
}
userComments()

function userCommentsDisplayed(input) {
    const userComment = document.getElementById('users')
    for (const user of input) {
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>ID ${user.id}</h1>
        <h3>Name: ${user.name}</h3>
        <h5>Email: ${user.email}</h5>
        <p>Description: ${user.body}</p>
        `
        userComment.appendChild(div);
        console.log(user)

    }

}