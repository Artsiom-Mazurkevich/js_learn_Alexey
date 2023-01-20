//#js_9 2022-11-10

//////////////////////////////////////////////////////////////////////////////////////////////////////

// лексическое окружение (lexical environment) -> {}


//function declaration появляются в объекте лексического окружения сразу после объявления!!!
// поэтому function declaration можно вызвать выше её объявления

fnDeclaration(); // -> {fnDeclaration: Function} -> null

//function declaration
function fnDeclaration() {
    console.log('I am function declaration')
};


//function expression
const expression = function () {};
const expression2 = () => {};


//////////////////////////////////////////////////////////////////////////////////////////////////////









//global lexical environment -> {foo: Function}

function foo() {
    //после объявления, движок для функции создаёт специальную скрытую переменную и эту переменную делает ссылкой на внешнее лексическое окружение
    //[[Environment]] -> global lexical environment
    //functionLexicalEnv {} -> global lexical environment (копируется из переменной [[Environment]])
}



// На каждый вызов функции будет создаваться собственный объект лексического окружения функции
// Как только функция заканчивает своё выполнение объект functionLexicalEnv удаляется
foo()

foo()

foo()


////////////////////////////////////////////////////////////////////////////////////////////////////////







function mer () {
    //[[Environment]] -> globalLexicalEnv
    //merLE -> globalLexicalEnv
    function bar() {
        //[[Environment]] -> merLE
        // переменной [[Environment]] для функции bar создано не будет! Она будет создана только после вызова mer(), когда движок прочитает функцию!
    }
}









////////////////////////////////////////////////////////////////////////////////////////////////////







//recursion

function fibonacci(num) {
    if (num <= 1) {
        return num
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2)
    }
}

console.log(fibonacci(7))



function factorial(num) {
    if (num < 0) {
        return 'error'
    } else {
       return  num * factorial(num - 1)
    }
}
