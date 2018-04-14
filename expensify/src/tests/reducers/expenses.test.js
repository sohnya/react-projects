import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if ID is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Test',
    note: '',
    amount: 1000,
    createdAt: 0
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
  const newAmount = 5000
  const updates = {
    amount: newAmount,
  }
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[0].id,
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state[0].amount).toBe(newAmount)
})

test('should not edit expense if the expense is not found', () => {
  const amount = 5000
  const updates = {
    amount
  }
  const action = {
    type: "EDIT_EXPENSE",
    id: '-1',
    updates
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})