import { useRouter } from 'next/router';
import { LoginDataType } from '../types';
import { useForm } from 'react-hook-form';
import { Input } from '../components/elements/input';
import { fetcher } from './fetch';

export const LoginForm = () => {
    const router = useRouter();
    const onSubmit = async (data: LoginDataType) => {
        try {
            await router.push('/top');
            await fetcher<LoginDataType, null>({
                url: 'users/login',
                body: data,
              });
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
            username: '',
            password: '',
        },
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <Input 
                id="username"
                placeholder='ユーザ名'
                register={register('username', {
                    required: {
                      value: true, 
                      message: 'ユーザ名を入力してください',
                    },
                  })}
                errors={errors}
            />
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
                errors={errors}
            />
        </div>
          <button type="submit">ログイン</button>
        </form>
    )
}
