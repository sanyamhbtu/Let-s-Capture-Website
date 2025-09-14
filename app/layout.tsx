import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Logo from '../public/favicon.ico.jpg'
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Lets Capture - Creative Solutions for Podcasts, Shoots & Digital Branding',
  description: 'Professional podcast rooms, on-site setups, cinematic video & photography shoots, expert editing, graphic design, web design, and social media marketing services.',
  keywords: 'podcast rooms, video shoots, photography, cinematic editing, graphic design, web design, social media marketing',
  authors: [{ name: 'Lets Capture' }],
  creator: 'Lets Capture',
  publisher: 'Lets Capture',
  robots: 'index, follow',
  openGraph: {
    title: 'Lets Capture - Creative Solutions for Podcasts, Shoots & Digital Branding',
    description: 'Professional creative services including podcast rooms, video shoots, editing, and digital marketing.',
    url: 'https://letscapture.com',
    siteName: 'Lets Capture',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lets Capture - Creative Solutions',
    description: 'Professional creative services for modern businesses.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://letscapture.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://res.cloudinary.com/djkkjnmke/image/upload/v1757873313/lets_capture_logo_bo7okd.jpg" className='h-20 w-20' />
      </head>
      <body className={`${poppins.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}