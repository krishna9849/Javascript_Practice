function fiftyThirtyTwenty(ati) {
	
    // const need=ati/2;
    // const want=(ati*3)/10;
    // const saving=(ati)/5;
	// const balanceSheet={
    //     Needs : need,
    //     Wants : want,
    //     Savings : saving
    // }
	// return balanceSheet;

    return {Needs : ati*0.5 , Wants : ati*0.3 , Savings : ati * 0.2 }
}


console.log("my balance sheet " , fiftyThirtyTwenty(10000));


