import { readData } from '$lib/data';

export const GET = async ({ params }) => {
  try {
    const { id } = params;
    const { products } = readData();

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
      return new Response(
        JSON.stringify({
          message: "Product not found"
        }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    return new Response(
      JSON.stringify({
        product
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
        message: "Something went wrong while trying to get product by id",
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