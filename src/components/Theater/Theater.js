import React from 'react';

const Ticket = () => {
  return (
    <article>
      <section>
        <h3>영화</h3>
        <div>
          <button>전체</button>
          <select>
            <option>특별관</option>
            <option>IMAX</option>
            <option>SUITE CINEMA</option>
            <option>CINE de CHEF</option>
          </select>
        </div>
        <ul>
          <li>영화명</li>
        </ul>
      </section>
      <section>
        <h3>극장</h3>
        <div>
          <button>전체</button>
          <button>특별관</button>
        </div>
      </section>
      <section>
        <h3>날짜</h3>
        {/* 라이브러리 */}
      </section>
      <section>
        <h3>시간</h3>
      </section>
    </article>
  );
};

export default Ticket;
