import React, { useState } from "react";

export default function FormExample2() {
  // 상태 변수 선언
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // 서브밋 버튼 클릭 핸들러
  const submitClick = (e) => {
    e.preventDefault();
    console.log("폼 서브밋됨:", name, email);
  };

  // onChange={changeName} 를 주석처리하면
  // 입력한 값이 안보임. 상태값을 변화시켜주지 못하기 때문에.
  return (
    <div>
      <h1>Form Example2</h1>
      <form onSubmit={submitClick}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
