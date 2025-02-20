// Welcome to your OOP practice!
// Use this file to write and test your answers to the questions.
console.log('Start practicing OOP concepts!');

// Question 1: Basic Class Creation

class Movie {
    constructor(title, year = "unknown") {
      this.title = title;
      this.year = year;
    }
  
    getDetails() {
      return `${this.title} (${this.year})`;
    }
  }

  const myMovie = new Movie("The Matrix", 1999);
  console.log(myMovie.getDetails());

const myMovie1 = new Movie("The Lion King", 1994);
console.log(myMovie1.getDetails());

const myMovie2 = new Movie("Frozen", 2013);
console.log(myMovie2.getDetails());

class Series extends Movie {
constructor(title, year, episodes) {
    super(title, year);
    this.episodes = episodes;
}
getSeriesDetails() {
    return `${this.title} (${this.year}) - ${this.episodes} episodes`
}
}

const mySeries = new Series("Stranger Things", 2016, 25);
    console.log(mySeries.getSeriesDetails());

const myMovie3 = new Movie("Vibes", "unknown")
console.log(myMovie3.getDetails());