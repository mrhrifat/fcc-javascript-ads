const REGISTER_STATUS = {
    closed: 'CLOSED',
    insufficientFunds: 'INSUFFICIENT_FUNDS',
    open: 'OPEN'
}

function checkCashRegister(price, cash, cid) {
    let cashRegister = {
        status: '',
        change: cid
    }
    const changeNeeded = parseFloat(cash - price).toFixed(2)
    const changeAvailable = getTotalCashRegisterChange(cid)
    // console.log(changeAvailable)
    cashRegister.status = getTotalCashRegisterStatus(changeNeeded, changeAvailable)
    // console.log(cashRegister.status)

    if (cashRegister.status === REGISTER_STATUS.insufficientFunds) {
        cashRegister.change = []
        return cashRegister
    }

    cashRegister.change = getCustomerChange(changeNeeded, cid)

    if (changeNeeded > getTotalCashRegisterChange(cashRegister.change)) {
        cashRegister.status = REGISTER_STATUS.insufficientFunds
        cashRegister.change = []
    }

    if (cashRegister.status === REGISTER_STATUS.closed) {
        cashRegister.change = [...cid]
    }

    // console.log(cashRegister.change)
    // console.log(cashRegister)


    return cashRegister

}

function getCustomerChange(changeNeeded, changeInDrawer) {
    const change = []
    let currencyDirectory = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100,
    }

    for (let i = changeInDrawer.length - 1; i >= 0; i--) {
        const coinName = changeInDrawer[i][0]
        const coinTotal = changeInDrawer[i][1]
        const coinValue = currencyDirectory[coinName]
        let coinAmount = (coinTotal / coinValue).toFixed(2)
        let coinsToReturn = 0

        while (changeNeeded >= coinValue && coinAmount > 0) {
            changeNeeded -= coinValue
            changeNeeded = changeNeeded.toFixed(2)
            coinAmount--
            coinsToReturn++
        }

        if (coinsToReturn > 0) {
            change.push(coinName, coinsToReturn * coinValue)
        }
    }
    return change
}

function getTotalCashRegisterStatus(changeNeeded, changeAvailable) {
    if (Number(changeNeeded) > Number(changeAvailable)) {
        return REGISTER_STATUS.insufficientFunds
    }
    if (Number(changeNeeded) < Number(changeAvailable)) {
        return REGISTER_STATUS.open
    }
    return REGISTER_STATUS.closed
}

function getTotalCashRegisterChange(changeInDrawer) {
    let total = 0
    for (let change of changeInDrawer) {
        let changeValue = change[1]
        total += changeValue
    }
    // return total.toFixed(2)
    return total
}



console.log(checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))
// // Should return an object.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// // Should return {status: "OPEN", change: [["QUARTER", 0.5]]}.

console.log(checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]))
// // Should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// // Should return {status: "INSUFFICIENT_FUNDS", change: []}.

// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
// // Should return {status: "INSUFFICIENT_FUNDS", change: []}.

// Should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}