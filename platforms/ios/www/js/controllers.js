angular.module('starter.controllers', ['app.services.utils'])

.controller('DashCtrl', function($scope) {
})

.controller('MusicCtrl', function($scope, Music) {
	if (media) {
		media.stop();
	}

  	$scope.music = Music.all();

})

.controller('MusicDetailCtrl', function($scope, $stateParams, Utils, Music) {
	console.log('detail controller');
	var config = Utils.getConfig();

	//get get selected music
	$scope.music = Music.get($stateParams.musicId);

	//load default icon
	$scope.musicIcon = 'ion-play';
	$scope.musicIconText = 'play';

	var playing = false;
	var mediaStream = config.cdn + config.musicFolder + '/' + $scope.music.stream;
	media = new Media(mediaStream, function(){ 
		console.log('ya')
	}, function(){ 
		console.log('shit')
	});

	$scope.play = function(){
		console.log('play ' + mediaStream);

		if (!playing) {
			playing = true;
			$scope.musicIcon = 'ion-pause';
			$scope.musicIconText = 'pause';
			media.play();
		} else {
			playing = false;
			$scope.musicIcon = 'ion-play';
			$scope.musicIconText = 'play';
			media.pause();
		}
	}

	$scope.sendDownloadLink = function() {
		//call web api to send email
		//maineventrock.com/api/email/download/:id


	}



})

.controller('doSomething', function($scope, Music) {
	console.log('do something ');
	//$scope.music = Music.get($stateParams.musicId);
})



.controller('SocialCtrl', function($scope) {

	
});
