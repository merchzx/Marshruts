import React, { useRef } from "react";
export function FileInput() {
  const fileInput = useRef(null);
  function handleSubmit(event) {

    alert(`Selected file - ${this.fileInput.current.files[0].name}`);

    event.preventDefault();

  }


  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

