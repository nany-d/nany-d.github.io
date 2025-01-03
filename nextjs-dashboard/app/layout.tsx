import '@/app/ui/global.css';
import Header from './ui/header';
import Footer from './ui/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col bg-black sm:px-5">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
