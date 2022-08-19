
<script>
    import Card from "../components/Card.svelte";   

    let test = [
        "hello",
        "world",
        "goodbye",
        "handlers"
    ]

    

</script>

<svelte:head>
    <title>Pricing</title>
</svelte:head>

<h3> Event Staffing - Pricing </h3>

<div data-aos="zoom-in" class="card-box">
    <div class="cards">
        <Card planName="An Intimate Affair" price="$35" guestRange="For 5 to 50 Guests" perks={test} headerColor="hsl(217, 71%, 53%)" />
    </div>
    <div class="cards">
        <Card planName="A Small Gathering" price="$45" guestRange="For 50 to 100 Guests" perks={test} headerColor="hsl(171, 100%, 41%)"/>
    </div>
    <div class="cards">
        <Card planName="A Moderately Sized Event" price="$55" guestRange="For 100 to 250 Guests" perks={test} headerColor="hsl(48, 100%, 67%)" />
    </div>
    <div class="cards">
        <Card planName="A Substantial Event" price="$65" guestRange="For 250 to 1,000+ Guests" perks={test} headerColor="hsl(141, 71%, 48%)" />
    </div>
    <div class="cards">
        <Card planName="A White Glove Event" price="$100" guestRange="For 25 to 50 Guests" perks={test} headerColor="hsl(348, 100%, 61%)" />
    </div>
</div>



<style>
    .card-box {
        padding-bottom: 50px;
        margin-top : 10px;
        margin-bottom : 45px;
        display : flex;
        justify-content: center;
        flex-wrap : wrap;
    }

    .cards {
        width: 20%;
        /* margin-left:auto;
        margin-right:auto;
        left:0;
        right:0; */
        align-content:center;
        display : flex;
        justify-content:center;
    }

    @media only screen and (max-width: 720px) {
        .cards {
        width: 100%;
    }
    }
    
    @media only screen and (min-width: 720px) and (max-width: 1024px) {
        .cards {
        width: 50%;
    }
    }

    @media only screen and (min-width: 1024px) and (max-width: 2048px) {
        .cards {
        width: 33.33333%;
    }
    }

    h3 {
        margin-top : 75px;
        margin-bottom : 0;
        text-align : center;
        text-transform: uppercase;
        font-size : 36px;
        color : white;
    }   
    
    

</style>