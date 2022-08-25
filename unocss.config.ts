import { defineConfig } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
export default defineConfig({
  presets: [
    presetWeapp({
      isH5: process.env.TARO_ENV === 'h5',
      platform: 'taro',
      taroWebpack: 'webpack5'
    })
  ],
  shortcuts: {
    'border-base': 'border-gray-200 dark:border-dark-200',
    'bg-base': 'bg-white dark:bg-dark-100',
    'text-color-base': 'text-gray-900 dark:text-gray-300',
    'text-color-fade': 'text-gray-900:50 dark:text-gray-300:50'
  }
})
