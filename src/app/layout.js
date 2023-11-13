import { yekan } from '@/utils/fonts';
import Layout from '../components/layout/Layout';
import './globals.css';
import NextAuthProvider from '../provider/NextAuthProvider';


export const metadata = {
  title: "real estate | Buying and selling advice",
  description: "Property buying and selling site",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={yekan.className}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  )
}
