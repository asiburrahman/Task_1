import blogs from "./../data/blogs.json";
import Link from "next/link";
import Image from "next/image";
import BlogCard from "../components/BlogCard";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return {
            title: "Blog Not Found | Insunet",
            description: "The blog post you're looking for could not be found.",
        };
    }

    return {
        title: `${blog.title} | Insunet Blog`,
        description: blog.content?.[0]?.text?.substring(0, 160) || "Read this informative article about insurance from Insunet.",
        keywords: ["insurance", blog.title, "Insunet", "insurance tips", "insurance guide"],
        openGraph: {
            title: blog.title,
            description: blog.content?.[0]?.text?.substring(0, 160) || "Read this informative article about insurance from Insunet.",
            type: "article",
            url: `https://job-task-eight.vercel.app//blog/${blog.id}`,
            images: [
                {
                    url: blog.coverImage,
                    width: 1200,
                    height: 630,
                    alt: blog.title,
                },
            ],
            publishedTime: blog.date,
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.content?.[0]?.text?.substring(0, 160) || "Read this informative article about insurance from Insunet.",
            images: [blog.coverImage],
        },
        alternates: {
            canonical: `https://job-task-eight.vercel.app//blog/${blog.id}`,
        },
    };
}

export default async function BlogDetails({ params }) {




    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#2C3E35] mb-4">Blog Not Found</h1>
                    <Link href="/blog" className="text-[#2B8A7E] hover:text-[#7CF47C] font-semibold">
                        ← Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    // Related articles based on your JSON "related" array
    const related = blogs.filter((b) => blog.related?.includes(b.id));

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Teal Background */}
            <div className="bg-[#2B8A7E] text-white py-20 lg:py-32">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="max-w-4xl mx-auto text-center">
                        {/* Date */}
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-lg">{blog.date}</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                            {blog.title}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 lg:px-20 py-16 lg:py-24">
                <div className="max-w-4xl mx-auto">
                    {/* Cover Image */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-xl">
                        <Image
                            src={blog.coverImage}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                    </div>

                    {/* Blog Content */}
                    <div className="space-y-12">
                        {blog.content.map((block, index) => {
                            // Heading
                            if (block.type === "heading") {
                                return (
                                    <div key={index}>
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2C3E35] mb-6">
                                            {block.text}
                                        </h2>
                                    </div>
                                );
                            }

                            // Paragraph
                            if (block.type === "paragraph") {
                                return (
                                    <p
                                        key={index}
                                        className="text-base md:text-lg text-[#6B7280] leading-relaxed"
                                    >
                                        {block.text}
                                    </p>
                                );
                            }

                            // List
                            if (block.type === "list") {
                                return (
                                    <ol key={index} className="space-y-3">
                                        {block.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-base md:text-lg text-[#6B7280]">
                                                <span className="text-[#2C3E35] font-semibold flex-shrink-0">
                                                    {i + 1}.
                                                </span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ol>
                                );
                            }

                            return null;
                        })}
                    </div>

                    {/* Related Articles */}
                    {related.length > 0 && (
                        <div className="mt-20 lg:mt-32">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E35] mb-12">
                                Related articles
                            </h2>

                            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                                {related.map((item) => (
                                    <BlogCard key={item.id} blog={item}></BlogCard>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}