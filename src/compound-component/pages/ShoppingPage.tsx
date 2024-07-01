import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";

import "../styles/custom-styles.css";

import { products } from "../data/products.data";
// import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  // const { shoppingCart, handleAddToCart } = useShoppingCart();

  return (
    <div>
      <h1>Store</h1>
      <hr />

      {/**
       * Finally, this is the recommended pattern for more complex and large applications.
       * Since it allows greater reusability, flexibility, and state control, as well as
       * sharing it in a more efficient and intuitive way.
       */}
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          product={products[0]}
          className="bg-dark text-white"
          initialValues={{ quantity: 5, maxQuantity: 10 }}
        >
          {({ quantity, maxQuantity, incrementBy, reset }) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />

              <button onClick={() => incrementBy(-2)}>-2</button>
              <button onClick={reset}>Reset</button>
              <button onClick={() => incrementBy(2)}>+2</button>
              <span>
                {quantity} / {maxQuantity}
              </span>
            </>
          )}
        </ProductCard>

        {/**
         * This is what the Compound Component Pattern looks like.
         * It is a pattern widely used by libraries like Material UI, Formik, etc.
         * Essentially, it consists of a main component that contains other components
         * that communicate with each other through a context inherited by the children from the parent
         * (although it is not the only way, they could also communicate using the redux pattern).
         */}
        {/*
            <ProductCard product={product} className="bg-dark text-white">
              <ProductImage className="custom-image" />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
        */}

        {/**
         * This is another way to use the Compound Component Pattern.
         * In this case, the internal components are extracted from the ProductCard component.
         * The functionality remains the same.
         */}
        {/*
            <ProductCard product={product2} className="bg-dark text-white">
              <ProductCard.Image className="custom-image" />
              <ProductCard.Title className="text-bold" />
              <ProductCard.Buttons className="custom-buttons" />
            </ProductCard>
        */}

        {/*************************************************************************/}

        {/**
         * Extensible Styles
         * Additionally, custom styles can be passed to the components
         * through props, as shown below.
         * This makes the components very flexible and reusable.
         */}
        {/*
            <ProductCard
              product={product}
              style={{ backgroundColor: "rgb(56, 56, 56)", color: "white" }}
            >
              <ProductCard.Image
                style={{
                  margin: 10,
                  borderRadius: 10,
                  width: "calc(100% - 20px)",
                }}
              />

              <ProductCard.Title style={{ fontWeight: "bold" }} />

              <ProductCard.Buttons
                style={{
                  backgroundColor: "salmon",
                  width: "fit-content",
                  borderRadius: 5,
                }}
              />
            </ProductCard>
        */}

        {/*************************************************************************/}

        {/**
         * In addition to being able to extend CSS classes or properties,
         * there is also a technique or pattern called 'Control Props'.
         * It consists of passing other properties that will control the internal state
         * of the component as required, to extend its functionality.
         */}
        {/* {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            quantity={shoppingCart[product.id]?.quantity || 0}
            onChange={handleAddToCart}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))} */}

        {/* <div className="shopping-cart">
          {Object.values(shoppingCart).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white"
              style={{ width: 100 }}
              quantity={product.quantity}
              onChange={handleAddToCart}
            >
              <ProductImage className="custom-image" />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div> */}
      </div>
    </div>
  );
};
