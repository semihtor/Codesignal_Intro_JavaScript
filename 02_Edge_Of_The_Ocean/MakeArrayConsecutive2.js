function makeArrayConsecutive2(statues) {
   var len = statues.length
   statues_sorted=statues.sort(function(a, b){return a-b});
   return(statues_sorted[len-1]-statues_sorted[0]+1-len);
}
