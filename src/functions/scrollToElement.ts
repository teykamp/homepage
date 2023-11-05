export const scrollToElement = (elementId: string, offset: number = 85 /* Height of header */) => {
  const element = document.getElementById(elementId);
  if (element) {
    const scrollOffset = element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: scrollOffset,
      behavior: 'smooth',
    });
  }
}