import { useRouter } from 'next/router';
import { LoginDataType } from '../types';
import { useForm } from 'react-hook-form';
import { Input } from '../components/elements/input';
import { fetcher, getToken } from './fetch';

export const LoginForm = () => {
    const router = useRouter();
    const onSubmit = async (data: LoginDataType) => {
        try {
            await getToken()
            await fetcher<LoginDataType, null>({
                url: 'login',
                body: data,
            });
            await router.push('/top');
        } catch (error) {
            if (error instanceof Error) {
                console.log(error)
            }
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginDataType>({
        reValidateMode: 'onSubmit',
        defaultValues: {
            employee_number: '',
            password: '',
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input 
                id="employee_number"
                placeholder='社員番号'
                register={register('employee_number', {
                    required: {
                      value: true, 
                      message: '社員番号を入力してください',
                    },
                    pattern: {
                        value: /^[0-9]{8}$/,
                        message: '8桁の数字のみ入力してください。',
                      },
                  })}
            />
            {errors.employee_number?.message && <div>{errors.employee_number.message}</div>}
        </div>
        <div>
            <Input 
                id="password"
                placeholder='パスワード'
                type="password"
                register={register('password', {
                    required: {
                      value: true, 
                      message: 'パスワードを入力してください'
                    },
                  })}
            />
            {errors.password?.message && <div>{errors.password.message}</div>}
        </div>
          <button type="submit">ログイン</button>
        </form>
    )
}
