import { useEffect, useRef, useState } from "react";
import {
  Product,
  onChangeArgs,
  InitialValues,
} from "../interfaces/product.interfaces";

interface UseProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  quantity?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  product,
  onChange,
  quantity: productQuantity = 0,
  initialValues,
}: UseProductArgs) => {
  const [quantity, setQuantity] = useState<number>(
    initialValues?.quantity || productQuantity
  );

  const isMounted = useRef(false);

  const isControlled = useRef(!!onChange);

  const incrementBy = (value: number) => {
    if (isControlled.current) {
      console.log("hol");
      return onChange!({ product, quantity: value });
    }

    let newValue = Math.max(0, quantity + value);

    if (initialValues?.maxQuantity) {
      newValue = Math.min(newValue, initialValues.maxQuantity);
      // newValue < initialValues.maxQuantity
      //   ? newValue
      //   : initialValues.maxQuantity;
    }

    setQuantity(newValue);

    // onChange && onChange({ product, quantity: newValue });
  };

  const reset = () => {
    setQuantity(initialValues?.quantity || 0);
  };

  useEffect(() => {
    if (!isMounted.current) return;

    setQuantity(initialValues?.quantity || productQuantity);
  }, [productQuantity, initialValues?.quantity]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    quantity,
    incrementBy,
    reset,
  };
};
