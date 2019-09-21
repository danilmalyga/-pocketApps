var author = document.getElementById('author'),
  send = document.getElementById('send'),
  informationAboutBooks = [],
  classBookTitle = document.getElementsByClassName('book.Title');

send.addEventListener('click', function() {
  fetch(
    `https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?author=${author.value}&api-key=jmUL0xNdFD8NFy0TXZe0AXScRFdomumo`
  )
    .then(data => data.json())
    .then(ty => informationAboutBooks.push(ty.results))
    .then(() => showBooks());
});

function showBooks() {
  ul.innerHTML = informationAboutBooks[0]
    .map((element, index) => {
      if (!element.description) {
        element.description = 'description is absent';
      }
      let obj = {};
      for (var i = 0; i < 3; i += 1) {
        obj[i] = Math.round(Math.random() * 255);
      }
      return `
        <li>
            <figure>
                <figcaption>
                        <div data-index = "${index}"
                        
                            class = "book" 
                            style = "border: 4px double rgb(${obj['0']},${obj['1']},${obj['2']})"
                            
                            
                            >
                            
                            <div class="bookTitle">${element.title}</div> </br>
                            <div class="bookAuthor">by ${element.author}</div>
                            <div class="bookDescription"> <span class="des">description</span></br>${
                              element.description
                            }</div>
                        </div>
                </figcaption>
            </figure>
        </li>
        `;
    })
    .join('');
  informationAboutBooks = [];
}

document.querySelector('.ulClass').addEventListener('click', showInf);
function showInf(event) {
  event.path[0].childNodes[7].style.display = 'block';
}
