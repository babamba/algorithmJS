function solution(n) {
    let answer = '';
    function DFS(v) {
        // 종착
        if (v > 7) return;
        else {
            //console.log(v); // 전위순회 위치
            DFS(v * 2); // 왼쪽 자식
            //console.log(v); // 중위순회 위치
            DFS(v * 2 + 1); // 오른쪽 자식
            //console.log(v); // 후위순회 위치
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(1));
