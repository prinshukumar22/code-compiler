import { Link, useNavigate } from "react-router-dom";

const CreateCode = ({ formData, setFormData }) => {
  const navigate = useNavigate();
  console.log(formData);

  const changeHandler = (e) => {
    if (
      e.target.id === "username" ||
      e.target.id === "input" ||
      e.target.id === "snippet"
    ) {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    } else {
      setFormData({ ...formData, language: e.target.id });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Inside");
    fetch("/api/createcoder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/displayall");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full h-[100vh] flex flex-col bg-slate-100">
      <h1 className="text-3xl font-semibold text-center text-slate-700 my-6">
        Submit your code
      </h1>
      <form
        className="flex p-4 flex-col gap-4 mx-auto w-full md:w-[50%] border rounded-lg"
        onSubmit={submitHandler}
      >
        <input
          className="p-3 rounded-lg border"
          type="text"
          placeholder="username"
          id="username"
          onChange={changeHandler}
          value={formData.username}
        ></input>
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mb-4">Choose a language:</h1>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="c++"
              onChange={changeHandler}
              checked={formData.language === "c++"}
            ></input>
            <label htmlFor="c++">C++</label>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="java"
              onChange={changeHandler}
              checked={formData.language === "java"}
            ></input>
            <label htmlFor="java">Java</label>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="js"
              onChange={changeHandler}
              checked={formData.language === "js"}
            ></input>
            <label htmlFor="js">Javascript</label>
          </div>
          <div className="flex gap-3 items-center">
            <input
              type="radio"
              id="python"
              onChange={changeHandler}
              checked={formData.language === "python"}
            ></input>
            <label htmlFor="python">python</label>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold ">Code Input</h1>
          <textarea
            id="input"
            className="p-3 rounded-lg border h-32"
            onChange={changeHandler}
            value={formData.input}
          ></textarea>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-semibold ">Code Snippet</h1>
          <textarea
            id="snippet"
            className="p-3 rounded-lg border h-32"
            onChange={changeHandler}
            value={formData.snippet}
          ></textarea>
        </div>
        <button
          type="submit"
          className="p-3 border bg-green-700 text-slate-100 rounded-lg uppercase font-semibold text-1xl hover:opacity-95 mb-4 text-center"
        >
          Check
        </button>
      </form>
    </div>
  );
};

export default CreateCode;
