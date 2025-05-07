
import { ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { FurnitureItem } from "@/types/furniture";

const products = [
  {
    id: "prod_1",
    name: "Helsinki Lounge Chair",
    price: 599,
    description: "Designer lounge chair by Mia Nordström",
    designer: "Mia Nordström",
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    category: "Living Room",
    quantity: 1,
    size: "large",
  },
  {
    id: "prod_2",
    name: "Cove Sofa",
    price: 1299,
    description: "Luxurious sofa design by Eric Silva",
    designer: "Eric Silva",
    image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
    category: "Living Room",
    quantity: 1,
    size: "small",
  },
  {
    id: "prod_3",
    name: "Arris Coffee Table",
    price: 499,
    description: "Modern coffee table by Jenna Wu",
    designer: "Jenna Wu",
    image: "https://images.unsplash.com/photo-1616464598261-c83228e7ba5e?auto=format&fit=crop&w=800&q=80",
    category: "Living Room",
    quantity: 1,
    size: "medium",
  },
  {
    id: "prod_4",
    name: "Nero Floor Lamp",
    price: 349,
    description: "Sleek floor lamp by Akio Tanaka",
    designer: "Akio Tanaka",
    image: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    quantity: 1,
    size: "small",
  },
  {
    id: "prod_5",
    name: "Meridian Bookshelf",
    price: 899,
    description: "Spacious bookshelf by Lucia Fernandez",
    designer: "Lucia Fernandez",
    image: "https://images.unsplash.com/photo-1588279102080-a8797324333a?auto=format&fit=crop&w=800&q=80",
    category: "Storage",
    quantity: 1,
    size: "medium",
  },
  {
    id: "prod_6",
    name: "Kinetic Pendant Light",
    price: 249,
    description: "Modern pendant light by Olivia Chen",
    designer: "Olivia Chen",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=800&q=80",
    category: "Lighting",
    quantity: 1,
    size: "small",
  },
];

const TrendingProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: FurnitureItem) => {
    addToCart(product);
  };

  return (
    <div id="inspiration" className="py-20 container mx-auto">
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-4">
          Currently <span className="relative animated-underline">Trending</span>
        </h2>
        <p className="text-lg text-deep-indigo/80 max-w-2xl mx-auto">
          Discover our most popular pieces, loved by design enthusiasts worldwide.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {products.map((product) => (
          <div 
            key={product.id} 
            className={cn(
              "rounded-lg overflow-hidden shadow-md perspective-card",
              product.size === "large" && "sm:col-span-2 sm:row-span-2",
              product.size === "medium" && "sm:col-span-2 lg:col-span-1"
            )}
          >
            <div 
              className={cn(
                "relative overflow-hidden",
                product.size === "large" ? "h-80" : "h-64"
              )}
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="p-4 bg-white">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-playfair font-medium text-lg">{product.name}</h3>
                <span className="font-medium">${product.price}</span>
              </div>
              <p className="text-deep-indigo/70 text-sm">By {product.designer}</p>
              <div className="mt-3">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="w-full flex justify-center items-center"
                  size="sm"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button className="font-medium text-deep-indigo hover:text-accent-gold transition-colors inline-flex items-center">
          Load More Products
        </button>
      </div>
    </div>
  );
};

export default TrendingProducts;
