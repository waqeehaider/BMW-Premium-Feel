export async function sendUsername(username, password) {
  try {
    const res = await fetch('http://10.0.2.2:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Server error ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}
