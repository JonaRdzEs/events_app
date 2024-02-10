export const formatCityName = (name) => {
  if (name) {
    const formatedName = name.replace("-", " ");
    return formatedName
      .split(" ")
      .map((word) => {
        const firstLetter = word.charAt(0).toUpperCase();
        return firstLetter + word.slice(1);
      })
      .join(" ");
  } else {
    return "";
  }
};
