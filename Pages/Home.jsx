import blogs from '../data/blogs';
import BlogCard from '../components/BlogCard';

function Home() {
  
  return (
    <div className="container mt-4">
      <div className="row">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            description={blog.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
