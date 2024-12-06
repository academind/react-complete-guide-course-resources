import classes from './PostItem.module.css';

function PostItem({ post }) {
  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.body} />
      <article className={classes.item}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </article>
    </>
  );
}

export default PostItem;
