const axios = require('axios').default;

// Load dev config
require('dotenv').config();

// Get login cookie
axios.post(`${process.env.API_URL}user/login`, {email: process.env.API_EMAIL, password: process.env.API_PASSWORD}).then(async (res) => {

    // Do activityplan check
    await axios.post(
        `${process.env.API_URL}administration/activityplan/check`,
        '',
        {headers: {'Content-Type': 'text/plain', 'Cookie': res.headers['set-cookie'][0]}}
    )
    .catch(console.error)

}).catch(console.error);