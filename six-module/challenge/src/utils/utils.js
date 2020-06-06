import dayjs from "dayjs";

function formatDate(date) {
  return dayjs(date).format("DD/MM/YYYY")
}

export {
  formatDate
}
