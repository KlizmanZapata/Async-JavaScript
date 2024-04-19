function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next().value); // { value: 1, done: false }
console.log(g.next().value); // { value: 2, done: false }
console.log(g.next().value); // { value: 3, done: false }


function* iterate(array){
    for(let value of array){
        yield value;
    }
}

const it = iterate(['Klizman', 'Steven', 'John', 'Ana', 'Maria']);
console.log(it.next().value); // Klizman
console.log(it.next().value); // Steven
console.log(it.next().value); // John
console.log(it.next().value); // Ana
console.log(it.next().value); // Maria