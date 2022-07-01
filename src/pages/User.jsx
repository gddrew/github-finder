import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import GithubContext from '../context/github/GithubContext';

function User() {
  const { getUser, user } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []); // must add in the empty array so it only runs once, otherwise it will continuously run and crash your browser

  return <div>{user.login}</div>;
}

export default User;
