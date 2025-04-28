import { useParams } from 'react-router-dom';
import blogs from '../data/blogs';

function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return (
      <div className="container mt-4">
        <h2 className="text-danger">Blog not found</h2>
        <p>The blog you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold mb-3">{blog.title}</h2>
      <p className="text-muted mb-4">{blog.description}</p>
      <p className="fs-5">{blog.content}</p>
    </div>
  );
}

export default BlogDetail;
