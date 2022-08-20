import 'bootstrap/dist/css/bootstrap.min.css';
import { Form} from 'react-bootstrap';

function Message () {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="form1">
        <Form.Label>Your Email</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form2">
        <Form.Label>Your Message</Form.Label>
        <Form.Control as="Send me something" rows={3} />
      </Form.Group>
    </Form>
  );
}

export default Message;