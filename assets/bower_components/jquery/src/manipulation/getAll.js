define(["../core"],function(t){function e(e,n){var i="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(n||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(n||"*"):[];return void 0===n||n&&t.nodeName(e,n)?t.merge([e],i):i}return e});