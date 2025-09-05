import ProductCard from "./ProductCard"

const FeaturedProducts = () => {
  return (
    <div className="w-full max-w-7xl py-8">
        <div className="w-full grid grid-cols-4 gap-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default FeaturedProducts