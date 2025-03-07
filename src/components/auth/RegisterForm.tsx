import React, { useState } from 'react';
import { Label, TextInput, Button, Toast } from 'flowbite-react';
import { HiMail, HiLockClosed, HiUser, HiEye, HiEyeOff, HiCheck, HiX, HiIdentification } from 'react-icons/hi';
import axiosInstance from "../../configs/axios.configs";
import axios from "axios";

interface RegisterFormProps {
    onLoginClick: () => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onLoginClick }) => {
    const [registerData, setRegisterData] = useState({
        nama: '',
        email: '',
        nim: '',
        password: '',
        confirmPassword: '',
    });
    const [showPassword, setShowPassword] = useState({
        password: false,
        confirmPassword: false
    });
    const [toast, setToast] = useState<{
        show: boolean;
        type: 'success' | 'error';
        message: string;
    }>({
        show: false,
        type: 'success',
        message: ''
    });

    const showToast = (type: 'success' | 'error', message: string) => {
        setToast({ show: true, type, message });
        setTimeout(() => {
            setToast(prev => ({ ...prev, show: false }));
        }, 3000);
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validasi input
        if (!registerData.nama.trim()) {
            showToast('error', 'Nama tidak boleh kosong');
            return;
        }

        const emailRegex = /^[0-9]+@students\.uin-suska\.ac\.id$/;
        if (!emailRegex.test(registerData.email.trim())) {
            showToast('error', 'Email harus menggunakan format NIM@students.uin-suska.ac.id');
            return;
        }

        if (registerData.password.length < 8) {
            showToast('error', 'Password harus minimal 8 karakter');
            return;
        }

        // Validasi password dan konfirmasi password
        if (registerData.password !== registerData.confirmPassword) {
            showToast('error', 'Konfirmasi password tidak sesuai');
            return;
        }

        try {
            const response = await axiosInstance.post('/register', {
                nama: registerData.nama,
                email: registerData.email,
                nim: registerData.nim,
                password: registerData.password,
            });

            showToast('success', response.data.message || 'Registrasi berhasil');
            // Tunggu sebentar sebelum beralih ke halaman login
            setTimeout(() => {
                onLoginClick();
            }, 2000);
        } catch (error: unknown) {
            let errorMessage = 'Terjadi kesalahan saat registrasi';

            if (error instanceof Error) {
                errorMessage = error.message;
            } else if (axios.isAxiosError(error)) {
                errorMessage = error.response?.data?.message ||
                    'Registrasi gagal. Silakan coba lagi.';
            }

            showToast('error', errorMessage);
        }
    };

    const togglePasswordVisibility = (field: 'password' | 'confirmPassword', e: React.MouseEvent) => {
        e.preventDefault();
        setShowPassword(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    return (
        <>
            {/* Flowbite Toast */}
            {toast.show && (
                <div className="fixed top-4 right-4 z-50">
                    <Toast>
                        {toast.type === 'success' ? (
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
                                <HiCheck className="h-5 w-5" />
                            </div>
                        ) : (
                            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500">
                                <HiX className="h-5 w-5" />
                            </div>
                        )}
                        <div className="ml-3 text-sm font-normal">{toast.message}</div>
                        <Toast.Toggle onDismiss={() => setToast(prev => ({ ...prev, show: false }))} />
                    </Toast>
                </div>
            )}

            <h2 className="text-2xl font-bold text-center mb-4 text-black">Daftar</h2>
            <form onSubmit={handleRegister} className="space-y-4">
                <div>
                    <Label htmlFor="nama" value="Nama Lengkap" />
                    <TextInput
                        icon={HiUser}
                        id="nama"
                        placeholder="Nama Lengkap"
                        required
                        type="text"
                        value={registerData.nama}
                        onChange={(e) => setRegisterData(prev => ({
                            ...prev,
                            nama: e.target.value
                        }))}
                    />
                </div>
                <div>
                    <Label htmlFor="email" value="Email" />
                    <TextInput
                        icon={HiMail}
                        id="email"
                        placeholder="name@sitrack.com"
                        required
                        type="email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData(prev => ({
                            ...prev,
                            email: e.target.value
                        }))}
                    />
                </div>
                <div>
                    <Label htmlFor="nim" value="NIM" />
                    <TextInput
                        icon={HiIdentification}
                        id="nim"
                        placeholder="Masukkan NIM yang terdaftar"
                        required
                        type="nim"
                        value={registerData.nim}
                        onChange={(e) => setRegisterData(prev => ({
                            ...prev,
                            nim: e.target.value
                        }))}
                    />
                </div>
                <div className="relative">
                    <Label htmlFor="password" value="Password" />
                    <div className="relative">
                        <TextInput
                            icon={HiLockClosed}
                            id="password"
                            placeholder="Password (minimal 8 karakter)"
                            required
                            type={showPassword.password ? "text" : "password"}
                            value={registerData.password}
                            onChange={(e) => setRegisterData(prev => ({
                                ...prev,
                                password: e.target.value
                            }))}
                        />
                        <button
                            type="button"
                            onClick={(e) => togglePasswordVisibility('password', e)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                        >
                            {showPassword.password ? <HiEyeOff /> : <HiEye />}
                        </button>
                    </div>
                </div>
                <div className="relative">
                    <Label htmlFor="confirm-password" value="Konfirmasi Password" />
                    <div className="relative">
                        <TextInput
                            icon={HiLockClosed}
                            id="confirm-password"
                            placeholder="Konfirmasi Password"
                            required
                            type={showPassword.confirmPassword ? "text" : "password"}
                            value={registerData.confirmPassword}
                            onChange={(e) => setRegisterData(prev => ({
                                ...prev,
                                confirmPassword: e.target.value
                            }))}
                        />
                        <button
                            type="button"
                            onClick={(e) => togglePasswordVisibility('confirmPassword', e)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
                        >
                            {showPassword.confirmPassword ? <HiEyeOff /> : <HiEye />}
                        </button>
                    </div>
                </div>
                <Button type="submit" className="w-full" color="dark">
                    Daftar
                </Button>
                <div className="text-center">
                    <p>
                        Sudah punya akun?{' '}
                        <button
                            type="button"
                            onClick={onLoginClick}
                            className="text-black hover:underline"
                        >
                            Masuk
                        </button>
                    </p>
                </div>
            </form>
        </>
    );
};