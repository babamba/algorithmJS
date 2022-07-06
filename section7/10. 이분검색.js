function solution(target, arr) {
    let answer;
    arr.sort((a, b) => a - b);
    let lt = 0,
        rt = arr.length - 1;
    // mid + 1 = lt
    // mid - 1 = rt
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (arr[mid] === target) {
            answer = mid + 1;
            break;
        } else if (arr[mid] > target) {
            rt = mid + 1;
        } else let = mid + 1;
    }

    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
// 기존 전체순회시 시간복잡도 o(n)
// 이분검색을 통해 찾을 시 o(log2n)
//      lt                          rt
// arr [12, 23, 32, 57, 65, 81, 87, 99]
// mid = (lt + rt) / 2;
// 원리는 계속 반반씩 쪼개서 타겟과 숫자크기를 비교

// 8 / 2 = 4
// 4 / 2 = 2
// 2 / 2 = 1
// 최악의경우 8번을 검색할 내용을 3번으로 축소
// 이분검색은 정렬이 필수
