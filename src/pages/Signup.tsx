import {
    AxiosError,
    Spinner,
    Toaster,
    toast,
    useForm,
    useNavigate,
    useState,
    z,
    zodResolver
} from "../imports/login";
import { signup } from "../services/auth-request";

const schema = z.object({
    fullname: z.string().min(6, { message: "Name must contain atleast 5 characters" }),
    email: z.string().email(),
    password: z.string().min(5, { message: "Password must contain at least 5 character" })
});

type FormData = z.infer<typeof schema>;

function Signup() {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>({ resolver: zodResolver(schema) });

    // signup user with their fullname ,  email and password
    const onSubmit = handleSubmit(({ fullname, email, password }) => {
        setLoading(true);
        signup(fullname, email, password)
            .then(({ data }) => {
                setLoading(false);
                localStorage.setItem("token", data);
                navigate("/shoes");
            })
            .catch((error: unknown) => {
                if (error instanceof AxiosError) {
                    setLoading(false);
                    toast.error(error.response?.data);
                }
            });
    });

    return (
        <>
            <div className="flex justify-center w-[100vw] h-[100vh] px-5">
                <div className="w-box h-fit  flex-col self-center">
                    <h3 className="font-semibold text-5xl text-center">Signup to SneakerSpot</h3>
                    <p className="text-center text-xl my-5 font-medium leading-8 text-[#71717A]">
                        SneakerSpot is your go-to destination for the latest and greatest sneakers.
                        Browse our extensive collection of stylish and comfortable sneakers.
                    </p>
                    <form className="mt-11" onSubmit={onSubmit}>
                        <div className="mb-5">
                            <label htmlFor="email" className="text-2xl font-semibold">
                                Fullname
                            </label>
                            <input
                                type="text"
                                id="email"
                                className="block w-full border border-gray-300 py-6 mt-3 rounded-lg px-3 text-2xl"
                                {...register("fullname")}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-xl mt-3">
                                    {errors.fullname?.message}
                                </p>
                            )}
                        </div>
                        <div className="">
                            <label htmlFor="email" className="text-2xl font-semibold">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="block w-full border border-gray-300 py-6 mt-3 rounded-lg px-3 text-2xl"
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-red-600 text-xl mt-3">{errors.email.message}</p>
                            )}
                        </div>
                        <div className="my-7">
                            <label htmlFor="password" className="text-2xl font-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="block w-full border border-gray-300 py-6 mt-3 rounded-lg px-3 text-2xl"
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-xl mt-3">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>
                        <button className="py-6 bg-black text-white text-center text-semibold text-2xl w-full rounded-lg mt-5">
                            {loading ? <Spinner /> : "Signup"}
                        </button>
                        <p className="text-center font-medium text-2xl mt-10 text-[#71717A]">
                            Don&apos;t have an account?{" "}
                            <span
                                onClick={() => navigate("/")}
                                className="text-black cursor-pointer">
                                Login
                            </span>
                        </p>
                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        fontSize: 16
                    }
                }}
            />
        </>
    );
}

export default Signup;
