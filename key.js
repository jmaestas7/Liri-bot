var Twitter = require('twitter');
console.log('this is loaded');

var client = new Twitter({
    consumer_key: 'NZOidoJJLl6yQjZRMDvxLiiE3',
    consumer_secret: 'zFn7OGhGRF5TiFwTCWFzZpY6N0sFDV89ThJCYBrdgf4tDB1FkK',
    access_token_key: '48536953-DsYJWRpVeAVZAXaEANkkec1eQ2qZFop1UbB49CVw7',
    access_token_secret: 'fTlhNDJDxK5SbZbIBBUo4F3VUWOUgQeyI9OjURXG2Gvh8',
});

module.exports = client;
