
<script>
    import Card from "../components/Card.svelte";   

</script>

<svelte:head>
    <title> Handlers - Home </title>
</svelte:head>

<div class="card-box">
    <Card planName="adad" />
    <Card planName="adad" />
    <Card planName="adad" />
    <Card planName="adad" />
    <Card planName="adad" />
    <Card planName="adad" />
</div>



<style>
    .card-box {
        display : flex;
        justify-content: center;
        flex-wrap : wrap;
    }
</style>