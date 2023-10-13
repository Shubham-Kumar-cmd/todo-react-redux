// rafce
import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import DispalyCount from './DispalyCount';
import { addTodo } from '../redux/actions/Todo';
import { v4 } from 'uuid';
import { connect, useDispatch } from 'react-redux';

const AddTodo = () => {

    const [todo,setTodo]=useState({
        title:'',
        description:'',
        id:''
    })

    const dispatch=useDispatch()

    const handleSubmit=(event)=>{
        event.preventDefault();
        //add todo to store
        // addTodo({...todo,id:v4()})
        dispatch(addTodo({...todo,id:v4()}))
        console.log(todo);
        setTodo({
            title:'',
            description:''
        })
    }

    return (
        <Container className='mt-3'>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h2 className='text-center'>Add Todo here!!</h2>
                            <DispalyCount />
                            {JSON.stringify(todo)}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group>
                                    <Form.Label>Todo Title</Form.Label>
                                    <Form.Control 
                                    type='text' 
                                    placeholder='Enter here'
                                    value={todo.title}
                                    onChange={event=>{setTodo({...todo,title:event.target.value})}}
                                    ></Form.Control>
                                </Form.Group>
                                <Form.Group className='mt-3'>
                                    <Form.Label>Todo Description</Form.Label>
                                    <Form.Control 
                                    as={'textarea'} 
                                    type='text'
                                    placeholder='Enter here'
                                    value={todo.description}
                                    onChange={event=>{setTodo({...todo,description:event.target.value})}}
                                    ></Form.Control>
                                </Form.Group>
                                <Container className='mt-3 text-center'>
                                    <Button variant='primary' type='submit'>Continue</Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

//old method

// const mapStateToProps=(state)=>({})

// const mapDispatchToProps=(dispatch)=>({
//     addTodo:(todo)=>(dispatch(addTodo(todo)))
// })

// export default  connect(mapStateToProps,mapDispatchToProps) (AddTodo)
export default AddTodo
