import React, { useState } from 'react';
import axios from 'axios';

export default function CampaignForm() {
const [message, setMessage] = useState('');
const [spend, setSpend] = useState('');

const handleSubmit = async () => {
    const res = await axios.post('http://localhost:5000/api/campaigns', {
    message,
    condition: { totalSpend: { $gt: parseInt(spend) } },
    });
    alert(`Sent: ${res.data.sent}, Failed: ${res.data.failed}`);
};

return (
    <div>
    <h2>Create Campaign</h2>
    <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" />
    <input value={spend} onChange={e => setSpend(e.target.value)} placeholder="Spend >" />
    <button onClick={handleSubmit}>Launch</button>
    </div>
);
}
