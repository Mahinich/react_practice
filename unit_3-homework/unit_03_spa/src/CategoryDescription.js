import {useParams, Link} from 'react-router-dom';

function CategoryDescription() {
  let userName = useParams().userName;
  return(
    <>
      <h1>Category: {userName}</h1>
    </>
  )
}

export default CategoryDescription;