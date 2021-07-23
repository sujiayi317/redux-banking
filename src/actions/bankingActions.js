export const deposit = (amount) => {
  return {
    type: 'DEPOSIT',
    amount: parseInt(amount),
  };
};

export const withdraw = (amount) => {
  return {
    type: 'WITHDRAW',
    amount: parseInt(amount),
  };
};

export const collectInterest = (amount) => {
  return {
    type: 'COLLECT_INTEREST',
  };
};

export const deleteAccount = () => {
  return {
    type: 'DELETE_ACCOUNT',
  };
};

export const toggleAccount = () => {
  return {
    type: 'TOGGLE_ACCOUNT',
  };
};

// action

// deposit

// const deposit = {
//   type: 'DEPOSIT',
//   amount: 20,
// };

// // withdraw
// const withdraw = {
//   type: 'WITHDRAW',
//   amount: 3,
// };

// // collect interest
// const collectInterest = {
//   type: 'COLLECT_INTEREST',
// };

// // delete account
// const deleteAccount = {
//   type: 'DELETE_ACCOUNT',
// };
