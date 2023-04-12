import Base64 from './base64.js';

class JwtDecoder {
    static decode(token) {
        if (!token) {
            return null;
        }

        const [header, payload, signature] = token.split('.');

        if (!header || !payload || !signature) {
            throw new Error('Invalid token format');
        }

        const decodedHeader = Base64.atob(header);
        const decodedPayload = Base64.atob(payload);

        return {
            header: JSON.parse(decodedHeader),
            payload: JSON.parse(decodedPayload)
        };
    }
}

export default JwtDecoder;