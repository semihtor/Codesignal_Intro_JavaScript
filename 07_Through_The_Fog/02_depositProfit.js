function depositProfit(deposit, rate, threshold) {
    
    var yearCount = 0;

    do {
        deposit += deposit*rate/100;
        yearCount += 1;
    }
    while (deposit < threshold);

    return yearCount;
}
