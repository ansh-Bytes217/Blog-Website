import { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

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
