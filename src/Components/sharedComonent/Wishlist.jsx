import React, { useContext } from "react";
import { WishlistContext } from "../sharedComonent/WishListContext"; // Ensure this path is correct
import { CartContext } from "../Navelements/CartContext"; // Import your CartContext
import { Trash2, ShoppingCart } from "lucide-react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";

const WishlistPage = () => {
  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext); // Destructure addToCart

  return (
    <Container className="py-5">
      <h2 className="mb-4">My Wishlist ({wishlist.length})</h2>

      {wishlist.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">Your wishlist is empty. Start liking some jewelry!</p>
          <Button variant="dark" href="/rings">Browse Rings</Button>
        </div>
      ) : (
        <Row>
          {wishlist.map((item) => (
            <Col key={item.id} xs={12} md={4} lg={3} className="mb-4">
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img 
                  variant="top" 
                  src={item.image} 
                  style={{ height: "250px", objectFit: "cover" }}
                />

                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem", fontWeight: "600" }}>
                    {item.name}
                  </Card.Title>

                  <Card.Text className="fw-bold text-dark">
                    ₹{item.price}
                  </Card.Text>

                  <div className="d-flex justify-content-between gap-2">
                    <Button
                      variant="outline-danger"
                      className="w-50"
                      onClick={() => toggleWishlist(item)}
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </Button>

                    <Button 
                      variant="dark" 
                      className="w-50"
                      onClick={() => addToCart(item)}
                    >
                      <ShoppingCart size={18} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default WishlistPage;