import { Chrome, Mail } from "lucide-react";
import Link from "next/link";
import { loginWithGoogle } from "../actions";


// TODO : Modularise these signin and sign up forms thorugh compoenents (Low Priority)
const Page = () => {
    return (
        <div className="flex items-center justify-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl opacity-30" />

            <div className="relative z-10 bg-white/5 backdrop-blur-sm border border-white/20 p-10 rounded-2xl shadow-2xl max-w-md w-full mx-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-3">
                        Welcome Back
                    </h1>
                    <p className="text-white/60 text-sm">
                        Sign in to your account
                    </p>
                </div>

                <div className="space-y-4">
                    <form action={loginWithGoogle}>
                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-white text-black font-semibold rounded-xl
                             hover:bg-gray-200 transition-all duration-300 hover:scale-105"
                        >
                            Continue with Google
                        </button>
                    </form>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 text-white/40">or</span>
                        </div>
                    </div>

                    <button
                        className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105"
                    >
                        <Mail className="w-5 h-5" />
                        Continue with Email
                    </button>
                </div>

                <p className="text-white/40 text-xs text-center mt-8 leading-relaxed">
                    By continuing, you agree to our{" "}
                    <span className="text-white/60 hover:text-white cursor-pointer transition-colors">
                        Terms of Service
                    </span>
                    {" "}and{" "}
                    <span className="text-white/60 hover:text-white cursor-pointer transition-colors">
                        Privacy Policy
                    </span>
                </p>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-white/50 text-sm">
                        Dont have an account?{" "}
                        <span className="text-white font-semibold hover:underline cursor-pointer transition-colors">
                            <Link href="/sign-up">Sign up</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Page;