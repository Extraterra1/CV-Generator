/* eslint-disable react/prop-types */
export default function Page({ inputs }) {
  return (
    <div className="page">
      {inputs.map((e) => {
        return (
          <h1>
            {e.name} {e.value}
          </h1>
        );
      })}
    </div>
  );
}
