import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import apiAccess from '../communication/APIAccess';

const Places = (props) => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [description, setDescription] = useState('');

    const navigate = useNavigate();

    let onNameChange = (event) => {
        setName(event.target.value);
    }
    let onCategoryChange = (event) => {
        setCategory(event.target.value);
    }
    let onLatChange = (event) => {
        setLat(event.target.value);
    }
    let onLongChange = (event) => {
        setLong(event.target.value);
    }
    let onDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    let onSubmitHandler = (event) => {
        event.preventDefault();

        apiAccess.addPlace(name, category, lat, long, description)
            .then(x => navigate('/'))
            .catch(error => {
                console.log(error)
                alert('Failed to add place.');
            });
    }

    return (
        <Form onSubmit={onSubmitHandler}>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Name" value={name} onChange={onNameChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Category</Form.Label>
                <Form.Control type="name" placeholder="Category" value={category} onChange={onCategoryChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Latitude</Form.Label>
                <Form.Control type="name" placeholder="Latitude" value={lat} onChange={onLatChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Longitude</Form.Label>
                <Form.Control type="name" placeholder="Longitude" value={long} onChange={onLongChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Description</Form.Label>
                <Form.Control type="name" placeholder="Description" value={description} onChange={onDescriptionChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add Place
            </Button>

        </Form>
    );
}

export default Places;