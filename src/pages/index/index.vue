<script setup lang="ts">
import dayjs from 'dayjs'
import feiliaoIcon from '../../assets/feiliao.png'
import { useFarmland } from '../../composables/useFarmland'

const { farmlandLevel, farmlandCoins, farmlandMansures, farmlandGridCount } = useFarmland()
</script>

<template>
  <view class="tree-hole__page-home bg-neutral-100 min-h-screen">
    <nut-cell>
      <template v-slot:title>
        <nut-noticebar
          class="my2"
          leftIcon="close"
          text="在这什么都善变的人间，我想陪你一起看一看这永远有多远。"
          background="#fff4f3"
          color="#f75b71"
        />
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

    <nut-grid gutter="10" class="mt1">
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

    <nut-cell class="mt4">
      <template v-slot:title>
        <view class="tree-hole__farm-land-container flex-col items-center">
          <view class="tree-hole__farm-land-title flex items-center">
            <nut-icon
              font-class-name="iconfont"
              class-prefix="icon"
              name="nongtian"
              size="32"
              class="mr2"
            />
            <view class="flex-col text-32 ml1">
              <view class="flex items-center">
                <text>这里是我们小树屋下的农场！</text>
              </view>
              <view class="flex-items-center text-24 text-neutral-500">
                说好我们要一起种田，兔兔先在这里帮你实现！
              </view>
            </view>
          </view>

          <!-- 农场积分信息板 -->
          <nut-cell class="tree-hole__farm-land-info mt2 py-6rpx">
            <template v-slot:title>
              <view class="flex items-center">
                <view class="tree-hole__farm-land-coins flex items-center">
                  <nut-icon
                    size="18"
                    font-class-name="iconfont"
                    class-prefix="icon"
                    name="dengji"
                  />
                  <text class="mx1 text-24 text-slate-500/40">农场等级 {{ farmlandLevel }}</text>
                </view>
                <nut-divider direction="vertical" />
                <view class="tree-hole__farm-land-coins flex items-center">
                  <nut-icon size="18" font-class-name="iconfont" class-prefix="icon" name="jinbi" />
                  <text class="mx1 text-24 text-yellow-600/60">金币 {{ farmlandCoins }}</text>
                </view>
                <nut-divider direction="vertical" />
                <view class="tree-hole__farm-land-manure flex items-center">
                  <nut-icon size="30" :name="feiliaoIcon" />
                  <text class="mx1 text-24 text-orange-900/40">肥料 {{ farmlandMansures }}</text>
                </view>
              </view>
            </template>
          </nut-cell>

          <nut-grid gutter="10" class="mt1" square :style="{ paddingLeft: 0 }">
            <nut-grid-item v-for="i in farmlandGridCount" :key="i">
              <template v-slot:icon>
                <nut-icon color="#4600008a" name="footprint" size="16" />
              </template>
              <template v-slot:text>
                <text class="mt2 text-22 text-#4600008a">播种作物</text>
              </template>
            </nut-grid-item>
            <nut-grid-item>
              <template v-slot:icon>
                <nut-icon color="#4600008a" name="uploader" size="16" />
              </template>
              <template v-slot:text>
                <text class="mt2 text-22 text-#4600008a">开垦新地</text>
              </template>
            </nut-grid-item>
          </nut-grid>
        </view>
      </template>
    </nut-cell>
  </view>
</template>

<style lang="scss" src="./index.scss" />
