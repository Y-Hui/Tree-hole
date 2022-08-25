<script setup lang="ts">
import dayjs from 'dayjs'
</script>

<template>
  <view class="tree-hole__page-home">
    <nut-cell>
      <template v-slot:title>
        <view class="flex items-center">
          <nut-icon
            font-class-name="iconfont"
            class-prefix="icon"
            name="rili"
            size="64"
            class="mr2"
          />
          <view class="flex-col text-32">
            <view class="flex items-center">
              <text>和琳琳在一起已经</text>
              <text class="tree-hole__days-count mx2 font-bold">
                {{ dayjs().diff(dayjs('2019-06-21'), 'day') }}
              </text>
              <text>天啦！</text>
            </view>
            <view class="flex-items-center text-24 text-neutral-500">
              一辈子那么短，我们要争分夺秒地在一起！
            </view>
          </view>
        </view>
      </template>
    </nut-cell>

    <nut-grid :gutter="10" class="mt1">
      <nut-grid-item>
        <template v-slot:icon>
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="weishengjin" size="56" />
        </template>
        <template v-slot:text>
          <text class="mt2 text-28 text-neutral-500/80">经期记录</text>
        </template>
      </nut-grid-item>
      <nut-grid-item>
        <template v-slot:icon>
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="youxiang" size="56" />
        </template>
        <template v-slot:text>
          <text class="mt2 text-28 text-neutral-500/80">秘密信箱</text>
        </template>
      </nut-grid-item>
      <nut-grid-item>
        <template v-slot:icon>
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="duoyun" size="56" />
        </template>
        <template v-slot:text>
          <text class="mt2 text-28 text-neutral-500/80">每日心晴</text>
        </template>
      </nut-grid-item>
      <nut-grid-item>
        <template v-slot:icon>
          <nut-icon font-class-name="iconfont" class-prefix="icon" name="yanhui" size="56" />
        </template>
        <template v-slot:text>
          <text class="mt2 text-28 text-neutral-500/80">美食收藏</text>
        </template>
      </nut-grid-item>
    </nut-grid>
  </view>
</template>

<style lang="scss" src="./index.scss" />
