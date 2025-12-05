import { useState } from "react";
import { Container } from "react-bootstrap";

export default function Usestate() {
    const [count, setCount] = useState(0)
    return <>
        <Container className="text-center">
            <h3>useState</h3>
            <p>{count}</p>
            <button onClick={async () => {
                setCount(await addCount(count));
            }}>Add Count</button>
        </Container>
    </>
}
function addCount(count) {
    count++;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(count);
        }, 1000);
    });
}