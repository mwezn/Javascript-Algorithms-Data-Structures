function rot13(str){
  var n=str.length;
  var newstr='';
  for (var i=0; i <n;i++){
    var char=str.charCodeAt(i);
    console.log('The character code ' + char + ' is equal to ' + str.charAt(i));
    if (65 <= char && char <=77){
      newstr+=String.fromCharCode(str.charCodeAt(i)+13);
      continue;
    }
    else if (77< char && char <= 90) {
        newstr+=String.fromCharCode(65+(str.charCodeAt(i)+13)%13); //This is Modulo arithmetic base 13
    }
    else {
      newstr+=String.fromCharCode(str.charCodeAt(i))
      continue
    }
  }
  console.log(newstr);

}


rot13('SERR PBQR PNZC');