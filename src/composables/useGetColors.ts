import { computed, Ref } from 'vue';
import { useDarkModeStore } from '../stores/Store'

interface Colors {
  'background-color': string;
  'color': string;
}

export function useGetColors(
  backgroundKey = 'background',
  textKey = 'text',
  inverse = false
): Ref<Colors> {
  const darkModeStore = useDarkModeStore();

  const colors = computed(() => ({
    'background-color': darkModeStore.darkMode
      ? inverse
        ? darkModeStore.lightColor[backgroundKey]
        : darkModeStore.darkColor[backgroundKey]
      : inverse
      ? darkModeStore.darkColor[backgroundKey]
      : darkModeStore.lightColor[backgroundKey],
    'color': darkModeStore.darkMode
      ? inverse
        ? darkModeStore.lightColor[textKey]
        : darkModeStore.darkColor[textKey]
      : inverse
      ? darkModeStore.darkColor[textKey]
      : darkModeStore.lightColor[textKey],
  }));

  return colors;
}
