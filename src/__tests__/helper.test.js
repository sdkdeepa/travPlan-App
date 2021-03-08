
import { apiKeys } from '../server/helper';

test('checking if the username is included', () => {
    expect(apiKeys('GEONAMES_USERNAME')).not.toBe('');
});

test('checking if the weather bit key is included', () => {
    expect(apiKeys('WEATHERBIT_API_KEY')).not.toBe('');
});

test('checking if the pixabay key is included', () => {
    expect(apiKeys('PIXABAY_API_KEY')).not.toBe('');
});