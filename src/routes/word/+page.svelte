<script>
    import { page } from '$app/stores';
    import Card from '$lib/Card/index.svelte';
    
    /**
	 * @type {any}
	 */
     export let words;
</script>

<svelte:head>
    <title>Flashcards</title>
</svelte:head>

<div>
    <h1>Flashcards</h1>
    <ul>
        {#each words as word}
            <Card word={word} />
        {/each}
    </ul>
</div>