function checkCashRegister(price, cash, cid) {
    let diff = (cash - price).toFixed(2); //find the difference of cash received from customer minus the price of goods sold, set to 2 decimal places
    let change = [];
    let cidCopy = cid.slice(0); //about the simplest way to copy an array to a new array which can be altered
    let moneyArr = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.10],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    for (let i = 8; i >= 0; i--) { //used to iterate through moneyArr, from ONE HUNDRED to PENNY
        let j = 0;
        let k = cid[i][1];
        for (diff; diff >= moneyArr[i][1] && k > 0; diff = (diff - moneyArr[i][1]).toFixed(2)) { //loop runs while diff is greater or equal to the current denomination in moneyArr and the cash in drawer for current denomination hasn't ran out. Subtract one denom from diff per loop
            j++;
            change[i] = [moneyArr[i][0], Number((moneyArr[i][1] * j).toFixed(2))]; //set value for current denom in change array. i.e., when i = 5, change[5] = ["FIVE", 15]; Number value is determined by current denom multiplied by the number of loops counted by j
            cid[i] = [cid[i][0], (cid[i][1] - moneyArr[i][1]).toFixed(2)]; //cash in drawer gets decremented by one denomination per iteration of the inner loop
            k -= moneyArr[i][1]; //k is also decremented to show if/when cash in drawer has ran out. This could be consolidated with code above
        }
    }

    change = (change.filter(function (x) {
        return x
    })).reverse(); //filter out null or empty values from the change array and reverse the order. Could have been mitigated earlier, but easy enough to do here

    if (diff == 0) { //if diff = 0 we know correct change was distributed, but still need to determine OPEN or CLOSED scenario
        for (let l = 0; l < cid.length; l++) { //iterate through cash in drawer array
            if (cid[l][1] > 0) { //if any denomination is left in drawer, return OPEN
                // console.log(JSON.stringify({
                //     status: "OPEN",
                //     change: change
                // }));
                return {
                    status: "OPEN",
                    change: change
                }; //this is the original FCC answer, included for completeness
            } else if (cid[l][1] == 0 && l == cid.length - 1) { //if cash in drawer is still 0 at the end of the loop, then you're out of cash, return CLOSED
                // console.log(JSON.stringify({
                //     status: "CLOSED",
                //     change: cidCopy
                // }))
                return {
                    status: "CLOSED",
                    change: cidCopy
                }; //this is the original FCC answer, included for completeness
            }
        }
    } else { //if diff doesn't equal 0, return INSUFFICIENT_FUNDS because correct change was not given
        // console.log(JSON.stringify({
        //     status: "INSUFFICIENT_FUNDS",
        //     change: []
        // }));
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        } //this is the original FCC answer, included for completeness
    }
}

//change values below to test code (price, cash, cid). Please see browser console for response
console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.00],
    ["DIME", 3.10],
    ["QUARTER", 4.00],
    ["ONE", 30],
    ["FIVE", 15],
    ["TEN", 50],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))