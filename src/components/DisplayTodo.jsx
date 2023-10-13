import React from 'react'
import { Button, Card, Col, Container, ListGroup, Row } from 'react-bootstrap'
import DispalyCount from './DispalyCount'
import { connect, useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../redux/actions/Todo'

const DisplayTodo = ({todos,deleteTodo}) => {

    // //useSelector (it will extract the data)
    // const todos=useSelector(state=>state.todos)
    // // const currentUser=useSelector(state=>state.currentUser)
    // //useDispatch (it will fire up action)
    // const dispatch=useDispatch()

    // hard code
    // const [todos,setTodos]=useState([
    //     {
    //     title:'first title',
    //     description:'first description'
    //     },
    //     {
    //     title:'second title',
    //     description:'second description'
    //     },
    //     {
    //     title:'third title',
    //     description:'third description'
    //     },
    // ])

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='mt-3 shadow-sm'>
                        <Card.Body>
                            <h3 className='text-center'>All Todo's are here!!</h3>
                            <DispalyCount />
                            <ListGroup>
                                {
                                    todos.map((todo,index)=>(
                                        <ListGroup.Item key={index}>
                                            <h4>{todo.title}</h4>
                                            <p>{todo.description}</p>
                                            <Button
                                            variant='danger'
                                            size='sm'
                                            onClick={event=>{
                                                // dispatch(deleteTodo(todo.id))
                                                deleteTodo(todo.id)
                                                }}
                                            >delete</Button>
                                        </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return {todos:state.todos}
}

const mapDispatchToProps=(dispatch)=>({
    deleteTodo:(id)=>(dispatch(deleteTodo(id)))
})

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodo)
// export default DisplayTodo

//Alter
//useSelector
//useDispatch
