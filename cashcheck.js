var obj1={status: "INSUFFICIENT_FUNDS", change: []}


var US_Coins={
  "PENNY":0.01,
  "NICKEL":0.05,
  "DIME":0.1,
  "QUARTER":0.25,
  "ONE":1,
  "FIVE":5,
  "TEN":10,
  "TWENTY":20,
  "ONE HUNDRED":100
}
function TotalInTill(cid){
  var Total=0;
  for (var k in cid){
    Total=(Total+cid[k][1]);
  }
  return Total;
}

function changeGiven(price,cash,cid){
  var newarr=[];
  var change =cash-price;
  for (var k=cid.length-1;k>-1;k--){
    
    var RemCount=(change/US_Coins[cid[k][0]]);
    if (change<=US_Coins[cid[k][0]]){
      continue;
    }
    else if(change> US_Coins[cid[k][0]] && change !=0.0){
      var correctNotes=Math.min(Math.floor(RemCount)*US_Coins[cid[k][0]],cid[k][1]);
      newarr.push([cid[k][0],correctNotes]);
      change=(change-correctNotes).toFixed(2);
      continue;
    }
    
  
  
  }
  if(TotalInTill(newarr)<change){
    return obj1;
  }
  return { status: "OPEN", change :newarr};
}


function checkCashRegister(price, cash, cid) {
  var change=cash-price;
  var obj2={status: "CLOSED", change:cid}
  
  if (change>TotalInTill(cid)){
    return obj1
  }
  else if (change==TotalInTill(cid)){
    return obj2
  }
  else {
    return changeGiven(price,cash,cid)
  }
  
    
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], 
["QUARTER", 0],["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], 
["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], 
["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) )

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], 
["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))