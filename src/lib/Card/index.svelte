<script>
    import { page } from '$app/stores';
    
    /**
	 * @type {{ word: string; roman: string; english: string; }}
	 */
     export let word;

    const types = ['word', 'roman', 'english'];

    $: face = types[0];
</script>

<div class="card">
    <div>
        {#if face === 'word'}
            <h2>{word.term}</h2>
        {/if}
        {#if face === 'roman'}
            <h2>{word.roman}</h2>
        {/if}
        {#if face === 'english'}
            <h2>{word.english}</h2>
        {/if}
    </div>
</div>

<style>
    .card {
        display: flex;
        justify-content: center;
        align-items: center;
        max-height: 50px;
        max-width: 100px
    }
</style>