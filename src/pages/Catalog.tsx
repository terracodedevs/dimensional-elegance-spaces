
import { useState } from "react";
import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { FurnitureCatalogItem } from "@/types/furniture";
import AddFurnitureDialog from "@/components/AddFurnitureDialog";
import { useToast } from "@/hooks/use-toast";

// Mock data for furniture items
const mockFurnitureItems: FurnitureCatalogItem[] = [
  {
    id: "1",
    name: "Modern Sofa",
    category: "Sofa",
    price: 1299.99,
    color: "Gray",
    material: "Velvet",
    picture: "/placeholder.svg",
    modelCode: "SOF-MOD-001",
  },
  {
    id: "2",
    name: "Wooden Coffee Table",
    category: "Table",
    price: 499.99,
    color: "Natural Wood",
    material: "Oak",
    picture: "/placeholder.svg",
    modelCode: "TBL-COF-002",
  },
  {
    id: "3",
    name: "Lounge Chair",
    category: "Chair",
    price: 799.99,
    color: "Black",
    material: "Leather",
    picture: "/placeholder.svg",
    modelCode: "CHR-LNG-003",
  },
];

const CatalogManager = () => {
  const [furnitureItems, setFurnitureItems] = useState<FurnitureCatalogItem[]>(mockFurnitureItems);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddFurniture = (newFurniture: FurnitureCatalogItem) => {
    setFurnitureItems([...furnitureItems, { ...newFurniture, id: String(Date.now()) }]);
    setIsAddDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Furniture model added successfully",
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="container mx-auto py-24 flex-grow">
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
        
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-playfair font-semibold">Catalog Manager</h1>
          <Button onClick={() => setIsAddDialogOpen(true)} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Furniture Model
          </Button>
        </div>
        
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Color</TableHead>
                <TableHead>Material</TableHead>
                <TableHead>Model Code</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {furnitureItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.color}</TableCell>
                  <TableCell>{item.material}</TableCell>
                  <TableCell>{item.modelCode}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      
      <AddFurnitureDialog 
        isOpen={isAddDialogOpen} 
        onClose={() => setIsAddDialogOpen(false)} 
        onSubmit={handleAddFurniture}
      />
      
      <Footer />
    </div>
  );
};

export default CatalogManager;
