import Button from "../Button";
import Post from "../Post";
import Link from "next/link";

const Blog = ({ articles }) => {
  return (
    <>
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
      <div className="text-center md:mt-16">
        <Link href="/blog">
          <a>
            <Button>View All</Button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Blog;
