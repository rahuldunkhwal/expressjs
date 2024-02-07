const addDays = require('date-fns/addDays')
const GetDateafterxDays = days => {
  const newDate = addDays(new Date(2020, 7, 22), days)
  const result = `${newDate.getDate()}--${
    newDate.getMonth() + 1
  }--${newDate.getFullYear()}}`
  return result
}
module.exports = GetDateafterxDays()
