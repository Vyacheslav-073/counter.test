// Запишем функцию в переменную counter
var counter = (function(){
    
    // Приватные переменные
	var _number;
    
    // Приватные методы
    var _isInteger = function(x) {
        
        // Проверяем целое число или нет
		return (x ^ 0) === x;
	}
    
    var setValue = function(x) {

		if (_isInteger(x)) {

			_number = x;

		} else {

			console.log("Неверное значение!");

		}

	}
    
    var setNumber = function(x){
        _number = x;
    }
    
    var increaseCounter = function(){
        _number++;
    }
    
    var decreaseCounter = function(){
        _number--;
    }
    
    var printCounter = function(){
        console.log(_number);
    }
	
    return {
        setValue,
        increaseCounter,
        decreaseCounter,
        printCounter
    };
}());

counter.setValue(12.33)// Вернёт неверное значение
counter.printCounter();

counter.setValue(5);//0
counter.printCounter();//5
counter.increaseCounter();//6
counter.increaseCounter();//7
counter.decreaseCounter();//6
counter.printCounter();//6