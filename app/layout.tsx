import type { Metadata } from "next";
import CookieConsent from "./components/CookieConsent";
import Footer from "./components/Footer";
import { Literata, Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  display: "swap",
  adjustFontFallback: true,
});

const literata = Literata({
  subsets: ["latin", "cyrillic"],
  variable: "--font-literata",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "ДоговорCheck",
  description: "ИИ-сервис для проверки и генерации документов.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${onest.variable} ${literata.variable} scroll-smooth`}>
      <body
        className={`${onest.className} antialiased text-foreground`}
      >
        {children}
        <Footer />
        <CookieConsent />
        <script
          dangerouslySetInnerHTML={{
            __html: `
    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
    ym(99121658, 'init', {webvisor:true, clickmap:true, referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
              `,
          }}
        />
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://mc.yandex.ru/watch/12345678" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>

      </body>
    </html>
  );
}
