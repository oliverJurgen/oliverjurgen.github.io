const updateTheme = () => {
  if (localStorage.theme === "light") {
    localStorage.theme = "dark";
    return;
  }
  localStorage.theme = "light";
};

updateTheme();

export default updateTheme;
