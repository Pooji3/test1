import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Courses = () => {
  const courses = [
    {
      name: 'C',
      image: 'https://example.com/c.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/C_(programming_language)',
    },
    {
        name: 'HTML',
        image: 'https://example.com/html.jpg',
        wikiLink: 'https://en.wikipedia.org/wiki/HTML',
    },
    {
      name: 'Python',
      image: 'https://example.com/python.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/Python_(programming_language)',
    },
    {
      name: 'Java',
      image: 'https://example.com/java.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
    },
    {
      name: 'SQL',
      image: 'https://example.com/sql.jpg',
      wikiLink: 'https://en.wikipedia.org/wiki/SQL',
    },
  ];

  return (
    <div className="container">
      <h1>Courses</h1>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-6" key={index}>
            <div className="card mb-4">
              <img src={course.image} alt={course.name} className="card-img-top" />
              <div className="card-body">
                <h3 className="card-title">{course.name}</h3>
                <a href={course.wikiLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;