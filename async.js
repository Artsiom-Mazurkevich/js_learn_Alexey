const foo = async () => {
    let prom = await fetch('https://jsonplaceholder.typicode.com/todos/3')
    return await prom.json()
}


console.log(foo())



