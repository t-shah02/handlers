
<script>
    export let planName;
    export let price;
    export let guestRange;
    export let perks = [];
    export let headerColor = "black";
    
    

</script> 
    
<div class="plan-card">
    <div class="plan-card-header is-danger" style="background-color: {headerColor};">
        <h1 class="plan"> {planName} </h1>
        <p class="guest-range"> {guestRange} </p>
    </div>

    <h1 class="price">
        {price}
    </h1>
    <hr>

    <h1 style="text-align : center; margin-bottom : 8.5px; color : grey;">Per Staff Member Per Hour</h1>
    <div class="perks-container">
        <h1 class="perks"> Perks </h1>
        {#each perks as perk}
            <div class="perk">
                <i class="fa-solid fa-circle-check"></i>
                <p class="perk-name"> {perk} </p>
            </div>
        {/each}
    
    </div>
</div>

<style>
    .plan-card {
        position : relative;
        margin : 20px;
        width : 300px;
        height : 450px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition : transform 200ms ease-in-out;
        background-color : white;
    }

    

    .perks-container {
        display : flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    
    .perk {
        position : relative;
        display : flex;
        justify-content: center;
        align-items: center;
        width : 55%;
        margin-left : auto;
        margin-right : auto;
        margin-top : 10px;
        margin-bottom : 10px;
    }
 
    i { 
        margin-right : 5px;
    }

    .perk-name {
        margin-left : 10px;
        font-style : italic;
    }



    .plan-card-header {
        text-align : center;
        color : white;
        font-size : 25px;
        border-top-left-radius : inherit;
        border-top-right-radius : inherit;
    }

    .plan {
        padding : 7px;
    }

    .guest-range {
        font-size : 20px;
        padding-bottom : 8px;
    }

    .price {
        text-align : center;
        padding : 8px;
        font-size : 35px;
    }

    hr {
        background-color : black;
        margin-top : 0px;
    }

    .plan-card:hover {
        transform: scale(1.02);
    }
</style>