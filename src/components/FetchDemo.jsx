import useFetch from "../hooks/useFetch";

 function FetchDemo() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>4.useFetch</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && <p>Users loaded: {data.length}</p>}
    </div>
  );
}

export default FetchDemo;