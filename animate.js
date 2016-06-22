var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
.after(5000, function() {
	this.animate('phiDance', 5000);
})
.after(3000, function() {
	this.stop();
	this.land();
});