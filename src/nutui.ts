import type { App } from 'vue'

import {
  Button,
  Cell,
  CellGroup,
  Divider,
  Grid,
  GridItem,
  Icon,
  NoticeBar
} from '@nutui/nutui-taro'
export function useNutUIComponents(app: App) {
  app
    .use(Button)
    .use(Cell)
    .use(CellGroup)
    .use(Icon)
    .use(Grid)
    .use(GridItem)
    .use(Divider)
    .use(NoticeBar)
}
