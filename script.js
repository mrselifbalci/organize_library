class Media {
  constructor(title, type) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
    this._type = type;
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  get type() {
    return this._type;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  getAverageRating() {
    return this._ratings.reduce((a, b) => a + b) / this.ratings.length;
  }
  toggleCheckOutStatus() {
    return (this.isCheckedOut = !this.isCheckedOut);
  }
  addRating(value) {
    return this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(title, type, artist, duration) {
    super(title);
    this._artist = artist;
    this._duration = duration;
    this._songs = [];
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
  get duration() {
    return this._duration;
  }
  addSongs(value) {
    this.songs.push(value);
  }
  shuffle() {
    return this.songs.sort(() => Math.random() - 0.5);
  }
}

const historyOfViolence = new Book("History of Violence", "Édouard Louis", 224);

console.log(historyOfViolence.toggleCheckOutStatus());

historyOfViolence.addRating(4);
historyOfViolence.addRating(5);
historyOfViolence.addRating(5);
console.log(historyOfViolence.ratings);

console.log(historyOfViolence.getAverageRating());

const bloodSport = new Movie("Blood Sport", "Jean-Claude Van Damme", 122);

console.log(bloodSport.toggleCheckOutStatus());

bloodSport.addRating(1);
bloodSport.addRating(1);
bloodSport.addRating(5);

const tarkan = new CD("Tarkan", "Kuzu Kuzu", "drama", 10);

tarkan.addSongs("kuzu");
tarkan.addSongs("hh ");
tarkan.addSongs("eefff");
tarkan.addSongs("uuiii");
tarkan.addSongs("adfsd");

console.log(tarkan.shuffle());
