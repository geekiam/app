import axios from 'axios';

const veniceApiKey = '';
const veniceApiEndpoint = 'https://api.venice.ai/api/v1'; // Replace with your endpoint URL

const summarizeContent = async (content: string): Promise<string> => {

    let prompt = `Generate a 50 word summary of  the following content: ${content}`;
    const response = await axios.post(veniceApiEndpoint, {
        prompt,
        // Other parameters as required by the Venice API
    }, {
        headers: {
            'Authorization': `Bearer ${veniceApiKey}`,
            'Content-Type': 'application/json',
        },
    });

    const summary = response.data.summary;
    return summary;
};

export default summarizeContent;
