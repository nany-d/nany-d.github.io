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
        <main className="flex min-h-screen flex-col bg-black px-10">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
