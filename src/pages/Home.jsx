import {  Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product";
import HomeCarousel from "../components/HomeCarousel";
import { useSelector } from "react-redux";

function Home({setCartItems}){ // const props = {x: [{},{}]   // const {x} = props

    // const headerStyles = {
    //     backgroundColor:'red', color:'white', fontSize:'12px'
    // }

    const {products} = useSelector((state) => state.products);

    return(
        <>
        <HomeCarousel/>
            <Container>
            <Row>
                {products.map((product, index) => (  //{}
                    <Product setCartItems={setCartItems} key={index} product={product} />
                ))}
            </Row>
            
        </Container>
        </>
    )

}

export default Home;