import React from "react";

const Link = ({switchCategory, request, innerText}) => (
    <a href={request} className="white_link" onClick={(e) => {
        e.preventDefault();
        switchCategory(request, innerText);
    }}>{innerText}</a>
);

export default Link;