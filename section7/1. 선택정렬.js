function solution(arr) {
    let answer = arr;
    console.log('initial : ', answer);
    for (let i = 0; i < arr.length - 1; i++) {
        let idx = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log('j : ', j);
            console.log('arr[j] : ', arr[j], ' | arr[idx] : ', arr[idx]);
            if (arr[j] < arr[idx]) {
                idx = j;
            }
        }
        [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }

    return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
