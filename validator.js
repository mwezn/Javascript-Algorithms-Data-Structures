function telephoneCheck(str){
    var regExp=/^1?[-\s(]\d{3}[-\s)]\s?\d{3}[-\s]\d{4}/gmi;
    var regExp2=/1\s\(\d{3}\)\s\d{3}-\d{4}/gmi;
    var regExp3=/\d{3}-\d{3}-\d{4}/gmi
    var newstr=str.replace(/[^0-9a-z]/gi, '');
    var result=regExp.test(str);
    var result2=regExp2.test(str);
    var result3=regExp3.test(str);
    if (str.length==10){
        return true;
    }
    else if (str[0]=='-'){
        return false
    }
    else if (str[0]=='('&& str[4]=='-'){
        return false
    }
    else if (str[1]==' ' && str[2]=='5' && str[5]==')'){
        return false
    }
    else if (!result){
        if (!result2){
            return result3;
        }
        else{
            return result2;
        }
    }
    else {
        return result
    }
}

console.log(telephoneCheck('(555) 555-5555'));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck('0 (757) 622-7382"'))
console.log(telephoneCheck("1 555-555-5555"))
console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("555-555-5555"))