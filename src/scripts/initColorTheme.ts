// On page load or when changing themes, best to add inline in `head` to avoid FOUC

const initTheme = () => {
  console.log("test");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    console.log({
      matches: window.matchMedia("(prefers-color-scheme: dark)").matches,
    });
    // document.documentElement.classList.add("light");
    document.documentElement.classList.add("dark");

    console.log({
      dClassList: document.documentElement.classList.contains("light"),
    });
  } else {
    document.documentElement.classList.remove("dark");
  }
};

initTheme();

export default initTheme;
