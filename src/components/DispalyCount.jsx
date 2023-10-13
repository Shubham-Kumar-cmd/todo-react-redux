import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const DispalyCount = ({todos}) => {
    return (
        <Card className='shadow-sm border-o'>
            <Card.Body>
                <h4>Number of Todos: {todos.length}</h4>
            </Card.Body>
        </Card>
    )
}

const mapStateToProps=(state)=>{
    return {todos:state.todos}
}

const mapDispatchToProps=(dispatch)=>({

})

export default connect(mapStateToProps,mapDispatchToProps)(DispalyCount)