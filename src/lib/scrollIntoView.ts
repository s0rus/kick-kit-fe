export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with ID "${elementId}" not found.`);
  }
};
