import React, { useState } from 'react';
import { Card } from './Cards';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


import { getDatabase, ref, set as firebaseSet, push as firebasePush } from 'firebase/database';

export default function PhotoAlbum(props) {


  const cards = [
    {
      imageUrl: "/images/all-images-cover.jpg",
      title: "All Images",
      albumName: "all-images",
    },
    {
      id: 2,
      imageUrl: "/images/kids-album-cover1.jpg",
      title: "Kids Album",
      albumName: "kids-album",
    },
    {
      id: 3,
      imageUrl: "/images/vacation-album-cover.jpg",
      title: "Vacation Album",
      albumName: "vacation",
    }
  ];

  const filteredCards = cards.filter((card) => card.title.toLowerCase().startsWith(props.searchQuery.toLowerCase()));

  return (
    <div className='mt-4'>
      <div className='d-flex mb-5 mt-3'>
      </div>
      <main class='container-main d-flex justify-content-around'>
        {filteredCards.map((card) => (
          <Card key={card.id} title={card.title} imageUrl={card.imageUrl} albumName={card.albumName} />
        ))}
      </main>
    </div>
  );
}
