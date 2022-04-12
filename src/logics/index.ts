import dayjs from 'dayjs'
import 'dayjs/locale/zh'

export const isDark = useDark()
export const englishOnly = useStorage('antfu-english-only', false)

export function formatDate(d: string | Date) {
  const date = dayjs(d)
  if (date.year() === dayjs().year())
    return date.locale('zh').format('MM月DD日')
  return date.locale('zh').format('YYYY年MM月DD日')
}
