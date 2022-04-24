import liveBar from '../index';

test.each([
  [{
    name: 'Mag',
    health: 90,
  }, 'healthy'],
  [{
    name: 'Elf',
    health: 45,
  }, 'wounded'],
  [{
    name: 'Trolle',
    health: 10,
  }, 'critical'],
])('should show live bar for %$ level %0', (persona, expected) => {
  const result = liveBar(persona);
  expect(result).toBe(expected);
});
