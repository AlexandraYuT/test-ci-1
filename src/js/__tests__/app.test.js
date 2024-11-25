import healthBar from '../app';

test('healthy test', () => {
    const hero = {
        name: 'Маг', 
        health: 90
    }
    
    const result = healthBar(hero);
    expect(result).toBe('healthy')
})

test('wounded test', () => {
    const hero = {
        name: 'Маг', 
        health: 40
    }
    
    const result = healthBar(hero);
    expect(result).toBe('wounded')
})

test('critical test', () => {
    const hero = {
        name: 'Маг', 
        health: 10
    }
    
    const result = healthBar(hero);
    expect(result).toBe('critical')
})