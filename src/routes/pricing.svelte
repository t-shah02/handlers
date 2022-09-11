
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

<div class="pricing-message">
    <h1>Pricing Message</h1><br>
    <img src="https://images.pexels.com/photos/3810565/pexels-photo-3810565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
</div>

<div data-aos="zoom-in" class="card-box">
    <div class="cards">
        <Card planName="An Intimate Affair" price="$35" guestRange="For 5 to 50 Guests" perks={test} headerColor="rgb(160,160,6)" />
    </div>
    <div class="cards">
        <Card planName="A Small Gathering" price="$45" guestRange="For 50 to 100 Guests" perks={test} headerColor="rgb(160,160,6)"/>
    </div>
    <div class="cards">
        <Card planName="A Moderately Sized Event" price="$55" guestRange="For 100 to 250 Guests" perks={test} headerColor="rgb(160,160,6)"/>
    </div>
    <div class="cards">
        <Card planName="A Substantial Event" price="$65" guestRange="For 250 to 1,000+ Guests" perks={test} headerColor="rgb(160,160,6)" />
    </div>
    <div class="cards">
        <Card planName="A White Glove Event" price="$100" guestRange="For 25 to 50 Guests" perks={test} headerColor="rgb(160,160,6)" />
    </div>
</div>



<style>
    .pricing-message {
        color:white;
        font-size: 42px;
        width: 100%;
        position: relative;
        margin: 20px auto;
        justify-content : center;
    }
    
    .pricing-message h1 {
        color : white;
        margin-bottom : 0px;
        text-align : center;

    }    

    .pricing-message img {
        display : block;
        margin-left : auto;
        margin-right : auto;
        width : 350px;
        -moz-box-shadow:inset 0px 0px 3px 1px rgba(0,0,0,1);
        -webkit-box-shadow:inset 0px 0px 3px 1px rgba(0,0,0,1);
        box-shadow:inset 0px 0px 3px 1px rgba(0,0,0,1);
    }   

    .card-box {
        margin-top : 25px;
        padding-bottom: 50px;
        margin-bottom : 45px;
        display : flex;
        justify-content: center;
        flex-wrap : wrap;
        border: 2px black;

    }

    .cards {
        width: 20%;
        /* margin-left:auto;
        margin-right:auto;
        left:0;
        right:0; */
        align-content:center;
        display : flex;
        justify-content:center
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
        font-size: clamp(28px, 4vw, 40px);
        color : white;
    }   
    
    

</style>