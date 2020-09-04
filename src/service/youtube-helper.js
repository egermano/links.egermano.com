const { default: Axios } = require("axios");

exports.lastVideo = async () => {
    const channelId = 'UCBWbWViVqDHckknir8PIIdg';
    try {
        const response = await Axios.get(`http://localhost:3000/localhost/v1/last-video`, {
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