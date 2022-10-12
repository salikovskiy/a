<template lang="pug">
section.about
    div.photo
        img(src="../public/images/me.png")
    div.text
        div.bio
            h3 About me
            p adipiscing elit. Tortor nisi posuere nibh tempus faucib suspendisse vulputate mus tristique. Nulla tellus lacinia in urna purus. Amet ac in ipsum.
            p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor nisi posuere nibh vulputate mus tristique. Nulla tellus lacinia in urna purus. Amet ac in ipsum.
        div.links
            a(href="#") behance
            a(href="#") instagram
            a(href="#") telegram
</template>

<style lang="scss" scoped>
.about {
    @apply border-b
            lg:(flex flex-row-reverse border-r border-l);
    .photo {
        @apply py-5 border-b
                md:(py-10)
                lg:(w-[50%] border-b-transparent flex items-center justify-center);
        img {
            @apply w-248px m-auto
                    md:(w-324px);
        }
    }
    .text {
        @apply lg:(w-[calc(50%+2px)] border-r flex flex-col justify-between);
        .bio {
            @apply p-5
                    md:(p-10)
                    lg:(mb-10);
            h3 { @apply text-xl lg:(mb-10); }
            p { @apply text-base font-light italic mt-3 lg:(max-w-500px); }
        }
        .links {
            @apply flex flex-col
                    lg:(flex-row justify-between border-t);
            a {
                @apply p-5 border-t
                        md:(p-10)
                        lg:(w-[33.3%] flex items-end h-180px border-t-transparent);
                &:not(:last-child) {
                    @apply border-r;
                }
            }
        }
    }
}
</style>
