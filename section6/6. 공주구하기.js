function solution(n, k) {
    let answer;
    let queue = Array.from({ length: n }, (v, i) => i + 1);
    console.log('initial queue : ', queue);
    // length가 0이면 빠져나오도록.
    while (queue.length) {
        // shift()로 제일 앞 부분을 빼주고 push로 제일마지막에 넣어준다.
        for (let i = 1; i < k; i++) {
            console.log('k : ', k, ' i : ', i);
            queue.push(queue.shift());
            console.log('queue ', queue);
        }

        queue.shift();

        // 제일 마지막에 남는 것은 shift 처리 후 리턴값을 변수에 할당하고 loop 빠져나감
        if (queue.length === 1) answer = queue.shift();
    }
    return answer;
}

console.log(solution(8, 3));
