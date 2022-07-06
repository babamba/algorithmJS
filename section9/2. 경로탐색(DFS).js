// 노드개수가 적을떄 적용
function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let check = Array.from({ length: n + 1 }, () => 0);
    console.log('graph : ', graph);
    console.log('check : ', check);
    logPath = [];
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    console.log('graph : ', graph);
    function DFS(v) {
        // 종착점에 왔다는 의미
        // 재귀함수 파라미터 v가 n과 같으면 종착지
        if (v === n) {
            answer++;
            console.log('logPath', logPath);
        } else {
            // n개의 정점 갯수만큼 loop
            for (let i = 1; i <= n; i++) {
                // v라는 정점에서 i라는 정점까지 갈수있는지.
                // 방문한 위치가 아니면. - check[i] === 0
                if (graph[v][i] === 1 && check[i] === 0) {
                    check[i] = 1; // 방문체크
                    console.log('check : ', check);
                    logPath.push(i);
                    DFS(i); // i 정점으로 이동.
                    check[i] = 0; // Back 하는 지점
                    console.log('check : ', check);
                    logPath.pop();
                }
            }
        }
    }
    logPath.push(1);
    check[1] = 1; // 1번부터 시작하기떄문에 1번은 이미 방문한걸로 처리
    DFS(1); //1번 정점부터 출발
    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
