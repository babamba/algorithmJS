function solution(meeting) {
    let answer = 0;
    meeting.sort((a, b) => {
        // 종료시간이 같으면 시작시간 기준으로 정렬하고
        if (a[1] === b[1]) return a[0] - b[0];
        // 그게아니면 종료시간 기준으로 정렬한다.
        else return a[1] - b[1];
    });

    console.log('meeting : ', meeting);

    let endTime = 0;
    for (let x of meeting) {
        // 정렬된 회의시간을 순회하면서
        // 시작시간이 종료시간보다 크면 카운팅 처리 및 종료시간 할당
        console.log('x : ', x);
        console.log('et : ', endTime);
        if (x[0] >= endTime) {
            answer++;
            endTime = x[1];
        }
    }

    return answer;
}

let arr = [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
];
console.log(solution(arr));
