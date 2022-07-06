function solution(n) {
    //Depth-First Search
    function DFS(L) {
        if (L == 0) return;
        else {
            DFS(L - 1);
            console.log(L);
        }
    }

    DFS(n);
}

solution(3);
