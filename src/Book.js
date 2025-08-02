const Book = ({ img, title, author, number }) => {
  const style = {
    color: '#617d98',
    fontSize: '2rem',
    marginTop: '1rem',
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h2 style={style}>{author}</h2>
      <span className="num">{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
