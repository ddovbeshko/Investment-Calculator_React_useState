export default function Input({ value, label, handleChanges, minValue }) {
  return (
    <>
      <p>
        <label>{label}</label>
        <input
          type="number"
          min={minValue}
          value={value}
          onChange={(event) => handleChanges(event.target.value)}
          required
        />
      </p>
    </>
  );
}
