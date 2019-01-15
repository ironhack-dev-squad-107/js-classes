console.log("EXTENDS IS CONNECTED!");

// Inheritance - make a copy of a class with some small modifications
// ------------------------------------------------------------------
// - You can add new properties and/or methods
// - You can REPLACE existing methods (old version of the method is gone)

// CoverSong inherits from Song
class CoverSong extends Song {
  // add new properties for CoverSong
  // (REPLACE the Song constructor with this one)
  constructor(coverTitle, coverArtist, oldArtist) {
    // call the Song class' constructor with "super" (as in "super class")
    // (pass the arguments of the old constructor: title, artist, duration)
    super(coverTitle, coverArtist, 0);

    // add extra properties that Song doesn't have
    // (this is why we are defining a new constructor)
    this.originalArtist = oldArtist;
  }

  // add new methods for CoverSong
  compare() {
    console.log("The " + this.originalArtist + " version is better, man.");
  }
}

var coverA = new CoverSong(
  "Knockin' on Heaven's Door",
  "Guns'N'Roses",
  "Bob Dylan"
);

coverA.play();
coverA.compare();

console.log(coverA);
