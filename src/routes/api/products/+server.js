import { readData } from '$lib/data';

export const GET = async () => {
  try {
    const { products } = readData();

    return new Response(
      JSON.stringify({
        products: products || [] // Ensure products is always an array
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
        products: [], // Return an empty array on error
        error: "Something went wrong while trying to fetch products",
        message: e.message
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