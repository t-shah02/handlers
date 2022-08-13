
<script>
    export let planName;
    export let priceRange;
    export let guestRange;
    export let perks = [];
    export let headerColor = "black";
    

</script> 

<div class="plan-card">
    <div class="plan-card-header" style="background-color: {headerColor};">
        <h1 class="plan"> {planName} </h1>
        <p> {guestRange} </p>
    </div>
    <h1 class="price">
        {priceRange}
    </h1>
    
</div>

<style>
    .plan-card {
        margin : 20px;
        width : 300px;
        height : 300px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition : transform 200ms ease-in-out;
        border-radius : 15px;
    }

    .plan-card-header {
        text-align : center;
        color : white;
        border-top-left-radius : inherit;
        border-top-right-radius : inherit;
    }

    .plan {
        padding : 7px;
    }

    .plan-card:hover {
        transform: scale(1.02);
    }
</style>