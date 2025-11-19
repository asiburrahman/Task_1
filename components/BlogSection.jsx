import Image from 'next/image';
import blogs from "@/app/blog/data/blogs.json";
import BlogCard from '@/app/blog/components/BlogCard';

export default function BlogSection() {
  

    return (
        <section className="bg-white py-16 lg:py-24">
            <div className="w-12/12 mx-auto px-6 lg:px-20">
                {/* Heading */}
                <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2C3E35] leading-tight mb-4">
                        Latest from our blogs
                    </h2>
                    <p className="text-base md:text-[17px] leading-relaxed text-[#6B7280] max-w-3xl mx-auto">
                        When you file a claim, you'll need to provide necessary documentation, such as police reports or medical records. The insurance company will assess your claim approved
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {blogs.slice(0, 2).map((blog) => (
                        <BlogCard key={blog.id} blog={blog}></BlogCard>
                    ))}
                </div>
            </div>
        </section>
    );
}