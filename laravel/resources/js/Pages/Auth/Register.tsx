import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import GuestLayout from '@/Layouts/GuestLayout';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import { useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react';
import InputError from '@/Components/InputError';

export default function Register() {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	})

	const submit: FormEventHandler = (e) => {
		e.preventDefault();
		post(route('register'), {
			onFinish: () => reset('password', 'password_confirmation')
		});
	};

	return (
		<>
			<Header />
			<GuestLayout title="会員登録">
				<div className="w-full  flex flex-col items-center">
					<form onSubmit={submit} className="w-full  sm:w-96 md:w-[500px]">


						<div className="m-3 ">
							<InputLabel htmlFor="name">お名前</InputLabel>
							<TextInput field="name" value={data.name} setData={setData} />
							<InputError message={errors.name} />
						</div>

						<div className="m-3">
							<InputLabel htmlFor="email">メールアドレス</InputLabel>
							<TextInput field="email" value={data.email} setData={setData} />
							<InputError message={errors.email} />
						</div>

						<div className="m-3">
							<InputLabel htmlFor="password">パスワード</InputLabel>
							<TextInput field="password" value={data.password} setData={setData} />
							<InputError message={errors.password} />
						</div>

						<div className="m-3">
							<InputLabel htmlFor="password_confirmation">パスワード確認</InputLabel>
							<TextInput field="password_confirmation" value={data.password_confirmation} setData={setData}/>
						</div>

						<PrimaryButton disabled={processing}>登録</PrimaryButton>

					</form>

					<div className="text-center mt-4">
						<Link href={route('login')} className="text-sky-600 hover:text-sky-300">ログインはこちら</Link>
					</div>

				</div>
			</GuestLayout>
		</>
	)
}