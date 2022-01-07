// modified from https://stackoverflow.com/questions/31931/whats-the-simplest-way-to-decrement-a-date-in-javascript-by-1-day
export function addDaysToDate(date, days) {
    var temp = date.getTime()
    temp += 86400000 * days
    return new Date(temp)
}