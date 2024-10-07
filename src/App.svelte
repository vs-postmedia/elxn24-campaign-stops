<script>
    // COMPONENTS
    import { onMount } from 'svelte';
    import { csvParse } from 'd3-dsv';
    import Chart from "$components/Chart.svelte";
    import Select from "svelte-select"; // https://github.com/rob-balfre/svelte-select

    

    // DATA
    // import data from "$data/data.js";
    import { menuItems } from "$data/menu-items";
    const dataUrl = 'https://raw.githubusercontent.com/ajstarks/dubois-data-portraits/master/challenge/2024/challenge03/data.csv';

    // VARIABLES
    let data, value;
    const defaultSelectValue = menuItems[0].value;

    // REACTIVE VARIABLES
    $: value, updateData(value);

    async function fetchData(url) {
        const resp = await fetch(url);
        data = await resp.text();
        return csvParse(data);
    }


    function updateData(value) {
        if (!value || !value.value) return;

        console.log(value);
    }

    async function init() {
        // fetch remote data
        data = await fetchData(dataUrl);
        // console.log(data);

        // default display selector value
		value = defaultSelectValue;
    }

    onMount(init);
</script>

<header>
    <h1>VS SvelteKit Template</h1>
    <p class="subhead">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</header>

<main>
    <Select items={menuItems}
        bind:value
        change={updateData}
        placeholder="Pick a city..."
		showChevron="true"
		listOpen={false}
    />
    
    <Chart 
        data={data}
        value={value}
    />
</main>

<footer>
    <p class="note">NOTE: tk.</p>
    <p class="source">Source:  <a href="https:vancouversun.com" target="_blank">TK</a></p>
</footer>
  
<style>
    @import '$css/normalize.css';
    @import '$css/fonts.css';
    @import '$css/colors.css';
    @import '$css/app.css';

    header {
		margin-bottom: 2rem;
	}
	header > h1 {
		text-align: center;
	}
	header .subhead {
		margin: 0 auto;
		max-width: 525px;
		text-align: center;
	}

    /* COMBOBOX SELECTOR */
  	:global(.svelte-select) {
		margin: 1rem auto !important;
		max-width: 250px;
  	}
  	:global(input:focus) {
		outline: none;
  	}

	:global(
		.svelte-select .selected-item,
		.svelte-select .item,
		.svelte-select input
	) {
		font-family: 'BentonSansCond-Regular', sans;
	}
</style>
