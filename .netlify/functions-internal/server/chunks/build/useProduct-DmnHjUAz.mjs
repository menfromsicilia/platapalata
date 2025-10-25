import { k as getProductBySlug, c as createError } from './server.mjs';
import { toRef } from 'vue';
import { u as useAsyncData, a as useNuxtData } from './asyncData-CgjrJLH1.mjs';

const useProductBySlug = (slug) => {
  const productSlug = toRef(slug);
  return useAsyncData(
    `product-slug-${productSlug.value}`,
    async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const product = getProductBySlug(productSlug.value);
      if (!product) {
        throw createError({
          statusCode: 404,
          message: "Product not found"
        });
      }
      return product;
    },
    {
      getCachedData: (key) => {
        return useNuxtData(key).data.value;
      },
      watch: [productSlug]
    }
  );
};

export { useProductBySlug as u };
//# sourceMappingURL=useProduct-DmnHjUAz.mjs.map
