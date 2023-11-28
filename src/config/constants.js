export const config = {
  BASE_API_URL: 'http://localhost:5001/api/v1',
  API_ROUTES: {
    ADD_INCOME: '/add-income',
    GET_INCOMES: '/get-incomes-by-user-id',
    DELETE_INCOME: '/delete-income',
    ADD_EXPENSE: '/add-expense',
    GET_EXPENSES: '/get-expenses-by-user-id',
    DELETE_EXPENSE: '/delete-expense',
    LOGIN_USER: '/auth/login',
    LOGIN_WITH_GOOGLE: '/auth/googleAuth',
  },
};
