import { atom, selector } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const todoListState = atom({
    key: 'todoListState',
    default: [],
    effects_UNSTABLE: [persistAtom]
  });

export const selectedDayState = atom({
  key: 'selectedDayState',
  default: (new Date()).toLocaleDateString(),
  effects_UNSTABLE: [persistAtom]
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