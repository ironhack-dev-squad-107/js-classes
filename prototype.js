function Song(songTitle, artistName, runTime) {
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

Song.prototype.play = function() {
  // use "this" instead of the object name inside any METHOD
  console.log("PLAYING '" + this.title + "' by " + this.artist);
};

Song.prototype.like = function() {
  // use "this" instead of the object name inside any METHOD
  console.log("Added '" + this.title + "' to your Favorites.");
  // push the current date to the likes array
  this.likes.push(new Date());
};

var otherSong = new Song("Oops!...I Did It Again", "Britney Spears", 211);
