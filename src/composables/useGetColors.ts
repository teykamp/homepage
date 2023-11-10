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
  const colors = computed(() => {
    const lightColor = darkModeStore.lightColor as Record<string, string>;
    const darkColor = darkModeStore.darkColor as Record<string, string>;

    return {
      'background-color': darkModeStore.darkMode
        ? inverse
          ? lightColor[backgroundKey]
          : darkColor[backgroundKey]
        : inverse
        ? darkColor[backgroundKey]
        : lightColor[backgroundKey],
      'color': darkModeStore.darkMode
        ? inverse
          ? lightColor[textKey]
          : darkColor[textKey]
        : inverse
        ? darkColor[textKey]
        : lightColor[textKey],
    };
  });

  return colors;
}
