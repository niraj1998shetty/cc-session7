const Items = (props) => {
   const {stories}=props;
  return (
    <>
      {stories.map(function (item) {
        return (
        <>
        <li>
            <span>
        <a href={item.url}> {item.title}</a>
      </span>
      <span> {item.author}</span>
      </li>
      </>
      )
      })}
      
    </>
  );
};
export default Items;
