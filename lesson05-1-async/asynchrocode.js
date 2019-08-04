console.log('Act 1');

setTimeout(function(){
    console.log('Act 2');
}, 10000);

console.log('Act 3');

setTimeout(function(){
    console.log('Act 4');
}, 9999);

console.log('Act 5');

var act6 = () => {
    console.log('Act 6');
}

setTimeout(act6, 4000); //не уходит из стэка вызова в Web APIs

console.log('Act 7');