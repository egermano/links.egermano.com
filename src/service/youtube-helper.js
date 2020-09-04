const { default: Axios } = require("axios");

exports.lastVideo = async () => {
    const channelId = 'UCBWbWViVqDHckknir8PIIdg';
    try {
        const response = await Axios.get(process.env.GATSBY_YT_HELPER_URL , {
            headers: {
                'Content-Type':'application/json',
            },
            params:{
                channelId
            },
        });
        
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}