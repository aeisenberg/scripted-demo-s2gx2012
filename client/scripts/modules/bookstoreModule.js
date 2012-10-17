/*jslint browser: true */
/*global console define*/
define(function() {

	var books = [
		"Beginners JavaScript",
		"JavaScript - the good parts"
		];
		
	/** @param {Text} node */
	var appendToOutput = function(node) {
		document.getElementById("output").appendChild(node);
	};
	
	var appendNewline = function() {
		appendToOutput(document.createElement("br"));
	};
	
		
	return {
		/**
		 * @param {string} username
		 * @param {number} booknumber
		 */
		buyBook: function(username, booknumber) {
			/** @type String */
			var book = books[booknumber];
			// make something up
			console.log(username+" is purchasing '"+book+"'");
			var node = document.createTextNode(username+" is purchasing '"+book+"'");
			appendToOutput(node);
			appendNewline();
			return book;
		}
	};
});

