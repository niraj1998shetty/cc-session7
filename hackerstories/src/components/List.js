import Items from "./Items";

const List = (props) => {
  return <div>
      <ul>
          
      <Items stories={props.stories}></Items>
      
      </ul>
  </div>;
};
export default List;
