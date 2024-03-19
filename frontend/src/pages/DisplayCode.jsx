import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisplayCode = () => {
  const [coders, setCoders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/getcoders")
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          throw new Error(data.message);
        }
        setLoading(false);
        setCoders(data.coders);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold text-center text-slate-700 mt-4">
        Submitted Entries
      </h1>
      {loading && (
        <p className="text-1xl font-semibold text-center text-slate-700 mt-4">
          Loading...
        </p>
      )}
      {error && (
        <p className="text-1xl font-semibold text-center text-red-700 mt-4">
          {error}
        </p>
      )}
      {coders && coders.length > 0 && (
        <table className="max-w-[90%] md:max-w-[70%] mx-auto">
          <tr>
            <th>Username</th>
            <th>Language</th>
            <th>Input</th>
            <th>Snippet</th>
          </tr>
          {coders.map((coder, idx) => {
            return (
              <tr key={idx}>
                <td>{coder.username}</td>
                <td>{coder.language}</td>
                <td>{coder.language}</td>
                <td>{coder.snippet}</td>
              </tr>
            );
          })}
        </table>
      )}
      {coders.length === 0 && (
        <p className="text-1xl font-semibold text-center text-green-700 mt-4">
          No records found!!!
        </p>
      )}
      <Link
        to={"/"}
        className="p-3 border bg-green-700 text-slate-100 rounded-lg uppercase font-semibold text-1xl hover:opacity-95 mb-4 text-center max-w-[30%] mx-auto"
      >
        Add your entry here
      </Link>
    </div>
  );
};

export default DisplayCode;
