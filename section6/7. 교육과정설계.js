function solution(need, plan) {
    let answer = 'YES';
    let queue = need.split('');
    for (let x of plan) {
        //필수과목 검토
        if (queue.includes(x)) {
            // 필수과목에 포함되있는데 제일 앞에 있지않으면
            // 먼저 들어야 할 필수과목이 존재한다는 것
            if (x !== queue.shift()) return 'NO';
        }
        console.log(queue);
    }
    if (queue.length > 0) return 'NO';

    return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
