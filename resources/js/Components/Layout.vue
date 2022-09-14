<script setup>
import Background from "@/Components/Background.vue";
import Header from "@/Components/Header.vue";
import Footer from "@/Components/Footer.vue";
</script>
<template>
    <Background />
    <div class="relative">
        <Header />
        <main>
            <slot />
        </main>
    </div>
    <Footer />
</template>
