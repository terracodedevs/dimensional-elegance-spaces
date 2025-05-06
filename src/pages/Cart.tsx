
import { useState } from "react";
import { mockCartItems } from "@/data/mockFurniture";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";
import { FurnitureItem } from "@/types/furniture";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const [cartItems, setCartItems] = useState<FurnitureItem[]>(mockCartItems);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart."
    });
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-24">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center text-muted-foreground hover:text-foreground" 
            onClick={handleGoBack}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
        
        <h1 className="text-3xl font-playfair font-semibold mb-8">Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">Your cart is empty</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                  />
                ))}
              </div>
            </div>
            <div>
              <OrderSummary items={cartItems} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
