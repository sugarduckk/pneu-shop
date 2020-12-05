import algoliasearch from 'algoliasearch';

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);
export const productsIndex = client.initIndex('products');
export const addressesIndex = client.initIndex('addresses');