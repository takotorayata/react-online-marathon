// Create a Movie class, the constructor of which accepts 3 parameters: movie name name, movie genre category and start year of startShow.
// The class has a watchMovie() method that returns a phrase and adds a movie name name parameter to it at the end. For example, "I watch the movie Titanic!"
// Create an instance of the movie1 class with the title of the movie "Titanic", the genre "drama" and 1997 release.
// Create an instance of the movie2 class with the title of the movie "Troya", the genre "historical" and the 2004 release.

const Checker = require('./Checker.js');

class Movie {
    constructor(name, category, startShow) {
        this.name = name;
        this.category = category;
        this.startShow = startShow;
    }
    watchMovie() {
        return `I watch the movie ${this.name}!`;
    }
}

const movie1 = new Movie("Titanic", "drama", 1997);
const movie2 = new Movie("Troya", "historical", 2004);

