const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

// Blog data
const blogs = [
  {
    id: "1",
    title: "Understanding Time Dilation",
    description: "How time slows down near massive objects according to Einstein's theory.",
    content: "Time dilation is one of the most fascinating concepts in general relativity. ..."
  },
  {
    id: "2",
    title: "Bending of Light Around Stars",
    description: "Learn how gravity can bend the path of light, an effect called gravitational lensing.",
    content: "Gravity not only affects mass but also bends light! ..."
  },
  {
    id: "3",
    title: "Black Holes: The Mystery Wells",
    description: "Explore what black holes are and how they warp space and time.",
    content: "Black holes are regions in space where gravity is so strong that nothing can escape. ..."
  }
];

// Routes
app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
