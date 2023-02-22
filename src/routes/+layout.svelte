<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<nav>
	<a href="/"> Home</a>
	<form action="/search" use:enhance>
		<input type="text" name="key" placeholder="Search" />
		<button>Search</button>
	</form>
</nav>
<slot />
