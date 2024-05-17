<template>
    <div class="bg-slate-50 min-h-screen grid grid-rows-[auto_1fr]">
        <header class="border-b">
            <div class="container mx-auto py-4 px-8 flex justify-between items-center">
                <img src="/logo.webp" height="70" width="70" class="mix-blend-multiply">

                <div class="header-right"></div>
            </div>
        </header>
    
        <main class="container mx-auto">
            <slot></slot>
        </main>
    </div>
</template>

<style>
:root {
    --un-default-border-color: #E2E8F0
}
</style>