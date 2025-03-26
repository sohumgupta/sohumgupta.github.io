const clientId = "91cbea3e039c46d";

export async function getImgurAlbum(albumID) {
    console.log("running!");
    try {
        let response = await fetch(`https://api.imgur.com/3/album/${albumID}/images`, {
            headers: { Authorization: `Client-ID ${clientId}` }
        });
        let data = await response.json();
        return data
    } catch (error) {
        console.error("Error fetching Imgur album:", error);
    }
}

export function getNumImgs(data) {
    return data.data.length;
}

export function getImgLink(data, index) {
    if (data.success && data.data.length > index) {
        return data[index].link;
    } else {
        console.error("Invalid image index or empty album");
    }
}