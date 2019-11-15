function triangle(n){
    var star = " ";
    var triangle = " ";
    for (i = 0; i < n; i++) {
        star += "#";
        triangle = star;
        console.log(triangle);
    }
}
    triangle(5);