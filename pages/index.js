import BlogList from "@/components/blogs/BlogList";
import { getSortedPostsData } from "@/lib/posts";
import { useState } from "react";

const HomePage = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const filteredBlogs = props.blogs
    .filter(
      (blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOption === "author") {
        return a.author.localeCompare(b.author);
      }
      return 0;
    });

  return (
    <div className="container">
      <div className="row mt-4 justify-content-center">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or author"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-2">
          <select
            className="form-control form-control-sm bg-gray"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
          </select>
        </div>
      </div>
      <BlogList blogs={filteredBlogs} />
    </div>
  );
};

export async function getStaticProps() {
  const data = getSortedPostsData();

  // console.log(data);

  return {
    props: {
      blogs: data,
    },
    revalidate: 1,
  };
}

export default HomePage;
