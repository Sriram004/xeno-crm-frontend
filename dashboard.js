import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
const [campaigns, setCampaigns] = useState([]);

useEffect(() => {
    axios.get('http://localhost:5000/api/campaigns')
    .then(res => setCampaigns(res.data));
}, []);

return (
    <div>
    <h2>Campaign History</h2>
    {campaigns.map(c => (
        <div key={c._id}>
        <p>{c.message}</p>
        <small>Sent: {c.stats.sent}, Failed: {c.stats.failed}</small>
        </div>
    ))}
    </div>
);
}
