import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import apiAccess from '../communication/APIAccess';

const Home = () => {
    const [name, setName] = useState('');

    let onNameChange = (event) => {
        setName(event.target.value);
    }

    let onSubmitHandler = (event) => {
        event.preventDefault();

    }

    // onSubmit={onSubmitHandler}

    return (
        <Container>
            <div>
                Welcome to the home page for findnearbyplaces.
            </div>
            
            <br></br>
            <Form>
                <Form.Group className="mb-3" controlId='formBasicName'>
                    <Form.Label>Search</Form.Label>
                    <Form.Control type="text" placeholder="Enter search" value={name} onChange={onNameChange} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <br></br>

        </Container>


    );
}

export default Home;