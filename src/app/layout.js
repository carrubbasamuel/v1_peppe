import NavBar from "@/app/components/navbar/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./global.css"



export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Jost:wght@300&family=Urbanist:ital,wght@1,500&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
