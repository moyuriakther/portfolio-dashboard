import  { useEffect, useState } from 'react';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('http://localhost:5000/api/blog');
      const data = await response.json();
    //   console.log(data)
      setBlogs(data?.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div>
      {blogs?.map((blog) => (
        <div key={blog?.id}>
          <h2>{blog?.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: blog?.description }} />
        </div>
      ))}
    </div>
  );
};

export default AllBlogs;
