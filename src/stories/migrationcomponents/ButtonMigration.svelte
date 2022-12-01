<script lang="ts">

import Button from "../Button.svelte";

const {label, ...props} = $$restProps

$: console.log($$restProps)
</script>

<Button {...props}>
    {label}
</Button>

