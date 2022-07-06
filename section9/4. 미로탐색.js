function solution(board) {
    let answer = 0;
    //        12시  3시  6시  9시
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    function DFS(x, y) {
        //도착점에 왔을때
        if (x === 6 && y === 6) answer++;
        else {
            // 12시 3시 6시 9시 방향 순으로 탐색 (고로 4)
            for (let k = 0; k < 4; k++) {
                let nx = x + dx[k]; // x 좌표
                let ny = y + dy[k]; // y 좌표
                // 좌표를 넘어가지 않고,
                // 벽이 뚫려있는지 0의 경우 확인
                if (
                    nx >= 0 &&
                    nx <= 6 &&
                    ny >= 0 &&
                    ny <= 6 &&
                    board[nx][ny] === 0
                ) {
                    board[nx][ny] = 1;
                    DFS(nx, ny);
                    board[nx][ny] = 0;
                }
            }
        }
    }
    board[0][0] = 1;
    DFS(0, 0);
    return answer;
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
