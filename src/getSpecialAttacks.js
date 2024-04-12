function getSpecialAttacks(character) {
	const result = []

	for (const {
		id,
		name,
		icon,
		description = 'Описание недоступно',
	} of character.special) {
		result.push({ id, name, icon, description })
	}

	return result
}

module.exports = getSpecialAttacks
