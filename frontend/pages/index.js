import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Deseret Developer TODO</title>
                <link rel="shortcut icon" href="https://cdn.vox-cdn.com/uploads/chorus_asset/file/18298160/favicon.0.jpeg"/>
                <link rel="icon" type="image/png" href="https://cdn.vox-cdn.com/uploads/chorus_asset/file/18298163/favicon-16x16.0.png" sizes="16x16"/>
                <link rel="icon" type="image/png" href="https://cdn.vox-cdn.com/uploads/chorus_asset/file/18298166/favicon-32x32.0.png" sizes="32x32"/>
                <link rel="icon" type="image/png" href="https://cdn.vox-cdn.com/uploads/chorus_asset/file/18298161/favicon-96x96.0.png" sizes="96x96"/>
                <link rel="icon" type="image/png" href="https://cdn.vox-cdn.com/uploads/chorus_asset/file/21958854/deseret-192x192.0.png" sizes="192x192"/>
                <link rel="apple-touch-icon" href="https://cdn.vox-cdn.com/uploads/chorus_asset/file/21958841/deseret-180x180.0.png" sizes="180x180"/>
                <meta name="msapplication-TileImage" content="https://cdn.vox-cdn.com/uploads/chorus_asset/file/18298164/favicon-144x144.0.png"/>
                <meta name="msapplication-TileColor" content="#979797"/>
                <meta name="theme-color" content=""/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Deseret Developer TODO's
                </h1>
            </main>
        </div>
    )
}
