import {ButtonGroup, Button } from 'react-bootstrap';


export default function Counter({ count, increment, decrement }) {
    return (
        <div className="row">
            <ButtonGroup aria-label="Counter">
                <Button onClick={decrement} variant="secondary">-</Button>
                <Button variant="white border border-secondary">{count}</Button>
                <Button onClick={increment} variant="secondary">+</Button>
            </ButtonGroup>                        
        </div>
    )
}