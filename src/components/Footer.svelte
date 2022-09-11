<script>
    const TODAY = new Date();
    const YEAR = TODAY.getFullYear();

    $: outerWidth = 0;
	$: innerWidth = 0;
	$: outerHeight = 0;
	$: innerHeight = 0;

</script>

<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />

<div>
	<h1 class = "footer-text">© {YEAR} HANDLERS. Created by Big Leaf Consulting devs</h1>
	<img src="https://res.cloudinary.com/yuliu/image/upload/c_scale,w_100/v1662784146/TBL_LOGO_Header_Alt_1_mpv3bz.png">
</div>

<style>
	div {
		display:flex;
		justify-content:start;
		flex-direction:column;
		align-items:center;
		width: 100%;
		text-align: center;
		position : fixed;
		bottom : 0;
		background-color : black;
		z-index : 1000;

	}

	img {
		margin-bottom : 10px;
		width: 120px;
		
	}

	div .footer-text {
		color: white;
		padding-top: 10px;
		font-size: clamp(12px, 1.5vw, 16px);
	}


    
</style>
