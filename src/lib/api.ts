import { error } from '@sveltejs/kit';

const base = 'https://api.realworld.io/api';

// @ts-ignore
async function send({ method, path, data, token }) {
	const opts = { method, headers: {} };

	if (data) {
		// @ts-ignore
		opts.headers['Content-Type'] = 'application/json';
		// @ts-ignore
		opts.body = JSON.stringify(data);
	}

	if (token) {
		// @ts-ignore
		opts.headers['Authorization'] = `Token ${token}`;
	}

	const res = await fetch(`${base}/${path}`, opts);
	if (res.ok || res.status === 422) {
		const text = await res.text();
		return text ? JSON.parse(text) : {};
	}

	throw error(res.status);
}

// @ts-ignore
export function get(path, token) {
	// @ts-ignore
	return send({ method: 'GET', path, token });
}

// @ts-ignore
export function del(path, token) {
	// @ts-ignore
	return send({ method: 'DELETE', path, token });
}

// @ts-ignore
export function post(path, data, token) {
	return send({ method: 'POST', path, data, token });
}

// @ts-ignore
export function put(path, data, token) {
	return send({ method: 'PUT', path, data, token });
}
