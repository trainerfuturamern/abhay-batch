import { Button, Card, Col } from "react-bootstrap";

const Product = ({product, setCartItems}) => {
    // console.log("product-------------->",product);  //{}
    
    const handleAddToCart = ()=>{
        setCartItems((prev) => {
            return prev + 1;
        });
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