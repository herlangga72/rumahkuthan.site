/** @type {import('./$types').PageLoad} */

import PocketBase from 'pocketbase';

export async function load({params, url}) {
    // create a paginated list of records
    
    const pb = new PocketBase('https://rumahkuthan.site');
    const pageSize = 12;
    const page = url.searchParams.get('page') || 1;
    const pageNumber = parseInt(page)
    const sortOptions = {
        sort: '-created',
    };
    
    let records = await pb.collection('gambar_karyosetomo').getList(pageNumber, pageSize, sortOptions);
    let costructedRecords = {
        records: records.items,
        hasPrevious: false,
        nextPage: "",
        prevPage: "",
        hasNext: false,
        pageNumber: pageNumber+1,
    };
    if (records.totalPages > pageNumber){
        costructedRecords.hasNext = true;
        costructedRecords.nextPage = `/?page=${pageNumber+1}`;
    }
    if (pageNumber > 1){
        costructedRecords.hasPrevious = true;
        costructedRecords.prevPage = `/?page=${pageNumber-1}`;
    }


    return { 
        "result":records,
        "hasNext":costructedRecords.hasNext,
        "nextPage":costructedRecords.nextPage,
        "hasPrevious":costructedRecords.hasPrevious,
        "prevPage":costructedRecords.prevPage,
    };
}


