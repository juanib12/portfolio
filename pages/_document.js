import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta name="description" content="Soy un apasionado desarrollador fullstack con un año de experiencia, con un enfoque especial en la creación de soluciones web robustas y eficientes. Mi conjunto de habilidades abarca diversas tecnologías clave en el desarrollo moderno. Desde el dinamismo y la versatilidad de React.js y Angular, hasta el sólido fundamento de JavaScript, HTML y CSS, tengo la capacidad de crear interfaces atractivas y funcionales que satisfacen las necesidades del usuario. En el backend, tengo experiencia sólida en Node.js, permitiéndome construir aplicaciones escalables y de alto rendimiento. Además, mis habilidades en .NET me brindan un entendimiento profundo de la estructura y la lógica necesaria para desarrollar aplicaciones empresariales robustas. Mi enfoque en el desarrollo fullstack me permite comprender y abordar los desafíos en todas las capas de una aplicación, desde la interfaz de usuario hasta la gestión de datos en el servidor. Mi objetivo es siempre buscar la excelencia técnica y la eficiencia en cada proyecto en el que participo, entregando soluciones de software de alta calidad que satisfagan las necesidades del cliente y superen sus expectativas." />
        <meta name="theme-color" content="#000000" />
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Asap:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3925618271410880"
     crossorigin="anonymous"></script>
        <title>Juan Bianco - Desarrollador FullStack</title>
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-563L071VF6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-563L071VF6');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
