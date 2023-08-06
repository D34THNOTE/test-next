// pages/index.js
import React from 'react';

export default function Home({ data }) {


    console.log("the html defined page console log");

    return (
        <div>
            <h1>Server-Side Rendering Example</h1>
            <p>Data fetched from the server:</p>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {

    console.log("the getServerSideProps console log");

    // Fetch data from an external API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    // Pass data to the page via props
    return { props: { data } };
}
