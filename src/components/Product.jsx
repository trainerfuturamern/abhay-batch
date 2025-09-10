import { Button, Card, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = ({product}) => {
    // console.log("product-------------->",product);  //{}


    const dispatch = useDispatch();
    
    const handleAddToCart = ()=>{
        dispatch(addToCart(product));
    }

    return (
        <>
            <Col md={6} lg={4} xl={3} className="my-3">
            <Card>
            <Card.Img variant="top" src={product.productPhoto} />
            <Card.Body>
                <Card.Title>{product.productName}</Card.Title>
                <Card.Text>
                    {product.productDescription}
                </Card.Text>
                <Button variant="primary" onClick={handleAddToCart}>Add To Cart</Button>
            </Card.Body>
        </Card>
        </Col>
     
        </>
        
    )
}

export default Product;