function solution(s) {
    let answer;
    let stack = [];
    for (let x of s) {
        if (x === ')') {
            while (stack.pop() !== '(') {
                console.log('stack: ', stack);
            }
        } else {
            stack.push(x);
            console.log('stack push : ', stack);
        }
    }
    answer = stack.join('');
    return answer;
}

// function solution(s) {
//     let answer;
//     let stack = [];
//     for (let x of s) {
//         if (x === ')') {
//             while (stack.pop() !== '(');
//         } else stack.push(x);
//     }
//     answer = stack.join('');
//     return answer;
// }

let str = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(str));
