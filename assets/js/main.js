var movies = [
    {
        title: "Impostor",
        month: "January"
    },
    {
        title: "Orange County",
        month: "January"
    },
    {
        title: "The Count of Monte Cristo",
        month: "January"
    },
    {
        title: "A Walk to Remember",
        month: "January"
    },
    {
        title: "Big Fat Liar",
        month: "Feb"
    },
    {
        title: "Ice Age",
        month: "Mar"
    },
    {
        title: "Resident Evil",
        month: "Mar"
    },
    {
        title: "Blade II",
        month: "Mar"
    },
    {
        title: "Showtime",
        month: "Mar"
    },
    {
        title: "Changing Lanes",
        month: "Apr"
    },
    {
        title: "Murder by Numbers",
        month: "Apr"
    },
    {
        title: "Spiderman",
        month: "May"
    },
    {
        title: "Insomnia",
        month: "May"
    },
    {
        title: "The Bourne Identity",
        month: "June"
    },
    {
        title: "Murder by Numbers",
        month: "Apr"
    },
    {
        title: "Murder by Numbers",
        month: "Apr"
    },
    {
        title: "Murder by Numbers",
        month: "Apr"
    }
]

var guessesRemaining = 12;
var wins = 0;
var guessParag = document.querySelector('.guess-remaining')
var winCount = document.querySelector('.wins');
var charsUsed = document.querySelector('.chars-used');
var guessedChars = [];







var CurrMovie = getRandomMovie();
startGame();









function startGame(){
    winCount.textContent = wins;
    guessParag.textContent = guessesRemaining;
    var titleArray = CurrMovie.title.toLowerCase().split('');
    var replacedUnders = 0;

    var blankContainer = document.querySelector('.blanks-container');
    while(blankContainer.firstChild){
        blankContainer.removeChild(blankContainer.firstChild);
    }
    while(charsUsed.firstChild){
        charsUsed.removeChild(charsUsed.firstChild);
    }
    for(var i = 0; i < CurrMovie.title.length; i++){
        
        var add = document.createElement("span");
        if(titleArray[i].search(/[^A-Za-z0-9]/) === -1){
            add.textContent = "_";
        }else{
            add.textContent = titleArray[i];
            replacedUnders++;
        }
        add.classList.add("blanks");
        add.dataset.id = `${titleArray[i].toLowerCase()}`;
        blankContainer.append(add);
    }
    var data = document.querySelectorAll('.blanks');
    var remainingUnders = data.length - replacedUnders;

    document.onkeyup = function (e) {
        console.log(e.which);
    if(e.key.length < 2){
    for(let i = 0; i < data.length; i++){
        if(e.key.toLowerCase() === data[i].dataset.id && data[i].textContent === "_"){
            console.log(data[i].textContent)
            data[i].textContent = e.key;
            remainingUnders--;
        }
        
    }
    if(CurrMovie.title.toLowerCase().includes(e.key) === false && guessedChars.indexOf(e.key) === -1){
            guessesRemaining--;
            guessParag.textContent = guessesRemaining;
            guessedChars.push(e.key);
            var sp = document.createElement('span');
            sp.textContent = e.key;
            charsUsed.append(sp);
        }
    if(guessesRemaining <= 0){
        alert('Game Over!');
        CurrMovie = getRandomMovie();
        startGame();
        guessesRemaining = 12;
    }
    if(remainingUnders === 0){
        wins++;
        alert('You win!!');
        guessesRemaining = 12;
        guessedChars = [];
        CurrMovie = getRandomMovie();
        startGame();
    }
    
}
    }
}

function getRandomMovie(){
    var rando = Math.floor(Math.random()*movies.length);
    return movies[rando];
}