import { parseCookies } from 'nookies';

export const BASE_URL = `${process.env['NEXT_PUBLIC_API_BASE_URL']}/api/`;
const credentials = 'include';

type FetchProps<ReqBody> = {
    url: string;
    method?: 'POST' | 'PATCH' | 'DELETE' | 'GET';
    body?: ReqBody | null;
  };

  class ApiErrorMessage extends Error {
    message: string;
    constructor(messages: string | string[]) {
      super();
  
      if (Array.isArray(messages)) {
        this.message = messages.join('\n');
      } else {
        this.message = messages;
      }
    }
  }

// for normal fetch
export const fetcher = async <ReqBody, ResBody>({
    url,
    method = 'POST',
    body,
  }: FetchProps<ReqBody>): Promise<ResBody> => {
    const cookies = parseCookies();
    const { csrftoken } = cookies;
    const res = await fetch(`${BASE_URL}${url}`, {
      method,
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken ?? '',
        'Cache-Control': 'private',
        ...(process.env['NEXT_PUBLIC_AUTH_NAME']
          ? { [process.env['NEXT_PUBLIC_AUTH_NAME']]: process.env['NEXT_PUBLIC_AUTH_VALUE'] }
          : {}),
      },
      body: JSON.stringify(body) as BodyInit,
      credentials,
    });
    if (res.ok) {
      const data = await res.text();
      return data ? JSON.parse(data) : undefined;
    } else if (res.status === 500) {
      throw new Error('予期せぬエラーが発生しました。再度お試しください');
    } else {
      const response: Record<string, string> = await res.json();
      console.log(res.json())
      if (typeof response.msg === 'string') {
        throw new Error(response.msg);
      } else {
        throw new ApiErrorMessage(Object.values(response).flatMap((item) => item));
      }
    }
  };
