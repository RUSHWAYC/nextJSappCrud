import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </body>
  </html>
);

export default RootLayout;
