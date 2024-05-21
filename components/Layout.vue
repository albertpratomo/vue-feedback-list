<template>
    <div class="bg-slate-50 text-slate-500 min-h-screen grid grid-rows-[auto_1fr]">
        <header class="border-b">
            <div class="container py-4 px-8 flex justify-between items-center">
                <img src="/logo.webp" height="70" width="70" class="mix-blend-multiply">

                <slot name="header-right" />
            </div>
        </header>

        <main class="container min-w-[700px]">
            <slot />
        </main>
    </div>
</template>
