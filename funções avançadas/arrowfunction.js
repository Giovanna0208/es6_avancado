var sum = (a, b) => a + b;
console.log(sum(4, 7));

//se for só um argumento podemos omitir parênteses
var sum1 = a => a + 10
console.log(sum1(6))

//retornar objetos
var returnobj = (a, b)=> ({ a, b });
console.log(returnobj(2, 9))

function persons(name, age) {
    this.name = name;
    this.age = age;
}
console.log(new persons('Giovanna', 18));

//métodos
var obj = {
    showcontext: function showcontext() {
        this.log('showcontext()')
        //this = obj
        setTimeout(() => {
            this.log('showcontext() after 1000ms');
        }, 1000);
    },
    log: function log(value) {
        console.log(value);
    }
};
obj.showcontext();