function chessBoardCellColor(cell1, cell2) {

    var cell1LetterToInt = parseInt(cell1.charCodeAt(0)) - 16;
    var cell2LetterToInt = parseInt(cell2.charCodeAt(0)) - 16;

    var total1 = cell1LetterToInt + parseInt(cell1.charAt(1));
    var total2 = cell2LetterToInt + parseInt(cell2.charAt(1));

    console.log(total1);
    console.log(total2);

    return total1 % 2 === total2 % 2;
}
