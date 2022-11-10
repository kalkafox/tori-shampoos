import { Html, Head, Main, NextScript } from 'next/document'


const Document = () => (
    <Html>
        <Head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="og:type" content="website" />
            <meta
                name="og:description"
                content="Potion-sized bottles made by the little purple Fox himself. Each one is guaranteed to keep your fur, or hair, nice and soft, shiny, and smelling great for days. On average a bottle will get three uses. Be sure to visit Tori for refills, and to try other scents!"
            />
            <meta name="og:title" content="Tori's Home-Made Shampoos" />
            <meta
                name="og:image"
                content="https://db17gxef1g90a.cloudfront.net/toroy.jpg"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway&family=Rubik+Marker+Hatch&display=swap&family=Pacifico&display=swap&family=Poppins&display=swap"
                rel="stylesheet"
            />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
)

export default Document