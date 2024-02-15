import { render, screen } from '@testing-library/react';
import { LoginForm } from "@/features/LoginForm";
import userEvent from '@testing-library/user-event';

// routerをmockしないと以下のエラーが出る
// https://nextjs.org/docs/messages/next-router-not-mounted
jest.mock('next/router', () => require('next-router-mock'));

test('ログイン画面にログインボタン、社員番号、パスワード、パスワードリセットのボタンが期待通りに表示される', () => {
    render(<LoginForm />);
    expect(screen.getByRole('textbox', { name: '社員番号' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'パスワード' })).toBeInTheDocument();
    const button = screen.getByRole('button')
    expect(button).toBeEnabled();
    expect(button).toHaveTextContent("ログイン")
});

test('パスワードと社員番号が空の時、ボタンを押下してたらエラーメッセージが表示される', async () => {
    render(<LoginForm />);
    await userEvent.click(screen.getByRole('button', { name: 'ログイン' }));
    expect(screen.getByText('社員番号、またはパスワードが間違っています。')).toBeInTheDocument();
  });
