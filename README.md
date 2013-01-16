## jsunit.js - скрипт юнит-тестирования для Windows Scripting Host

Основан на исходном коде проекта http://www.jsunit.net (автор - Edward Hieatt).

### Порядок использования

````
cscript //nologo jsunit.js /D:<Путь к каталогу с тестами>
````

### Тесты

Тесты - это js-скрипты, имя файла которых начинается с test, например testExample.js.

### Пример теста

````JavaScript
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
````
