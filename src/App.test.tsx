import { render, screen } from "@testing-library/react";

import App from "./App";

const userDataTest = [
  {
    avatar_url: "https://avatars.githubusercontent.com/u/5498964?v=4",
    check: false,
    id: 5498964,
    login: "changkun",
    name: "changkun",
    url: "https://api.github.com/users/changkun",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/1384394?v=4",
    check: false,
    id: 1384394,
    login: "leo424y",
    name: "leo424y",
    url: "https://api.github.com/users/leo424y",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/1451365?v=4",
    check: false,
    id: 1451365,
    login: "ChangJoo-Park",
    name: "ChangJoo-Park",
    url: "https://api.github.com/users/ChangJoo-Park",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/18531282?v=4",
    check: true,
    id: 18531282,
    login: "Changochen",
    name: "Changochen",
    url: "https://api.github.com/users/Changochen",
  },
  {
    avatar_url: "https://avatars.githubusercontent.com/u/14730912?v=4",
    check: true,
    id: 14730912,
    login: "changgyhub",
    name: "changgyhub",
    url: "https://api.github.com/users/changgyhub",
  },
];

describe("App has all expected sections", () => {
  it("renders HEADER section", () => {
    render(<App />);
    const textElement = screen.getByTestId("header");
    expect(textElement).toBeInTheDocument();
  });
  it("renders SEARCHBOX section", () => {
    render(<App />);
    const textElement = screen.getByTestId("searchBox");
    expect(textElement).toBeInTheDocument();
  });
  it("renders ICONBAND section", () => {
    render(<App />);
    const textElement = screen.getByTestId("iconBand");
    expect(textElement).toBeInTheDocument();
  });
  it("renders RESULTSCONTAINER section", () => {
    render(<App />);
    const textElement = screen.getByTestId("results");
    expect(textElement).toBeInTheDocument();
  });
});

describe("App searches for users entered", () => {
  it("should get data on users", () => {
    render(<App />);
    const textElement = screen.getByText(/elements selected/i);
    expect(textElement).toBeInTheDocument();
  });
});
