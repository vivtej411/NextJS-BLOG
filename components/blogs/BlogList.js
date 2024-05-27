import BlogItem from "./BlogItem";
import classes from "./BlogList.module.css";

function BlogList(props) {
  return (
    <ul className={classes.list}>
      <div class="row">
        {props.blogs.map((blog) => (
          <div class="col" key={blog.id}>
            <BlogItem
              key={blog.id}
              id={blog.id}
              title={blog.title}
              date={blog.date}
              author={blog.author}
              summary={blog.summary}
            />
          </div>
        ))}
      </div>
    </ul>
  );
}

export default BlogList;
