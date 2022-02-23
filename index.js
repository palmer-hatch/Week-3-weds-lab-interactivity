
// grabbing necessary buttons


// grab input and input button




const selectForm = document.querySelector('form')
selectForm.addEventListener('submit', addMovie)

// creating new html elements



// writing out necessary functions
function addMovie (event){
    event.preventDefault()
        const inputField = document.querySelector("input")
        const movie = document.createElement("li")
        const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
        const movieList = document.querySelector('ul')
    movie.appendChild(movieTitle)
    document.querySelector('ul').appendChild(movie)
    inputField.value = ""
        const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click',deleteMovie)
    
    
}

function deleteMovie(event){
    event.target.parentNode.remove()
}


function crossOffMovie (event) {
    event.target.classList.toggle('checked')

    // const checkIt = document.querySelector('checked')
    // checkIt.textContent = movieList
    // movie.appendChild(movieTitle)
    // check.targe.parentNode(checkIt)
}

// event listener


