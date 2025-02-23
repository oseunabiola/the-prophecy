import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

export { Home };

const Nav = () => {
  return (
    <header>
      <PageContainer>
        <div className="m-4 flex items-center justify-between bg-primary px-5 py-5">
          <Link to="/" className="text-xl font-semibold">
            That all may Prophesy
          </Link>
          <nav>
            <ul className="flex gap-x-6">
              <li>
                <Link to="/">The Book</Link>
              </li>
              <li>
                <Link to="/">Enroll for Mentorship</Link>
              </li>
              <li>
                <Link to="/">Join Community</Link>
              </li>
              <li>
                <Link to="/">The Author</Link>
              </li>
              <div className="cta |">
                <Link to="" className="rounded-md bg-black px-8 py-3 text-alt">
                  Order Now
                </Link>
              </div>
            </ul>
          </nav>
        </div>
      </PageContainer>
    </header>
  );
};

const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto w-10/12 xl:w-[83%]">{children}</div>;
};
