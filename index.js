// console.log('hello world')

let message = document.querySelector('#message')

function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input').value
    const movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = inputField
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)
    document.querySelector('ul').appendChild(movie)
    console.log(document.querySelector('input').value)
    document.querySelector('input').value = ''
    message.textContent = "Movie Added"
    revealMessage()
}
document.querySelector('form').addEventListener('submit', addMovie)

function deleteMovie(event){
    event.target.parentNode.remove()
    const theMovie = event.target.parentNode.firstChild.textContent
    message.textContent = theMovie + " Deleted!"
    revealMessage()
}

function crossOffMovie(event){
    event.target.classList.toggle("checked")
    let theMovie = event.target.textContent
    if (event.target.classList.contains("checked")){
        message.textContent = theMovie + " Watched"
    } else {
        message.textContent = theMovie + " added back to list"
    }
    revealMessage()
    // console.log(event.target.classList.toggle('checked'))
}

function revealMessage(){
    message.classList.remove('hide')
    setTimeout(()=>{message.classList.add('hide')}, 1000)
}

