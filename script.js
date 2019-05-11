
const searchInput = document.querySelector('.search'),
      suggestions = document.querySelector('.suggestions'),
      cities = [];
      searchInput.addEventListener('keyup',displayMatches);

fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
.then(blob => blob.json())
.then(data => cities.push(...data));


function findMatches(wordToMatch, cities){
    return cities.filter(place => {
        const regex = new RegExp (wordToMatch,'i');
        return  place.city.match(regex);  
    })
}

function displayMatches (){
    const matchArray = findMatches(this.value, cities),
          a = this.value,
          regex = new RegExp (this.value,'i');
    suggestions.innerHTML = matchArray.map(place =>{
        return `
        <li class = "oneCity">
        <a title="to Wikipedia" href="https://ru.wikipedia.org/wiki/${place.city}">${upperCaseWord(place.city.replace(regex,"<span class = 'ss'>"+ this.value.toLowerCase() +"</span>"))  + "<span class = 'placePop'>" + '</br>' + " population is " + place.population + "</span>"}</a></li> </br>                                        
        `}).join('');  
        if (!this.value){
            suggestions.innerHTML = ""
        }
    }

    function upperCaseWord (text){
        let x,
        temp = 0,
        newString = "",
        size = text.length;
            for(x = 0; x < size; x += 1){
                if (text[x] === "<" && temp === 0){
                    temp += 1;
                    newString += text.substring(x, text.indexOf(">")+1)
                    x = text.indexOf(">");
                }
                else if (text[x] === "<" && temp === 1){
                    temp += 1;
                    newString += text.substring(x, text.lastIndexOf(">")+1)
                    x = text.lastIndexOf(">");
                }
                else if ( text[text.indexOf("<") - 1] === undefined && text[x-1] === ">" && temp === 1){
                    newString += text[x].toUpperCase();
                }
                else if ( text[text.indexOf("<") - 1] === "-" && text[x-1] === ">" && temp === 1){
                    newString += text[x].toUpperCase();
                }
                else if ( text[text.indexOf("<") - 1] === " " && text[x-1] === ">" && temp === 1){
                    newString += text[x].toUpperCase();
                }
                else {
                    newString += text[x];
                }
                
            }
            //console.log (newString);
        return newString;
    }


    