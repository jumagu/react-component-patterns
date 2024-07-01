import { useState } from "react";

import { Product } from "../interfaces/product.interfaces";

interface ProductInCart extends Product {
  quantity: number;
}

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const handleAddToCart = ({
    product,
    quantity,
  }: {
    product: Product;
    quantity: number;
  }) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        quantity: 0,
      };

      if (Math.max(productInCart.quantity + quantity, 0) > 0) {
        productInCart.quantity += quantity;

        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: removedProduct, ...rest } = oldShoppingCart;

      return { ...rest };
    });

    /* if (quantity <= 0) {
          const { [product.id]: removedProduct, ...rest } = shoppingCart;
    
          setShoppingCart(rest);
    
          return;
        }
    
        setShoppingCart({
          ...shoppingCart,
          [product.id]: { ...product, quantity },
        }); */
  };

  return { shoppingCart, handleAddToCart };
};
