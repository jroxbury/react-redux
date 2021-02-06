import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = () => (
    <>
        <h1>{"Oops, this page doesn't exist."}</h1>
        <Link to="/">Go Home</Link>
    </>
)

export default PageNotFound;