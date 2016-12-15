var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log("private route hit");
		next();
	},
	logger: function (req, res, next) {
		console.log(req);
		next();
	}
}

module.exports = middleware;