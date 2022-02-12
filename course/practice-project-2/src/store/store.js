
import { atom } from 'jotai'

// [
//     {
//         id: 0,
//         title: "Sushi",
//         description: "Finest fish and veggies",
//         price: 22.99
//     },
//     {
//         id: 1,
//         title: "Schnitzel",
//         description: "A german specialty!",
//         price: 16.50
//     },
//     {
//         id: 2,
//         title: "Barbecue Burger",
//         description: "American, raw, meaty",
//         price: 12.99
//     },
//     {
//         id: 3,
//         title: "Green Bowl",
//         description: "Healthy... and green...",
//         price: 18.99
//     },
// ]

export const mealsAtom = atom(async (get) => {
    const response = await fetch('https://react-course-51f89-default-rtdb.firebaseio.com/meals.json')
    const data = await response.json()

    const meals = []

    for (const key in data) {
        const meal = data[key]
        meals.push({
            id: key,
            name: meal.name,
            description: meal.description,
            price: meal.price
        })
    }

    return meals
})
export const cartAtom = atom({})
export const cartListAtom = atom((get) => {
    const cart = get(cartAtom)
    return Object.values(cart)
})
export const cartCountAtom = atom((get) => {
    const cart = get(cartListAtom)
    return cart.reduce((acc, item) => acc + item.amount, 0)
})
export const cartTotalAtom = atom((get) => {
    const cart = get(cartListAtom)
    return cart.reduce((acc, item) => acc + (item.amount * item.meal.price), 0).toFixed(2)
})

export const showCartAtom = atom(false)