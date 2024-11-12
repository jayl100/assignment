export type ThemeName = "light" | "dark";
type ColorKey = "primary" | "background" | "secondary" | "third"

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: 'brown',
    background: 'lightgrey',
    secondary: "#222222",
    third: "#d9d9d9"
  },
};

export const dark: Theme = {
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: '#00d3f3',
    third: 'blue',
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
};