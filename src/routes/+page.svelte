<script>
	import ShopCard from '$lib/components/ShopCard.svelte';
  
	export let data;
  
	$: isLoading = !data?.products && !data?.error;
	$: hasError = !!data?.error;
	$: products = data?.products ?? []; // Use nullish coalescing to ensure products is always an array
  </script>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-6">
	{#if isLoading}
	  <p class="text-center text-neutral-400 text-2xl col-span-3 mt-12">Loading...</p>
	{:else if hasError}
	  <p class="text-center text-red-500 text-2xl col-span-3 mt-12">{data.error}</p>
	{:else if products?.length > 0}
	  {#each products as product}
		<ShopCard
		  id={product.id}
		  name={product.name}
		  price={product.price}
		  image={product.image}
		/>
	  {/each}
	{:else}
	  <p class="w-full text-center text-neutral-400 text-2xl pt-32 col-span-3">No products are currently available.</p>
	{/if}
  </div>