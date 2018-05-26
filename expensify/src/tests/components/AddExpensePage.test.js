import React from 'react'
import { shallow, mount } from 'enzyme'
import { AddExpensePage } from "../../components/AddExpensePage"
import expenses from '../fixtures/expenses'

test("Should render AddExpensePage correctly", () => {
  const onSubmit = jest.fn()
  const history = { push: jest.fn() }
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
  expect(wrapper).toMatchSnapshot()
})

test("should handle onSubmit", () => {
  const onSubmit = jest.fn()
  const history = { push: jest.fn() }
  const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />)
  console.log(wrapper)
  console.log(wrapper.text())
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(history.push).toHaveBeenLastCalledWith('/')
})