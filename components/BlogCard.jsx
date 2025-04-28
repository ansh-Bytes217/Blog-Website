import { Link } from 'react-router-dom';

function BlogCard({ id, title, description }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <Link to={`/blog/${id}`} className="btn btn-primary mt-3">Read More</Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
