import { atom, selector } from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

export const selectedDayState = atom({
  key: 'selectedDayState',
  default: (new Date()).toLocaleDateString()
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const selectedDay = get(selectedDayState)
    const list = get(todoListState)

    return list.filter(todo => {
      return todo.day === selectedDay
    })
  }
})