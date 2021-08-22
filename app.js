document.getElementById('border').addEventListener('click', function () {
    document.getElementById('players').style.border = "1px solid red";
    document.getElementById('players').style.padding = "10px";
});
function addBackgroundColor() {
    const container = document.getElementsByClassName('player');
    for (const player of container) {
        player.style.backgroundColor = 'lightblue';
    }
}
document.getElementById('add-friend').addEventListener('click', function () {
    const addFriend = document.getElementById('players');
    const createDiv = document.createElement('div');
    createDiv.classList.add('player');
    createDiv.innerHTML = ` 
    <h1>New create</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita ullam eius aut, incidunt hic
    laudantium
    labore
    saepe cum cupiditate dicta, distinctio nisi! Totam sint ratione nisi enim explicabo accusamus molestiae?
</p>
    `
    addFriend.appendChild(createDiv);
})
