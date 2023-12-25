import Card from "./Card";


const Hero = ({data}) => {
    const products = data.products || [];

    return (
        <div className="container mx-auto flex flex-wrap">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    );
    };

export default Hero;



