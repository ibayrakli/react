function Course({ image, title, description }) {
  return (
    <div>
      <img src={image} alt="" />
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Course;
