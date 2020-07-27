//escrever o método por meio de função
function method1() {
    console.log('Giovanna');
};

var obj = {
    method1
};
obj.method1();

//escrever o método diretamente no objeto
var obj1 = {
    sum: function(a, b) {
        console.log(a + b);
    }
}
obj1.sum(4, 5)

var propname = 'test';
var obj2 = {
    [propname + ' concat']: 'prop value'
};
console.log(obj2);

//omitindo a palavra function
var obj3 = {
    sum(a, b) {
        console.log(a + b);
    }
};
obj3.sum(6, 7);