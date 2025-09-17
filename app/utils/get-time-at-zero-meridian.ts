export function getTimeAtZeroMeridian() {
	const now = new Date()
	const utcTime = now.getTime() + now.getTimezoneOffset() * 60000 // Переводим в UTC

	return new Date(utcTime)
}
