let lunaciaController = {
	index: function (req, res, next) {
		if (req.session.user == undefined) {
			res.render('index');
		} else {
			res.redirect("/lunacia")
		}
	},
}

module.exports = lunaciaController