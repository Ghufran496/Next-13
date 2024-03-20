// import { Open_Sans } from "@next/font/google";

// //for varible font dont need to provide weight
// const openSans = Open_Sans({
//   subsets: ["latin"],
//   weight: ["400"], //in this dont need but adding as a example
// });

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={openSans.className}>
//       <head />
//       <body>{children}</body>
//     </html>
//   );
// }
import Link from "next/link";
import styles from "./rootStyles.module.css";
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <h1>
            <Link href="/home" className={styles.homeLink}>
              Globomantics
            </Link>
          </h1>
          <h2>
            <Link href="/blog" className={styles.menuBarLink}>
              Blog
            </Link>
          </h2>
          <h2>
            <Link href="/settings" className={styles.menuBarLink}>
              Settings
            </Link>
          </h2>
          <h2>
            <Link href="/conference" className={styles.menuBarLink}>
              Conference
            </Link>
          </h2>
        </header>
        {children}
      </body>
    </html>
  );
}

//there is localfont too that is different syntax
