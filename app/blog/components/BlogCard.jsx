
import Image from 'next/image';
import Link from 'next/link';


 function  BlogCard({blog}) {
 
    return (
        <Link key={blog.id} href={`/blog/${blog.id}`}>
              <div className="group cursor-pointer h-full flex flex-col">
                {/* Image with Arrow Icon */}
                <div className="relative w-full h-64 md:h-72 lg:h-80 rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  
                  
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow space-y-4">
                  {/* Title */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#193E39]  transition-colors leading-tight flex-grow">
                    {blog.title}
                  </h2>

                  {/* Footer with Learn More and Date */}
                  <div className="flex items-center justify-between pt-2 mt-auto">
                    {/* Learn More Link */}
                    <div className="inline-flex items-center gap-2 text-[#5F5F5F] group-hover:text-[#6BE26B] font-semibold transition-colors">
                      Learn More
                      <svg 
                        className="w-5 h-5 transition-transform rotate-320 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M17 8l4 4m0 0l-4 4m4-4H3" 
                        />
                      </svg>
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 text-[#6B7280]">
                      <svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
                        />
                      </svg>
                      <span className="text-sm">{blog.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
    );
}

export default BlogCard;