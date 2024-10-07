<script>
    // PROPERTIES
    export let data;
    export let width;

    // VARS
    let tooltipWidth;
    const xNudge = 5;
    const yNudge = 5;

    // FUNCTIONS
    // Add commas to numbers
    function addCommasToNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    // DYNAMIC VARS
    $: xPosition = data.x + tooltipWidth + xNudge > width ? data.x - tooltipWidth - xNudge : data.x + xNudge; // don't let the tooltip run off the right of the screen
    $: console.log(data)
</script>


<div class="tooltip" 
    bind:clientWidth={tooltipWidth}
    style="left: {xPosition}px; top: {data.y + yNudge}px;
">
    <h3>{data}</h3>
</div>

<style>
    .tooltip {
        background: rgba(255,255,255,0.85);
        border-radius: 3px; /* Rounds corners */
        box-shadow: rgba(0, 0, 0, 0.15) 2px 3px 8px; /* Gives a nice 3d effect */
        max-width: 225px;
        padding: 8px 6px; /* Adds space around content within tooltip */
        pointer-events: none; /* Prevents tooltip from blocking mouse events */
        position: absolute; 
        transition: top 300ms ease, left 300ms ease;
    }
    .tooltip h3 {
        margin-bottom: 5px;
    }
    .tooltip ul {
        margin-top: 10px;
    }
    #app .tooltip p {
        font-size: 0.85rem;
        line-height: 1.3;
    }
    .tooltip p .bold {
        font-family: 'BentonSansCond-Bold';
    }
</style>