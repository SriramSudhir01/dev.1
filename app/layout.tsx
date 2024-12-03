import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "sonner";
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bgremoval.in'),
  title: {
    default: 'BGRemoval.in - Free AI Background Removal Tool',
    template: '%s | BGRemoval.in'
  },
  description: 'Remove image backgrounds instantly with our AI-powered tool. Free, fast, and no signup required.',
  keywords: ['background removal', 'AI image tool', 'remove background', 'free background remover', 'online photo editor'],
  openGraph: {
    title: 'BGRemoval.in - Free AI Background Removal Tool',
    description: 'Remove image backgrounds instantly with our AI-powered tool',
    url: 'https://bgremoval.in',
    siteName: 'BGRemoval.in',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BGRemoval.in - Free AI Background Removal Tool',
    description: 'Remove image backgrounds instantly with our AI-powered tool'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <Script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_ID}`}
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <link rel="canonical" href="https://bgremoval.in" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-center" richColors closeButton />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}