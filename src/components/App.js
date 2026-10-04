import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../redux/actions";

function App() {
  const dispatch = useDispatch();

  const { loading, data, error } = useSelector(
    (state) => state
  );

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {data && (
        <>
          <p>Title: {data.title}</p>
          <p>Body: {data.body}</p>
        </>
      )}
    </div>
  );
}

export default App;