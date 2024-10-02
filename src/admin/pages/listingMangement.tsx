import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const listings = [
  { id: 1, title: 'iPhone 12 Pro', category: 'Electronics', price: 799, status: 'Active' },
  { id: 2, title: 'Leather Sofa', category: 'Furniture', price: 599, status: 'Pending' },
  { id: 3, title: 'Mountain Bike', category: 'Sports', price: 349, status: 'Active' },
  { id: 4, title: 'Macbook Pro', category: 'Electronics', price: 1299, status: 'Active' },
  { id: 5, title: 'Dining Table', category: 'Furniture', price: 199, status: 'Inactive' },
]

export default function ListingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Listing Management</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow key={listing.id}>
              <TableCell>{listing.title}</TableCell>
              <TableCell>{listing.category}</TableCell>
              <TableCell>${listing.price}</TableCell>
              <TableCell>{listing.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                <Button variant="destructive" size="sm">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}