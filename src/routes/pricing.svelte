
<script>
    import Card from "../components/Card.svelte";   

    let test = [
        "hello",
        "world",
        "goodbye",
        "handlers"
    ]

</script>


<div class="card-box">
    <Card planName="An Intimate Affair" price="$35" guestRange="For 5 to 50 Guests" perks={test} />
    <Card planName="A Small Gathering" price="$45" guestRange="For 50 to 100 Guests" perks={test}/>
    <Card planName="A Moderately Sized Event" price="$55" guestRange="For 100 to 250 Guests" perks={test} />
    <Card planName="A Substantial Event" price="$65" guestRange="For 250 to 1,000+ Guests" perks={test} />
    <Card planName="A White Glove Event" price="$100" guestRange="For 25 to 50 Guests" perks={test} />
</div>



<style>
    .card-box {
        margin-top : 60px;
        display : flex;
        justify-content: center;
        flex-wrap : wrap;
    }
</style>