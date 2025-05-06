
import { Button } from "@/components/ui/button";
import { FurnitureItem } from "@/types/furniture";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface OrderSummaryProps {
  items: FurnitureItem[];
}

const OrderSummary = ({ items }: OrderSummaryProps) => {
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.07; // 7% tax rate
  const shipping = 29.99;
  const total = subtotal + tax + shipping;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal:</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Tax (7%):</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Shipping:</span>
          <span>${shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-medium pt-4 border-t">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Proceed to Checkout</Button>
      </CardFooter>
    </Card>
  );
};

export default OrderSummary;
