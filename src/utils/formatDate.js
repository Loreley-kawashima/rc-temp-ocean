import dayjs from "dayjs"
import ja from "dayjs/locale/ja"
dayjs.locale(ja)

export const formatDate = date => {
  return dayjs(date).format("YYYY.MM.DD")
}
