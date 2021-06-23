import moment from 'moment'

export const distanceToNow = (datetime) => {
  return moment(datetime).fromNow()
}

export const getFormattedDate = (date) => {
  const dateString = moment(date).format('MMM d, YYYY')
  return dateString
}

export const getCurrentYear = () => {
  return moment().format('YYYY')
}

export const getPeriodTime = () => {
  const current = moment()
  const time = current.format('a')
  return time.toLowerCase() === 'am' ? 'Goo morning!' : 'Good evening!'
}
