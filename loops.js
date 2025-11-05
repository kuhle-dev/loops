numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

count = 5;
while (count >= 1) {
    console.log(count);
    count--;
}

for (num of numbers) {
    if(num % 2 === 0) {
        console.log(num);
    }
}
sum = 0
for (number of numbers) {
    sum += number;
}
console.log(sum);