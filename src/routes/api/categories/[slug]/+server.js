import { readData } from '$lib/data';

export const GET = async ({ params }) => {
  try {
    const { slug } = params;
    const { categories, products } = readData();

    const category = categories.find(cat => cat.slug === '/' + slug);

    if (!category) {
      return new Response(
        JSON.stringify({
          message: "Category not found"
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // Filter products that belong to this category
    const categoryProducts = products.filter(prod => prod.categoryId === category.id);

    return new Response(
      JSON.stringify({
        category: {
          ...category,
          products: categoryProducts
        }
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        message: "Something went wrong while trying to fetch category by slug",
        error: e.message
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};