<script setup>
import { Link } from '@inertiajs/inertia-vue3';

defineProps({
    href: String,
});
</script>
<template>
    <li>
        <Link
            class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
            href="{{ href }}"><slot /></Link>
    </li>
</template>
