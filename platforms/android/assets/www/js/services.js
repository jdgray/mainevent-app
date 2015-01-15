angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Music', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var music = [
    { id: 0, name: 'Fire Inside', stream: '01_Fire_Inside.mp3', download: '01_Fire_Inside.m4a'  },
    { id: 1, name: 'Stand United', stream: '02_Stand_United.mp3', download: '02_Stand_United.m4a'  },
    { id: 2, name: 'Are You Happy', stream: '03_Are_You_Happy.mp3', download: '03_Are_You_Happy.m4a' },
    { id: 3, name: 'Fight', stream: '04_Fight.mp3', download: '04_Fight.m4a' },
    { id: 4, name: 'Heroes Day', stream: '05_Heroes_Day.mp3', download: '05_Heroes_Day.m4a' },
    { id: 5, name: 'Six Feet Underground', stream: '06_Six_Feet_Underground.mp3', download: '06_Six_Feet_Underground.m4a' }
  ];

  //http://d2c01bbfd6u9z4.cloudfront.net/music/

  return {
    all: function() {
      return music;
    },
    get: function(musicId) {
      // Simple index lookup
      console.log(music[musicId]);
      return music[musicId];
    }
  }
});
