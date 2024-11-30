export type ThemeName = "light" | "dark";
export type ColorKey = "primary" | "background" | "secondary" | "third" | "border" | "text";
export type HeadingSize = "small" | "medium" | "large";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonScheme = "primary" | "normal" | 'like';
export type LayoutWidth = "small" | "medium" | "large";
export type MediaQuery = "mobile" | "tablet" | "desktop";



interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  }
  button: {
    [key in ButtonSize]: {
      fontSize: string;
      padding: string;
    }
  }
  buttonScheme: {
    [key in ButtonScheme]: {
      color: string;
      backgroundColor: string;
    }
  }
  borderRadius: {
    default: string;
  }
  layout: {
    width: {
    [key in LayoutWidth]: string;
    };
  };
  mediaQuery: {
    [key in MediaQuery]: string;
  };
}

export const light: Theme = {
  name: 'light',
  color: {
    primary: '#00599D',
    background: 'lightgrey',
    secondary: "#5f5f5f",
    third: "#d9d9d9",
    border: 'grey',
    text: 'black',
  },
  heading: {
    large: {
      fontSize: "2rem",
    },
    medium: {
      fontSize: "1.5rem",
    },
    small: {
      fontSize: "1rem",
    },
  },
  button: {
    large: {
      fontSize: "1.5rem",
      padding: "1rem 2rem",
    },
    medium: {
      fontSize: "1rem",
      padding: "0.5rem 1rem",
    },
    small: {
      fontSize: "0.75rem",
      padding: "0.25rem 0.5rem",
    },
  },
  buttonScheme: {
    primary: {
      color: 'white',
      backgroundColor: 'midnightblue',
    },
    normal: {
      color: 'black',
      backgroundColor: 'lightgrey',
    },
    like: {
      color: 'white',
      backgroundColor: 'coral',
    },
  },
  borderRadius: {
    default: "4px",
  },
  layout: {
    width: {
      large: "1020px",
      medium: "760px",
      small: "320px",
    },
  },
  mediaQuery: {
    mobile: "(max-width: 768px)", // 768px 이하 에서 동작
    tablet: "(max-width: 1024px)", // 1024 px 이하에서 동작
    desktop: "(min-width: 1025px)", // 1025px 이상에서 동작
  },
};

export const dark: Theme = {
  ...light, // 라이트의 항목을 가져오겠다. (폰트사이즈의 경우 수정이 필요없기에)
  name: 'dark',
  color: {
    primary: 'coral',
    background: 'midnightblue',
    secondary: '#00d3f3',
    third: 'blue',
    border: 'grey',
    text: 'black',
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