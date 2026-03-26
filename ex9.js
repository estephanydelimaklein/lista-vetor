let nums = [30, 3, 56, 23, 1, 6, 76, 9];
let contador = 0;

for (let i = 0; i < nums.length; i++){
    if (nums[i] > 10){
        contador++;
    }
}
console.log("maior que 10 =", contador);