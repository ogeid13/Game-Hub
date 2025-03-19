const getCroppedImageUrl = (url: string) =>{
    let urlArray = url.split("media/");
    let newUrl = `${urlArray[0]}media/crop/600/400/${urlArray[1]}`;
    return newUrl;
}

export {getCroppedImageUrl};