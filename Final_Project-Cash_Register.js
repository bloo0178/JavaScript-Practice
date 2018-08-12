console.clear();

//Function findDecrementAmt adds capability to determine decrement based on unit. NOTE: Values are multiplied by 100 to get passed JS issue with floating point number accuracy for the purposes of exact money amounts.
//unitAmoutnPair format = [unit, amount]
function findDecrementAmt(unitAmountPair) {
  switch (unitAmountPair[0]) {
    case "PENNY":
      return 0.01 * 100;
      break;
    case "NICKEL":
      return 0.05 * 100;
      break;
    case "DIME":
      return 0.10 * 100;
      break;
    case "QUARTER":
      return 0.25 * 100;
      break;
    case "ONE":
      return 1 * 100;
      break;
    case "FIVE":
      return 5 * 100;
      break;
    case "TEN":
      return 10 * 100;
      break;
    case "TWENTY":
      return 20 * 100;
      break;
    case "ONE HUNDRED":
      return 100 * 100;
      break;
  }
}

function arrsEqual(arr1, arr2) {
  for (let i = arr1.length - 1; i > -1; i--) {
    if (arr1[i][0] == arr2[i][0] && arr1[i][1] == arr2[i][1]) {
      return true;
    } else {
      return false;
    }
  }
}

//NOTE: Have to multiply by 100 throughout to work with integers, then divide by 100 to get back to decimals. JS issue with floating point.
function checkCashRegister(price, cash, cid) {
  let changeRequired = (cash - price) * 100;
  let cidCopy = [...cid];
  cidCopy.reverse();
  let finalItemIndex = cidCopy.length - 1;

  let Result = {
    status: "", //INSUFFICIENT_FUNDS, CLOSED, OPEN
    change: []
  };

  for (let i = finalItemIndex; i > -1; i--) {
    let unitChangeAvailable = cid[i][1] * 100;
    let currencyUnit = cid[i][0];
    let unitAmtPair = cid[i];
    //If changeRequired is greater than unitChangeAvailable, take all unitChangeAvailable
    if (changeRequired >= unitChangeAvailable) {
      Result.change.push(unitAmtPair);
      changeRequired -= unitChangeAvailable;
    }
    //If changeRequired is less than unitChangeAvailable and changeRequired is divisible by unitAmount, then take changeRequired and break the loop. 
    else if (changeRequired < unitChangeAvailable && changeRequired % findDecrementAmt(unitAmtPair) == 0) {
      Result.change.push([currencyUnit, (changeRequired / 100)]);
      changeRequired = 0;
      i = -1;
    }
    //If changeRequired is less than unitChangeAvailable and changeRequired is not divisible by unitAmount, then take a partialChangeAmount equal to the maximum amount (divisible by unitAmount) that does not exceed the value of changeRequired. If the partialChangeAmount = 0 (no amount of the unit will not exceed changeRequired), then move on to the next current unit. If the partialChangeAmount is greater than 0, then add the partialChangeAmount into the Result array and reduce changeRequired by the partialChangeAmount.
    else if (changeRequired < unitChangeAvailable && changeRequired % findDecrementAmt(unitAmtPair) != 0) {
      let partialChangeAmount = Math.floor(changeRequired / findDecrementAmt(unitAmtPair)) * findDecrementAmt(unitAmtPair);
      if (partialChangeAmount > 0) {
        changeRequired -= partialChangeAmount;
        Result.change.push([currencyUnit, (partialChangeAmount / 100)]);
      }
    }
    // console.log(changeRequired);
  }

  //Checks status of change left in drawer to determine Result.status
  if (changeRequired == 0 && arrsEqual(Result.change, cidCopy)) {
    Result.status = "CLOSED";
    Result.change = [...cid];
  } else if (changeRequired == 0) {
    Result.status = "OPEN";
  } else if (changeRequired != 0) {
    Result.status = "INSUFFICIENT_FUNDS";
    Result.change = [];
  }

  return Result;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]
