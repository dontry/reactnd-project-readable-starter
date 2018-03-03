import React from 'react';

const Error404 = ({location}) => (
    <div>
        <h3>
            Error 404. No match for <code>{location.pathname}</code>
        </h3>
    </div>
)

export default Error404;