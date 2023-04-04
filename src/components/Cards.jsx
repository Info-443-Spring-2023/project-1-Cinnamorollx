import React from "react";
import { Link } from 'react-router-dom';


export function Card({ imageUrl, title, albumName }) {


    return (
        <div className="card col-sm-7 col-md-5 col-lg-5 py-4">
            <Link to={`/home/photo-album/${albumName}`}>
                <img src={imageUrl} className="card-img-top card-img" alt="Card image" />
                <div className="card-img-overlay d-flex align-items-center">
                    <p className="card-title text-center mx-auto">{title}</p>
                </div>
            </Link>
        </div>
    );
}