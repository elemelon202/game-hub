import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b7ea913d71014697a57079d1108b87de' 
    }
})