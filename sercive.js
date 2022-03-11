import axios from "axios";
const getData = async (userId) => {
  const user = await axios(
    "https://jsonplaceholder.typicode.com/users/" + userId
  );

  const posts = await axios(
    "https://jsonplaceholder.typicode.com/posts?userId=" + userId
  );
  return { user: user.data, posts: posts.data };
};

export default getData;
