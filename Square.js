function square(n){
    var star = "";
    var i, j;
    for (i = 0; i < n; i++){
        for (j = 0; j < n; j++){
            star = star + "#";
        }
        console.log(star);
        star = "";
    } 
}
console.log(square(4));