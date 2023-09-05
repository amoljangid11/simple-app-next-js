import React from 'react';

function SSRPage({ serverTime }) {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Server time: {serverTime}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const serverTime = new Date().toString();
  return { props: { serverTime } };
}

export default SSRPage;