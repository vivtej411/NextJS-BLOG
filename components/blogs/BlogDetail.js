import classes from "./BlogDetail.module.css";

function BlogDetail(props) {
  return (
    <section className={classes.detail}>
      <h1>{props.title}</h1>
      <author>{props.author}</author>
      <p>{props.summary}</p>
      <date>{props.date}</date>
    </section>
  );
}

export default BlogDetail;
