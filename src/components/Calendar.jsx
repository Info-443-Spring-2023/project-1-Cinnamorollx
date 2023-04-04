import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import RevoCalendar from 'revo-calendar';
import "bootstrap/dist/css/bootstrap.css";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [events, setEvents] = useState([]);

  const handleDateClick = (date) => {
    setShowModal(true);
    setDate(date);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (description.trim() === '') {
      alert('Description is required.');
      return;
    }

    const db = getFirestore();
    const eventsRef = collection(db, "events");
    try {
      await addDoc(eventsRef, {
        description: description,
        date: date.toString(),
        user: "",
      }
      );
      setShowModal(false);
      setDescription("");
      setDate(null);
      fetchEvents();
    } catch (error) {
      console.error('Error writing document: ', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  async function removeEvents(id) {
    const db = getFirestore();
    await deleteDoc(doc(db, "events", id));
    fetchEvents()
  }

  async function fetchEvents() {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "events"));
    const fetchedEvents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().description,
      date: new Date(doc.data().date),
    }));
    setEvents(fetchedEvents);
  }

  return (
    <main className='mt-5 pt-5'>
      <div className="calendar">
        <
          RevoCalendar
          events={events}
          style={{
            borderRadius: "5px",
            border: "1.5px solid #4F6995",
          }}
          highlightToday={true}
          lang="en"
          primaryColor="#474C7A"
          secondaryColor="#EBEBEB"
          todayColor="#3B3966"
          textColor="#333333"
          indicatorColor="orange"
          animationSpeed={
            300
          }
          sidebarWidth={
            180
          }
          detailWidth={
            280
          }
          showDetailToggler={
            true
          }
          showSidebarToggler={
            true
          }
          onePanelAtATime={
            false
          }
          allowDeleteEvent={
            true
          }
          allowAddEvent={
            true
          }
          openDetailsOnDateSelection={
            true
          }
          timeFormat24={
            true
          }
          showAllDayLabel={
            false
          }
          detailDateFormat="DD/MM/YYYY"
          addEvent={
            (date) => {
              handleDateClick(date)
            }
          }
          deleteEvent={(index)=> {
            removeEvents(events[index].id)
          }}
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Enter Event Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* <div className='calendar-error-resolve'>

      {/* <div className='calendar-error-resolve'>Calendar is only visible on larger screens!</div> */}
    </main>
  );
}

export default Calendar;
