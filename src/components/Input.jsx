export const Input = ({
  handleChange,
  value,
  title,
  name,
  color,
  selected,
}) => {
  return (
    <div>
      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          value={value}
          name={name}
          checked={selected === value}
        />
        <span className="checkmark" style={{ backgroundColor: color }}></span>
        {title}
      </label>
    </div>
  );
};
