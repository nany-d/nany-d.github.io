import '@/app/ui/global.css';
import Header from './ui/header';
import Footer from './ui/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-UK">
      <head>
        <meta name="description" content="Contemporary artwork and game design by Danny Martin | Pastel, pen, pencil, digital and mixed media" />
        <meta name="keywords" content="Danny Haus Martin, Danny, Haus, Martin, Art, The Puppeteer, The Puppeteer video game, Danny House Martin, Danny Martin, Danny Haus, Haus Martin, The Puppeteer, Danny The Puppeteer, Puppeteer, Puppet, Thepuppeteer, Danny Puppeteer, Hard video games, Video games, Dark Souls, Legend of Zelda, Retro games, Pixelart, Pixel art, Retro art, 8bit, 8 bit, 8 bit games, Indie games, Indie game developers, Indie games steam, Blinx the time sweeper, small games, short games, cheap games, small videogames, short videogames, cheap videogames, pastel, pen, digital, mixed media, manga, japanese inpsired, manga inspired, architecture inspired, architecture" />
        <meta name="author" content="Danny Martin" />
      </head>
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
