import { readData } from '$lib/data';

export const GET = async () => {
  try {
    const { categories } = readData();

    return new Response(
      JSON.stringify({
        categories: categories || [] // Ensure categories is always an array
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
        categories: [], // Return an empty array on error
        error: "Something went wrong while fetching the categories",
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