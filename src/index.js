export default function liveBar(persona) {
  let healthResult;
  if (persona.health > 50) {
    healthResult = 'healthy';
  }
  if (persona.health > 15 && persona.health <= 50) {
    healthResult = 'wounded';
  }
  if (persona.health <= 15) {
    healthResult = 'critical';
  }
  return healthResult;
}
