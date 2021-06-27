import moment from 'moment'

export const distanceToNow = (datetime) => {
  return moment(datetime).fromNow()
}

export const getFormattedDate = (date) => {
  return moment(date).format('LLL')
}

export const getCurrentYear = () => {
  return moment().format('YYYY')
}

export const getPeriodTime = () => {
  const current = moment()
  const time = current.format('a')
  return time.toLowerCase() === 'am' ? 'Good morning!' : 'Good evening!'
}
