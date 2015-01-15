angular.module('app.services.utils', [])

/**
 * A simple example service that returns some data.
 */
.factory('Utils', function(){

	return {

		getConfig: function() {
			return {
				cdn: 'http://d2c01bbfd6u9z4.cloudfront.net/',
				bucket: 'themainevent',
				musicFolder: 'music',
			};	
		},

		//returns device information
	    getDevice: function() {

	      if (typeof device == 'undefined') {
	        device = null;
	      }

	      var dev = {
	        model: (device ? device.model : null),
	        cordova: (device ? device.cordova : null),
	        platform: (device ? device.cordova : null),
	        uuid: (device ? device.uuid : null),
	        version: (device ? device.version : null),
	        connection: this.getConnection()
	      };

	      return dev;
	    },

	    //get device connection status
	    getConnection: function() {

	      var connection = null;

	      if (navigator.connection) {

	        var networkState = navigator.connection.type;

	        var states ={};
	        states[Connection.UNKNOWN]  = 'unknown';
	        states[Connection.ETHERNET] = 'Ethernet connection';
	        states[Connection.WIFI]     = 'WiFi connection';
	        states[Connection.CELL_2G]  = 'Cell 2G connection';
	        states[Connection.CELL_3G]  = 'Cell 3G connection';
	        states[Connection.CELL_4G]  = 'Cell 4G connection';
	        states[Connection.CELL]     = 'Cell generic connection';
	        states[Connection.NONE]     = 'none';


	        connection = states[networkState];

	      }

	      return connection;

	    },

	    isOnline: function() {
	      var phone = this.getDevice();
	      //if (phone.connection === null || phone.connection == 'none') {
	      if (phone.connection == 'none') {
	        return false;
	      }
	      return true;
	    },

	    alert: function() {

	    }

		
	};

});