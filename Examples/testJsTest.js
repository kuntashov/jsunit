(function() { 

	return {

		setUp: function() {
			// Какая-то инициализация...
			inform('Starting...');
		},

		tearDown: function() {
			// Убираем за собой мусор...
			inform('Finishing...')
		},

		testGreenTest: function () {
			assert("Значение должно быть истинно", true);
		},

		testRedTest: function () {
			assert("Значение должно быть истинно", false);
		}
	};

})();