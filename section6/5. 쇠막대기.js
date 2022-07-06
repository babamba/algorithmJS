function solution(s) {
    let answer = 0;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        console.log('stack :', stack);
        // 동일한 막대기이면 스택에 넣는다.
        if (s[i] === '(') stack.push(s[i]);
        else {
            // 여는 괄호에서 바로 닫는괄호가 나올경우 레이저 이므로.
            // stack에서 제거 시킨 후 그동안 스택에 쌓였던 쇠막대기를 카운팅
            stack.pop();
            if (s[i - 1] === '(') answer += stack.length;
            else answer += 1;
        }
    }
    // for(let i=0; i<s.length; i++){
    //     if(s[i]==='(') stack.push('(');
    //     else{
    //         stack.pop();
    //         if(s[i-1]==='(') answer+=stack.length;
    //         else answer++;
    //         //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    //     }
    // }
    return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
