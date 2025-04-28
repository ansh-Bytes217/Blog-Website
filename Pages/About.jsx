function About() {
  return (
    <div className="container mt-4">
      <h2 className="text-primary fw-bold mb-4">About This Blog</h2>
      <p className="lead">
        Welcome to This blog!
      </p>
      <p>
        This project is built using <strong>React.js</strong>, <strong>Bootstrap 5</strong>, and <strong>React Router DOM</strong>.
        It showcases multiple pages, dynamic routing, and clean component-based architecture.
      </p>
      <p>
        The blog content currently covers fascinating topics in <strong>General Relativity</strong> — like time dilation, bending of light, and black holes.
        You can easily add more blogs by editing the <code>blogs.js</code> file.
      </p>
      <p className="text-muted">
        Created As a part of react learning journey.
      </p>
    </div>
  );
}

export default About;
