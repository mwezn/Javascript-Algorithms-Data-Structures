function reverseString(str) {
  var arr=str.split("");
  var newarr=[];
  for (var i=str.length;-1<i;i--){
    newarr.push(arr[i]);
  }
  var result=newarr.join("");
  result=result.replace(/[^0-9a-z]/gi, '');
  return result; //this is better than return
}


function palindrome(str){
  newstr=str.replace(/[^0-9a-z]/gi, '');
  newstr=newstr.toUpperCase();
  reversestr=reverseString(str).toUpperCase();
  if (newstr==reversestr){
    return true;
  }
  else{
    return false;
  }
  return newstr;

}
console.log(palindrome("race car/"));