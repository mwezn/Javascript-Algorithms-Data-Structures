var roman=[
  [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],[100,"C"],[90,"XC"],[50,"L"],[40,"XL"],
  [10,"X"], [9,"IX"], [5,"V"], [4, "IV"], [1,"I"]]


function convertToRoman(num){
  var n=roman.length;
  var newstr="";
  for (var i=0; i<n;i++){
    while (roman[i][0]<=num){
      newstr+=roman[i][1];
      num-=roman[i][0];
      }
    }
  return newstr;
  
  
}



 //DCXLIX//
console.log(convertToRoman(2000));
console.log(convertToRoman(901));
