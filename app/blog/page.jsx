

import blogs from "./data/blogs.json";
import BlogCard from "./components/BlogCard";

export const metadata = {
  title: "Our Blog - Insurance Tips & Insights | Insunet",
  description: "Stay informed with the latest insurance tips, guides, and industry insights. Learn about life insurance, health coverage, business protection, and more from Insunet experts.",
  keywords: ["insurance blog", "insurance tips", "life insurance guide", "health insurance", "business insurance", "insurance advice", "Insunet blog"],
  openGraph: {
    title: "Our Blog - Insurance Tips & Insights | Insunet",
    description: "Stay informed with the latest insurance tips, guides, and industry insights from Insunet experts.",
    type: "website",
    url: "https://job-task-eight.vercel.app/blog",
    images: [
      {
        url: "/images/blog-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Insunet Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Blog - Insurance Tips & Insights | Insunet",
    description: "Stay informed with the latest insurance tips, guides, and industry insights from Insunet experts.",
    images: ["/images/blog-og-image.jpg"],
  },
  alternates: {
    canonical: "https://job-task-eight.vercel.app/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#2B8A7E] text-white py-20 lg:py-32">
        <div className="container mx-auto px-6 lg:px-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center">
            Our blog
          </h1>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-6 lg:px-20 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {blogs.map((blog) => 
            <BlogCard blog={blog} key={blog.id}></BlogCard>
          )}
        </div>
      </div>
    </div>
  );
}