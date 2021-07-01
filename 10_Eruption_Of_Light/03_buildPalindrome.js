function buildPalindrome(st) {
    
    if(st.split('').reverse().join('') === st){
        return st;
    }

    for (var i = 0; i < st.length; i++) {
        
        var newStr = st.slice();

        for (var j = i; j >= 0; j--) {
            newStr += st[j]
            var reversedStr = newStr.split('').reverse().join('')
            if (newStr === reversedStr){
                return newStr;
            }
            console.log(st[j], newStr, reversedStr)
        }
        console.log("------")
    }

}
