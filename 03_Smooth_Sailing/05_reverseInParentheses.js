function reverseInParentheses(s) {
    while (true) {
        let closePar = s.indexOf(")");    
        if (closePar === -1) break;
        let openPar = s.substring(0, closePar).lastIndexOf("(");
        let start = s.substring(0, openPar);
        let middle = s.substring(openPar + 1, closePar).split("").reverse().join("");
        let end = s.substring(closePar + 1, s.length);
        s = start + middle + end;
    }
    return s;
}
