"use client";

import { Calendar, ArrowRight, User } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Professional Product Shoot in Meerut",
      excerpt: "Starting a podcast can be overwhelming. Here are our expert tips to help you create professional content from day one.",
      image: "https://res.cloudinary.com/djkkjnmke/image/upload/f_auto/diamond_kux8oe.heic",
      author: "Sanyam Jain",
      date: "Septemper 11, 2025",
      category: "Product Shoot",
      readTime: "2 min read",
      link : "https://posts.gle/zUra2vtnDjGgSbKx6"
    },
    {
      id: 2,
      title: "Creative Studio for Podcast, Photography, Videography & Digital Marketing",
      excerpt: "Learn the techniques and tools used by professional editors to create stunning cinematic content that captivates audiences.",
      image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757864158/toady_lgx8sf.jpg",
      author: "Kamini Giri",
      date: "September 14, 2025",
      category: "Studio",
      readTime: "3 min read",
      link : "https://posts.gle/ofRhaWD6CqX7Ddct9"
    },
    {
      id: 3,
      title: "Best Podcast Studio in Meerut",
      excerpt: "Discover the latest photography trends that are shaping the industry and how to incorporate them into your work.",
      image: "https://res.cloudinary.com/djkkjnmke/image/upload/v1757860578/podcast_phoot_krjd1u.jpg",
      author: "Harsh Saini",
      date: "Septemper 8, 2025",
      category: "Podcast",
      readTime: "4 min read",
      link : "https://posts.gle/2yhbJQjcbPZrtYQM7"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            Latest from Our <span className="text-brand-purple">Blog</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tips, trends, and insights from our team of 
            creative professionals and industry experts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-brand-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-purple font-medium">
                    {post.readTime}
                  </span>
                  <button className="flex items-center gap-2 text-brand-purple font-semibold hover:text-purple-700 transition-colors duration-200" onClick={() => window.location.href = post.link}>
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-brand-purple hover:bg-purple-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 transform hover:scale-105" onClick={() => window.location.href = "https://share.google/dq0ylugcYzMOpcYql"}>
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;