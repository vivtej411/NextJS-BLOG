import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./BlogItem.module.css";
import { useState } from "react";

function BlogItem(props) {
  const router = useRouter();
  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  const truncateSummary = (summary) => {
    return summary.length > 105 ? summary.substring(0, 105) + "..." : summary;
  };

  return (
    <li className={classes.item}>
      <Card>
        <h5 class="card-title text-start mx-auto mt-2">{props.title}</h5>
        <h6 class="card-subtitle my-3 text-body-secondary">{props.author}</h6>
        <p class="card-text">{truncateSummary(props.summary)}</p>
        <div class="d-flex justify-content-between">
          <div>
            <span class="badge text-bg-secondary">{props.date}</span>
          </div>
          <div>
            <p>
              <a
                href="#"
                class="link-offset-2 link-underline link-underline-opacity-100"
                onClick={showDetailsHandler}
              >
                Read More
              </a>
            </p>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default BlogItem;
