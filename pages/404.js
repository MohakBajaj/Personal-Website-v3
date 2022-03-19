import Link from 'next/link';
import Head from 'next/head';
import Button from '../components/Button';

export default function fourohfour() {
    return (
        <body className="bg-white dark:bg-gray-900">
            <Head>
                <title>Mohak Bajaj | Blog</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="text-center md:text-left flex justify-center items-center flex-col">
                <h1 className='font-primary text-7xl text-gray-600 dark:text-gray-300'>404 Not Found</h1>
                <Link href="/">
                    <a>
                        <Button className='font-primary text-3xl text-gray-600 dark:text-gray-300'>
                            Go Home
                        </Button>
                    </a>
                </Link>
            </div>
        </body>
    )
}