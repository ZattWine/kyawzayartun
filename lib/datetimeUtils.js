import moment from 'moment'

export const distanceToNow = (datetime) => {
  return moment(datetime).fromNow()
}

export const getFormattedDate = (date) => {
  return moment(date).format('MMM d, YYYY')
}

export const getCurrentYear = () => {
  return moment().format('YYYY')
}
