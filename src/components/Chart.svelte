<script>
    export let data = [];
    export let value = '';

    // LIBS
    import { onMount } from 'svelte';

    // COMPONENTS
    import Tooltip from '$components/Tooltip.svelte';

    // VARS
    let tooltipData;
    let width = 500;
    let height = 500;

    const margin = {
		top: 20,
		right: 20,
		bottom: 20,
		left: 20 
	};
    $: console.log(data);

    // FUNCTIONS
    function init() {
        console.log('CHART INIT!')
    }
    function addCommasToNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // LIGHTS! CAMERA! ACTION!
    onMount(init);
</script>

<pre>{`CHART: Resolved data = ${JSON.stringify(data)}`}</pre>
<pre>CHART: Combobox value = {value || 'No selection'}</pre>

<div class="chart-container" bind:clientWidth={width}>

</div>