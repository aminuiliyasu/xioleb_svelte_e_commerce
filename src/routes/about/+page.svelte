<script>
	// Team data (you can replace this with actual team member info)
	const teamMembers = [
	  {
		name: "Aminu Iliyasu",
		role: "Founder & Developer",
		image: "/my_official_pic.jpeg",
		bio: "Aminu is a passionate developer who built Svelte Commerce as part of a University of Pécs project. He’s dedicated to creating seamless online shopping experiences."
	  },
	  {
		name: "Jane Doe",
		role: "Designer",
		image: "/team/jane.jpg",
		bio: "Jane ensures that Svelte Commerce looks stunning and user-friendly with her creative designs."
	  },
	  {
		name: "John Smith",
		role: "Marketing Lead",
		image: "/team/john.jpg",
		bio: "John spreads the word about Svelte Commerce, helping us reach more customers every day."
	  }
	];
  </script>
  
  <div class="text-white py-12">
	<!-- Header Section -->
	<section class="text-center mb-16 fade-in">
	  <h1 class="text-4xl md:text-5xl font-bold mb-4">About Svelte Commerce</h1>
	  <p class="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto">
		Welcome to Svelte Commerce, your go-to destination for quality products. We’re a small team passionate about delivering the best online shopping experience.
	  </p>
	</section>
  
	<!-- Mission Statement -->
	<section class="mb-16 fade-in" style="animation-delay: 0.2s">
	  <h2 class="text-3xl font-bold text-center mb-6">Our Mission</h2>
	  <div class="bg-neutral-800 rounded-lg p-6 max-w-3xl mx-auto">
		<p class="text-neutral-300 text-lg">
		  At Svelte Commerce, our mission is to make online shopping simple, secure, and enjoyable. We aim to provide high-quality products at affordable prices while ensuring a seamless checkout experience with trusted payment solutions like Stripe.
		</p>
	  </div>
	</section>
  
	<!-- Our Story with Timeline -->
	<section class="mb-16 fade-in" style="animation-delay: 0.4s">
	  <h2 class="text-3xl font-bold text-center mb-6">Our Story</h2>
	  <div class="max-w-3xl mx-auto">
		<div class="relative border-l-2 border-blue-500 pl-6">
		  <!-- Timeline Item 1 -->
		  <div class="mb-8">
			<div class="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
			<h3 class="text-xl font-semibold text-white">2023 - The Beginning</h3>
			<p class="text-neutral-400">
			  Svelte Commerce was founded as a project at the University of Pécs by Aminu Iliyasu.
			</p>
		  </div>
		  <!-- Timeline Item 2 -->
		  <div class="mb-8">
			<div class="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
			<h3 class="text-xl font-semibold text-white">2024 - First Launch</h3>
			<p class="text-neutral-400">
			  We launched our first version of Svelte Commerce, offering a curated selection of products.
			</p>
		  </div>
		  <!-- Timeline Item 3 -->
		  <div>
			<div class="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full"></div>
			<h3 class="text-xl font-semibold text-white">2025 - Growing Strong</h3>
			<p class="text-neutral-400">
			  Svelte Commerce continues to grow, with plans to expand our product catalog and improve the shopping experience.
			</p>
		  </div>
		</div>
	  </div>
	</section>
  
	<!-- Team Section -->
	<section class="mb-16 fade-in" style="animation-delay: 0.6s">
	  <h2 class="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
	  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each teamMembers as member}
		  <div class="bg-neutral-800 rounded-lg p-6 text-center">
			<img
			  src={member.image}
			  alt={member.name}
			  class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
			  on:error={(e) => (e.target.src = '/no-image.png')}
			/>
			<h3 class="text-xl font-semibold">{member.name}</h3>
			<p class="text-blue-500 mb-2">{member.role}</p>
			<p class="text-neutral-400">{member.bio}</p>
		  </div>
		{/each}
	  </div>
	</section>
  
	<!-- Call to Action -->
	<section class="text-center fade-in" style="animation-delay: 0.8s">
	  <h2 class="text-3xl font-bold mb-4">Ready to Shop?</h2>
	  <p class="text-neutral-400 mb-6">Explore our products or get in touch with us!</p>
	  <div class="flex justify-center space-x-4">
		<a
		  href="/categories"
		  class="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-600 transition duration-300"
		>
		  Shop Now
		</a>
		<a
		  href="mailto:iliyasuaminu50@gmail.com"
		  class="inline-block border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
		>
		  Contact Us
		</a>
	  </div>
	</section>
  </div>