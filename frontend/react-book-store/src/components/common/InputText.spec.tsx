import { render, screen} from "@testing-library/react";
import InputText from "./InputText";
import {BookStoreThemeProvider} from "../../context/themeContext";
import React from "react";

describe("Title component test", () => {
  it("renders correctly", () => {
    // 1 렌더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="enter here"></InputText>
      </BookStoreThemeProvider>
    );

    // 2 확인
    expect(screen.getByPlaceholderText('enter here')).toBeInTheDocument();
  });

  it('forwardRef test', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="enter here" ref={ref}></InputText>
      </BookStoreThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  })

})