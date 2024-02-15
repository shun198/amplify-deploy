import { render, screen } from '@testing-library/react';
import { LoginForm } from "@/features/LoginForm";

// routerをmockしないと以下のエラーが出る
// https://nextjs.org/docs/messages/next-router-not-mounted
jest.mock('next/router', () => require('next-router-mock'));

test('ログイン画面にログインボタン、社員番号、パスワード、パスワードリセットのボタンが期待通りに表示される', () => {
    render(<LoginForm />);
    const button = screen.getByRole('button')
    expect(button).toBeEnabled();
    expect(button).toHaveTextContent("ログイン")
  });
