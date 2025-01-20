import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  children: Readonly<ReactNode>;
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <header className="bg-sky-800 text-white p-4">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
