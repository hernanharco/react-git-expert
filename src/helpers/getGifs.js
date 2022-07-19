

export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=5JrHibWGJ0dxAQmDg3G3LSt79b9DMt4B&q=${ category }&limit=10`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const gifs = data.map ( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    
    // console.log(resp);
    // console.log(data);
    // console.log('getGifs:', {gifs});
    return gifs;
}