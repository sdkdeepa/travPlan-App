
import { apiKeys } from '../server/helper';

test('test verifies for geoname username', () => {
    expect(apiKeys('GEONAMES_USERNAME')).not.toBe('');
});

test('test verifies for weatherbit key', () => {
    expect(apiKeys('WEATHERBIT_API_KEY')).not.toBe('');
});

test('test verifies for pixabay key', () => {
    expect(apiKeys('PIXABAY_API_KEY')).not.toBe('');
});