// Good Luck 💪🏾
let arr = [ 0, 0, 9, 8, 6, 5, 4, 1, 1];

let n = arr.length;

let highest= -Infinity;
let secondhighest= -Infinity;

for (let i=0; <n; i++){
    highest = Math.max (highest, arr[i]);
}
for (let i=0; i<n; 1++){
    if (arr[i]< highest{
        secondhighest = Math.max (secondhighest, arr[i]);
    }    )
}
console.log(highest,secondhighest);