import { render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";
test("contact page",()=>{
    render(<Contact/>);
    const heading=screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
})