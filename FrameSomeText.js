function frameSomeText(words)
{
    var wordsLength = words.length;
    // get the length of  longest word
    var lenLongest = words[0].length;
    for(var i=1 ;i<wordsLength; i++)
    {
        if(words[i].length >= lenLongest)
        {
            lenLongest = words[i].length;
        }
    }
    //creating the first row of stars for our frame
    var firstRow = "";
    var firstRowLength = lenLongest + 4;
    for(var i = 0; i<firstRowLength; i++)
    {
        firstRow = firstRow + "*";
    }
    console.log(firstRow);
    /*
        Framing all words one by one
    */
    for(var i = 0; i < wordsLength; i++)
    {
        var wordRow = "* " + words[i];
        var wordRowLength = wordRow.length;
        for(var count = wordRowLength; count <= firstRowLength - 2; count++){
          wordRow = wordRow + " ";
        }
        wordRow = wordRow + "*";
        console.log(wordRow)
    }
    //Since the row of stars has been created, print it
    console.log(firstRow);
}
//testing frame
frameSomeText(["Write","good","code","every","day"]);
