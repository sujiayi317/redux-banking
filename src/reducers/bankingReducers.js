const initialState = 0;

export const bankingReducer = (state = initialState, action) => {
  // if (action.type === "DEPOSIT") {
  //   // logic for Deposit
  // }
  switch (action.type) {
    case 'DEPOSIT':
      // logic for deposit
      return state + action.amount;

    case 'WITHDRAW':
      return state - action.amount;

    case 'COLLECT_INTEREST':
      return state * 1.03;

    case 'DELETE_ACCOUNT':
      return 0;

    default:
      return state; // return the old state
  }
};

