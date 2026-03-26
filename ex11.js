let a = [1, 3, 7, 5, 4];
let b = [];

for (let i = 0; i < a.length; i++){
    b[i] = a[a.length - 1 - i];
}
console.log("invertido =", b);