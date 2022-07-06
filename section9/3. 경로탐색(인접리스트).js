function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let check = Array.from({ length: n + 1 }, () => 0);
    let logPath = [];

    for (let [a, b] of arr) {
        graph[a].push(b);
    }
    console.log(graph);
    function DFS(v) {
        if (v === n) {
            answer++;
        } else {
            for (let i = 0; i <= graph[v].length; i++) {
                if (check[graph[v][i]] === 0) {
                    check[graph[v][i]] = 1;
                    logPath.push(graph[v][i]);
                    DFS(graph[v][i]);
                    check[graph[v][i]] = 0;
                    logPath.pop();
                }
            }
        }
    }

    check[1] = 1;
    DFS(1);
    return answer;

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
