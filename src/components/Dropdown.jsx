import { useState } from 'react';

export default function Dropdown(props) {
  const [select, setSelect] = useState();

  return (
    <div>
      <select
        placeholder="Выбрать..."
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        className="dropdown_select">
        <option value="" disabled selected>
          Выбрать...
        </option>
        {props.data.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
    </div>
  );
}
