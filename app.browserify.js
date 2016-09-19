if (Meteor.isServer) {
	sanitizeFilename = Npm.require('sanitize-filename');
} else {
	sanitizeFilename = require('sanitize-filename');
}