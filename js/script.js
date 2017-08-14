(function () {
	function accordion(parentElementClass, itemClassName, modificator) {
		// выбираем родительский элемент
		var parent = document.getElementsByClassName(parentElementClass)[0];

		// вешаем обработчик события на родителе
		parent.addEventListener("click", function (e) {
			e.preventDefault();
			var currentTarget = e.target.parentNode;
			console.log(this);


			// по клику на элемент проверяем класс и в зависимости от наличия модификатора,
			// скрываем либо раскрываем элемент
			if (currentTarget.className === itemClassName ) {
				currentTarget.classList.toggle(modificator)
			}else if (currentTarget.className === itemClassName + " " + modificator) {
				currentTarget.className = itemClassName;
			} 

			// находим соседние элементы 
			var nextSib = e.target.parentNode.nextElementSibling;
			var prevSib = e.target.parentNode.previousElementSibling;

			// запускаем два цикла для снятия активное класса с соседних элементов

			// проверяем все соседние элементы, следующие за элементом,
			// и убираем модификатор, если присутствует
			while (nextSib) {
				if (nextSib.className === itemClassName + " " + modificator) {
					nextSib.classList.toggle(modificator);
				}
				nextSib = nextSib.nextElementSibling;
			}
			// проверяем все соседние элементы, перед элементом,
			// и убираем модификатор, если присутствует
			while (prevSib) {
				if (prevSib.className === itemClassName + " " + modificator) {
					prevSib.classList.toggle(modificator);
				}
				prevSib = prevSib.previousElementSibling;
			}
		})
	}

accordion("team__list", "team__item", "team__item_active");
accordion("burger-menu__list", "burger-menu__item", "burger-menu__item_active");
})();


