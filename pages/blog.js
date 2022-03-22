import Head from "next/head";
import Link from "next/link";
import Social from "../components/Social";
import Lottie from "react-lottie-player";
import lottieJson from "../public/hero_animation.json";
import Button from "../components/Button";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import cls from "classnames";
import Toggle from "../components/Toggle";
import Footer from "../components/Footer";
import Post from "../components/Post";



export default function Blog() {
    const [articles, setArticles] = useState([]);
    const [Fetch, setFetch] = useState(true);
    useEffect(() => {
        if (Fetch) {
            fetch("/api/blog").then(res => res.json()).then(data => {
                setArticles(data);
                setFetch(false);
            });
        }
    })

    const [isNavHidden, setIsNavHidden] = useState(true);
    return (
        <div className="bg-white dark:bg-gray-900">
            <Head>
                <title>Mohak Bajaj | Blog</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="container px-4 mx-auto lg:px-32 lg:pt-20">
                <div className="grid grid-cols-3 gap-5" id="home">
                    <div className="flex h-screen lg:px-4 md:h-96 justify-center items-center md:justify-start col-span-2">
                        <div className="text-center md:text-left ">
                            <p className="font-primary font-medium text-4xl sm:text-5xl md:text-6xl text-gray-500 dark:text-gray-300">
                                Mohak Bajaj
                            </p>
                            <p className="font-primary font-medium text-4xl sm:text-5xl md:text-6xl text-gray-500 dark:text-gray-300 mt-5">
                                Blog📑
                            </p>
                            <div className="flex items-center justify-center mt-10 sm:hidden">
                                <Social />
                            </div>
                        </div>
                    </div>
                    <Lottie
                        loop
                        animationData={lottieJson}
                        play
                    />
                </div>
                {/* Toggle */}
                <div className="fixed w-full h-24 md:hidden top-0 left-0 bg-white dark:bg-gray-900 z-50">
                    <div className="flex items-center justify-between px-10 h-24">
                        <p className="font-primary bg-black dark:bg-white text-white dark:text-black text-lg px-2 py-2">
                            MB
                        </p>
                        <div className="flex items-center space-x-4">
                            <Toggle />
                            <button
                                className=""
                                type="button"
                                onClick={() => setIsNavHidden((prev) => !prev)}
                            >
                                {isNavHidden ? (
                                    <AiOutlineMenu className="text-gray-400" size={20} />
                                ) : (
                                    <AiOutlineClose className="text-gray-400" size={20} />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Nav */}
                    <div
                        className={cls(
                            `flex rounded-bl-lg bg-white dark:bg-gray-800  w-2/3 p-4 justify-end ml-auto flex-col space-y-4 items-start`,
                            { hidden: isNavHidden }
                        )}
                    >
                        <Link href="/">
                            <a>
                                <Button>Back to Home</Button>
                            </a>
                        </Link>
                    </div>
                </div>

                {/* Desktop Nav */}
                <div
                    className={`hidden md:flex md:items-center md:justify-between md:sticky top-0 h-20 bg-white dark:bg-gray-900 z-50`}
                >
                    <div className="md:flex flex-col space-y-2 items-start md:flex-row md:space-y-0 md:items-center md:space-x-2 lg:space-x-4">
                        <Link href="/">
                            <a>
                                <Button>Back to Home</Button>
                            </a>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center md:flex-row md:space-y-0">
                        <Social />
                        <Toggle />
                    </div>
                </div>
            </div>

            <div className="container px-4 mx-auto lg:px-32 lg:pt-20">
                {/* Posts */}
                <h1 className="text-7xl font-primary text-gray-500 dark:text-gray-300">Posts</h1>
                <div className="flex flex-col">
                    {articles.map((article) => (
                        <Post
                            key={article.id}
                            publishedDate={article.date}
                            slug={article.slug}
                            title={article.title}
                            description={article.metadesc}
                        />
                    ))}
                </div>
            </div>


            < Footer />

        </div>
    );
}

// export async function getServerSideProps() {
//     const res = await fetch("http://localhost:3000/api/blog");
//     const articles = await res.json();
//     return {
//         props: {
//             articles,
//         },
//     };
// }