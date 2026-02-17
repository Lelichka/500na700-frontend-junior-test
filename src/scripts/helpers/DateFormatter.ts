const DateFormatter = new Intl.DateTimeFormat('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
});

export const formatDate = (date: string) : string => {
    return DateFormatter.format(new Date(date)).replace(/\s*г\.$/, '');
}