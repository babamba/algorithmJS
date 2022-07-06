function solution(size, arr) {
    let answer = Array.from({ length: size }, () => 0);
    arr.forEach(function (x) {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            // cache hit
            if (x === answer[i]) {
                pos = i;
            }
        }
        // cache miss
        if (pos === -1) {
            for (let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
            answer[0] = x;
        } else {
            // cache hit
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i - 1];
            }
            answer[0] = x;
        }
    });

    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

//---------------------------------//

function solution(size, arr) {
    let answer = [];
    arr.forEach((x) => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            if (x === answer[i]) pos = i;
        }
        if (pos === -1) {
            answer.unshift(x);
            if (answer.length > size) answer.pop();
            console.log('miss : ', answer);
        } else {
            answer.splice(pos, 1);
            answer.unshift(x);
        }
    });

    return answer;
}

// let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
// console.log(solution(5, arr));
