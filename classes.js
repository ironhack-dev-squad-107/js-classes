console.log("CLASSES.JS");

// Song
// ----
// Information about the song want to store
// (keys or properties of our song objects)
// - title
// - artist
// - duration
// - releaseDate
// - album
// - artPicture
// - label
// - producers
// - lyrics
// - genres

// Behaviors of songs
// (methods of our song objects)
// - like
// - addToPlaylist
// - share
// - play
// - pause
// - fast forward / rewind

// Class - blueprint for creating objects of a new custom type
// -----------------------------------------------------------------------------
// - Camel case but the FIRST LETTER is uppercase (CoverSong, SpaceInvader)
// - Name is typically SINGULAR (Song, NOT Songs)
class Song {
  // constructor is a special method that gets called WHEN YOU CREATE the object
  // (used for defining the objects' initial keys/properties)
  constructor(songTitle, artistName, runTime) {
    console.log("Creating a new Song...", songTitle);
    // "this" is a special generic name you use to REFER TO THE NEW OBJECT
    this.title = songTitle;
    this.artist = artistName;
    this.duration = runTime;
    this.album = "Unknown";
    this.releaseDate = null;
    this.artPicture = "http://example.com/album-cover.jpg";
    this.likes = [];
  }

  play() {
    // use "this" instead of the object name inside any METHOD
    console.log("PLAYING '" + this.title + "' by " + this.artist);
  }

  like() {
    // use "this" instead of the object name inside any METHOD
    console.log("Added '" + this.title + "' to your Favorites.");
    // push the current date to the likes array
    this.likes.push(new Date());
  }
}

console.log("CLASS SONG -----------------------------------------------------");
var songA = new Song("On ne change pas (title)", "Céline Dion", 248);
songA.album = "On ne change pas (album name)";
songA.releaseDate = new Date(2005, 8);
// var songA = {
//   title: "On ne change pas",
//   artist: "Céline Dion",
//   duration: 248, // duration in seconds,
//   album: "Unknown",
//   releaseDate: new Date(2005, 8),
//   artPicture: "http://example.com/album-cover.jpg"
// };

var songB = new Song("Good Luck", "Vanessa Da Mata & Ben Harper", 278);
// var songB = {
//   title: "Good Luck",
//   artist: "Vanessa Da Mata & Ben Harper",
//   duration: 278,
//   album: "Unknown",
//   releaseDate: null,
//   artPicture: "http://example.com/album-cover.jpg"
// };

songA.play();
songB.play();

songA.like();
songA.like();
songA.like();
songA.like();
songA.like();

console.log(songA);
console.log(songB);
