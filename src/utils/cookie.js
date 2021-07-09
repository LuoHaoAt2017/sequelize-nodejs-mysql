import Cookies from 'js-cookie';

export function getCookie (key: string): string {
  return Cookies.get(key)
}

export function setCookie (name: string, value: string, expireDays: number, path = '/'): void {
  const date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  Cookies.set(name, value, {
    expires: date,
    path: path
  });
}
