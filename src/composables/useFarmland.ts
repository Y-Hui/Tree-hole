import { ref } from 'vue'

export function useFarmland() {
  const farmlandLevel = ref(1)
  const farmlandCoins = ref(0)
  const farmlandMansures = ref(0)
  const farmlandGridCount = ref(3) // 默认有三块土地

  return {
    farmlandLevel,
    farmlandCoins,
    farmlandMansures,
    farmlandGridCount
  }
}
