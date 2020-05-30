function formatDate(date) {
  const newDate = new Date(date)
  return `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`
}

export {
  formatDate
}