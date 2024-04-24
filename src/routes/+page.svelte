<script>
    /** @type {import('./$types').PageData} */
    export let data;
    let showModal = false;
</script>

<!-- make a content container for page -->
<div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {#each data.result.items as item}
            {@const imageUrl = `https://rumahkuthan.site/api/files/${item.collectionId}/${item.id}/${item.gambar}`}
            <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                <img class="w-full h-56 object-cover object-center" src="{imageUrl}?thumb=0x360" alt={item.keterangan} />
                <div class="p-4">
                    <h1 class="text-2xl font-bold text-gray-800">{item.keterangan}</h1>
                    <p class="mt-2 text-gray-600">{item.keterangan}</p>
                    <a href={imageUrl} download class="px-4 py-2 bg-blue-500 text-white rounded-lg">Download</a>
                </div>
            </div>
        {/each}
    </div>
</div>

<!-- Create A pagination -->
<div class="container mx-auto px-4 py-8">
    <div class="flex justify-center gap-3">
        {#if data.hasPrevious}
            <a href={data.prevPage} class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">Previous</a>
        {/if}
        {#if data.hasNext}
            <a href={data.nextPage} class="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg">Next</a>
        {/if}
    </div>
</div>
