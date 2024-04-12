const getSpecialAttacks = require('./getSpecialAttacks')

test('извлечение специальных атак персонажа', () => {
	const character = {
		name: 'Лучник',
		type: 'Bowman',
		health: 50,
		level: 3,
		attack: 40,
		defence: 10,
		special: [
			{
				id: 8,
				name: 'Двойной выстрел',
				icon: 'http://...',
				description: 'Двойной выстрел наносит двойной урон',
			},
			{
				id: 9,
				name: 'Нокаутирующий удар',
				icon: 'http://...',
			},
		],
	}

	const result = getSpecialAttacks(character)

	expect(result).toEqual([
		{
			id: 8,
			name: 'Двойной выстрел',
			icon: 'http://...',
			description: 'Двойной выстрел наносит двойной урон',
		},
		{
			id: 9,
			name: 'Нокаутирующий удар',
			icon: 'http://...',
			description: 'Описание недоступно',
		},
	])
})
