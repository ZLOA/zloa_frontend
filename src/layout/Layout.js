import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div style={{ height: "66px" }} />
      <div>{children}</div>
    </>
  );
}
