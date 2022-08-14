
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
    <Card planName="An Intimate Affair" price="$35" guestRange="For 5 to 50 Guests" perks={test} />
    <Card planName="A Small Gathering" price="$45" guestRange="For 50 to 100 Guests" perks={test}/>
    <Card planName="A Moderately Sized Event" price="$55" guestRange="For 100 to 250 Guests" perks={test} />
    <Card planName="A Substantial Event" price="$65" guestRange="For 250 to 1,000+ Guests" perks={test} />
    <Card planName="A White Glove Event" price="$100" guestRange="For 25 to 50 Guests" perks={test} />
</div>



<style>
    .card-box {
        margin-top : 10px;
        margin-bottom : 45px;
        display : flex;
        justify-content: center;
        flex-wrap : wrap;
    }

    

    h3 {
        margin-top : 75px;
        margin-bottom : 0;
        text-align : center;
        text-transform: uppercase;
        font-size : 36px;
    }   
    
    

</style>