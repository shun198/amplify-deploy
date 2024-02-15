import { BASE_URL } from '@/features/fetch';
import { HttpResponse, PathParams, http } from 'msw';
import { LoginDataType } from '@/types';


export const AuthInfoHandlers = [
  http.get(`${BASE_URL}users/get_csrf_token`, () => {
    return new HttpResponse(null, {
      status: 200,
    });
  }),
  http.post<PathParams, LoginDataType>(`${BASE_URL}/login`, async ({ request }) => {
    const { employee_number, password } = await request.json();
    if (employee_number === '00000001' && password === 'test') {
      return new HttpResponse(null, {
        status: 200,
      });
    } else {
      return HttpResponse.json({ msg: '社員番号、またはパスワードが間違っています。' }, { status: 400 });
    }
  }),
];
